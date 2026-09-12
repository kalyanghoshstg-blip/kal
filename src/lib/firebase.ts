import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, getFirestore, setLogLevel } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Silence verbose connection retry warnings in sandboxed/iframe preview environments
setLogLevel('error');

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const databaseId = firebaseConfig.firestoreDatabaseId || "ai-studio-researchobyiitia-4111cf28-35ba-4434-a272-e61f5dc2a8e7";

let firestoreInstance;
try {
  firestoreInstance = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  }, databaseId);
} catch {
  firestoreInstance = getFirestore(app, databaseId);
}

export const db = firestoreInstance;

