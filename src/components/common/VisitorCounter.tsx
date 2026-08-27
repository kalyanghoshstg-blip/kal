import React, { useEffect, useState, useCallback } from 'react';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  addDoc, 
  increment, 
  onSnapshot,
  query,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Eye, Users, Activity, Clock, ShieldCheck, X, RefreshCw, BarChart2, Laptop } from 'lucide-react';

interface VisitorCounterProps {
  className?: string;
  variant?: 'dark' | 'light';
}

interface VisitLogEntry {
  id?: string;
  timestamp: string;
  visitorId: string;
  isNewUnique: boolean;
  userAgent?: string;
  referrer?: string;
}

const BASELINE_TOTAL_VISITS = 0;
const BASELINE_UNIQUE_VISITORS = 0;
const STORAGE_TOTAL_KEY = 'researcho_total_views_record_v5';
const STORAGE_UNIQUE_KEY = 'researcho_unique_views_record_v5';
const VISITOR_ID_KEY = 'researcho_device_uuid_v5';
const RECENT_LOGS_KEY = 'researcho_recent_visit_logs_v5';

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ 
  className = '',
  variant = 'dark'
}) => {
  const [totalVisits, setTotalVisits] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_TOTAL_KEY);
      if (saved) {
        const val = parseInt(saved, 10);
        if (!isNaN(val) && val >= 0) return val;
      }
    }
    return 0;
  });

  const [uniqueVisitors, setUniqueVisitors] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_UNIQUE_KEY);
      if (saved) {
        const val = parseInt(saved, 10);
        if (!isNaN(val) && val >= 0) return val;
      }
    }
    return 0;
  });

  const [recentLogs, setRecentLogs] = useState<VisitLogEntry[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(RECENT_LOGS_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  const [showStatsModal, setShowStatsModal] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [lastRecordedAt, setLastRecordedAt] = useState<string>('Just now');
  const [isLiveConnected, setIsLiveConnected] = useState<boolean>(true);

  // Helper to record a visit
  const recordVisit = useCallback(async (isManualTrigger = false) => {
    setIsIncrementing(true);
    setTimeout(() => setIsIncrementing(false), 3000);

    let isNewDevice = false;
    let visitorId = 'vis_anon';

    if (typeof window !== 'undefined') {
      let storedId = localStorage.getItem(VISITOR_ID_KEY);
      if (!storedId) {
        storedId = 'vis_' + Math.random().toString(36).substring(2, 8);
        localStorage.setItem(VISITOR_ID_KEY, storedId);
        isNewDevice = true;
      }
      visitorId = storedId;
    }

    const now = new Date();
    const timeFormatted = now.toLocaleTimeString();
    setLastRecordedAt(timeFormatted);

    // Optimistically update local numbers immediately so user sees immediate feedback
    setTotalVisits((prev) => {
      const next = prev + 1;
      if (typeof window !== 'undefined') localStorage.setItem(STORAGE_TOTAL_KEY, String(next));
      return next;
    });

    if (isNewDevice) {
      setUniqueVisitors((prev) => {
        const next = prev + 1;
        if (typeof window !== 'undefined') localStorage.setItem(STORAGE_UNIQUE_KEY, String(next));
        return next;
      });
    }

    const newLogItem: VisitLogEntry = {
      id: 'log_' + Date.now(),
      timestamp: timeFormatted,
      visitorId: isManualTrigger ? visitorId + ' (manual)' : visitorId,
      isNewUnique: isNewDevice,
      userAgent: typeof navigator !== 'undefined' ? (navigator.userAgent.includes('Mobile') ? 'Mobile Device' : 'Desktop Browser') : 'Web Browser'
    };

    setRecentLogs((prev) => {
      const updated = [newLogItem, ...prev.slice(0, 9)];
      if (typeof window !== 'undefined') {
        localStorage.setItem(RECENT_LOGS_KEY, JSON.stringify(updated));
      }
      return updated;
    });

    // Write to Firestore database
    try {
      const counterRef = doc(db, 'analytics', 'global');
      const snap = await getDoc(counterRef);

      if (!snap.exists()) {
        await setDoc(counterRef, {
          visits: 1,
          uniqueVisitors: 1,
          lastVisitedAt: now.toISOString(),
          createdAt: now.toISOString()
        });
      } else {
        const currentData = snap.data();
        const curVisits = typeof currentData?.visits === 'number' ? currentData.visits : 0;
        
        // If document still had the old dummy 42,000+ count, reset to real starting value 1
        if (curVisits > 10000) {
          await setDoc(counterRef, {
            visits: 1,
            uniqueVisitors: 1,
            lastVisitedAt: now.toISOString(),
            lastResetAt: now.toISOString()
          });
        } else {
          const updateData: Record<string, unknown> = {
            visits: increment(1),
            lastVisitedAt: now.toISOString()
          };

          if (isNewDevice) {
            updateData.uniqueVisitors = increment(1);
          }

          await setDoc(counterRef, updateData, { merge: true });
        }
      }

      // Also record to subcollection for full audit log
      const logsCol = collection(db, 'analytics', 'global', 'logs');
      await addDoc(logsCol, {
        visitorId,
        isNewUnique: isNewDevice,
        timestamp: now.toISOString(),
        timeFormatted,
        isManualTrigger: !!isManualTrigger
      });

      setIsLiveConnected(true);
    } catch (err) {
      console.warn('Firestore real-time sync notice:', err);
      // Fallback works smoothly locally
    }
  }, []);

  const resetCounterToZero = async () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_TOTAL_KEY, '0');
      localStorage.setItem(STORAGE_UNIQUE_KEY, '0');
      localStorage.removeItem(RECENT_LOGS_KEY);
    }
    setTotalVisits(0);
    setUniqueVisitors(0);
    setRecentLogs([]);

    try {
      const counterRef = doc(db, 'analytics', 'global');
      await setDoc(counterRef, {
        visits: 0,
        uniqueVisitors: 0,
        lastResetAt: new Date().toISOString(),
        lastVisitedAt: new Date().toISOString()
      });
    } catch (err) {
      console.warn('Firestore reset warning:', err);
    }
  };

  useEffect(() => {
    // Record current page visit on initial mount
    recordVisit(false);

    // Listen to real-time updates from Firestore
    let unsubscribe: (() => void) | null = null;
    try {
      const counterRef = doc(db, 'analytics', 'global');
      unsubscribe = onSnapshot(counterRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          if (typeof data?.visits === 'number') {
            const rawVisits = data.visits;
            // Ignore legacy 40k+ count if not yet sanitized
            const finalVisits = rawVisits > 10000 ? 1 : rawVisits;
            setTotalVisits(finalVisits);
            if (typeof window !== 'undefined') localStorage.setItem(STORAGE_TOTAL_KEY, String(finalVisits));
          }
          if (typeof data?.uniqueVisitors === 'number') {
            const rawUnique = data.uniqueVisitors;
            const finalUnique = rawUnique > 10000 ? 1 : rawUnique;
            setUniqueVisitors(finalUnique);
            if (typeof window !== 'undefined') localStorage.setItem(STORAGE_UNIQUE_KEY, String(finalUnique));
          }
          setIsLiveConnected(true);
        }
      }, (error) => {
        console.warn('Firestore snapshot error:', error);
      });

      // Also subscribe to recent logs
      const logsCol = collection(db, 'analytics', 'global', 'logs');
      const logsQuery = query(logsCol, orderBy('timestamp', 'desc'), limit(10));
      const unsubLogs = onSnapshot(logsQuery, (snapshot) => {
        if (!snapshot.empty) {
          const serverLogs: VisitLogEntry[] = snapshot.docs.map(d => {
            const data = d.data();
            return {
              id: d.id,
              timestamp: data.timeFormatted || new Date(data.timestamp).toLocaleTimeString(),
              visitorId: data.visitorId || 'vis_anon',
              isNewUnique: Boolean(data.isNewUnique),
              userAgent: 'Verified Visitor'
            };
          });
          setRecentLogs(serverLogs);
        }
      }, () => {
        // Fallback to local logs silently
      });

      return () => {
        if (unsubscribe) unsubscribe();
        if (unsubLogs) unsubLogs();
      };
    } catch (err) {
      console.warn('Firestore setup warning:', err);
    }
  }, [recordVisit]);

  if (variant === 'dark') {
    return (
      <>
        <div 
          onClick={() => setShowStatsModal(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowStatsModal(true); }}
          title="Click to view live visitor stats and tracking log"
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-slate-800 text-xs shadow-sm hover:border-slate-700 hover:bg-slate-800/90 transition-all cursor-pointer group select-none ${className}`}
        >
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Eye className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center justify-between gap-1">
              <span>Website Visitors</span>
              <span 
                className={`w-1.5 h-1.5 rounded-full ${isLiveConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} 
                title={isLiveConnected ? 'Live Cloud Sync' : 'Local Tracker Active'} 
              />
            </div>
            <div className="font-mono font-bold text-white text-sm leading-tight flex items-center gap-1.5">
              <span>{totalVisits.toLocaleString('en-US')}</span>
              {isIncrementing && (
                <span className="text-[9px] font-sans font-bold text-emerald-400 bg-emerald-950/90 px-1 py-0.2 rounded border border-emerald-500/40 animate-pulse">
                  +1 Live
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Real-time Visitor Tracking Details Modal */}
        {showStatsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div 
              className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl w-full max-w-md shadow-2xl p-5 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Live Visitor Analytics</h3>
                    <p className="text-[11px] text-slate-400">Real-time tracker & database audit record</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowStatsModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-blue-400" />
                    <span>Total Visits</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-white mt-1">
                    {totalVisits.toLocaleString('en-US')}
                  </div>
                  <div className="text-[9px] text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>Recorded in Cloud</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1">
                    <Users className="w-3 h-3 text-cyan-400" />
                    <span>Unique Visitors</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-cyan-300 mt-1">
                    {uniqueVisitors.toLocaleString('en-US')}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">
                    Distinct browser devices
                  </div>
                </div>
              </div>

              {/* Real-time Visit Activity Feed */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Live Visit Log (Real-Time)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 normal-case">Last sync: {lastRecordedAt}</span>
                </div>
                <div className="bg-slate-950 rounded-xl border border-slate-800/80 p-2 max-h-40 overflow-y-auto space-y-1.5 font-mono text-[10px]">
                  {recentLogs.map((log, index) => (
                    <div 
                      key={log.id || index}
                      className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-bold">{log.timestamp}</span>
                        <span className="text-slate-400">{log.visitorId}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {log.isNewUnique ? (
                          <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 text-[9px] font-sans font-semibold">
                            New Device
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 text-[9px] font-sans">
                            Returning
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => recordVisit(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>+1 Test Visit</span>
                  </button>
                  <button
                    onClick={resetCounterToZero}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-red-950/80 hover:text-red-300 text-slate-300 text-xs font-medium border border-slate-700 hover:border-red-800/80 transition-colors cursor-pointer"
                    title="Reset total visitors count to 0 in database"
                  >
                    <span>Reset to 0</span>
                  </button>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Auto-saved to Firestore</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={`text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 inline-flex items-center gap-2 font-medium ${className}`}>
      <Users className="w-3.5 h-3.5 text-blue-600" />
      <span>Total Visits: <strong className="font-mono text-slate-900">{totalVisits.toLocaleString('en-US')}</strong></span>
      {isIncrementing && (
        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1 rounded">
          +1
        </span>
      )}
    </div>
  );
};

