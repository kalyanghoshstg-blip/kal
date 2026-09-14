import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  isOutdatedBrowser: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      isOutdatedBrowser: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Check if error suggests missing APIs or older browser runtime
    let isOutdated = false;
    if (typeof window !== 'undefined') {
      const hasIntersectionObserver = typeof window.IntersectionObserver !== 'undefined';
      const hasResizeObserver = typeof window.ResizeObserver !== 'undefined';
      const hasFetch = typeof window.fetch !== 'undefined';
      const hasPromise = typeof window.Promise !== 'undefined';

      if (!hasIntersectionObserver || !hasResizeObserver || !hasFetch || !hasPromise) {
        isOutdated = true;
      }
    }

    const msg = error?.message?.toLowerCase() || '';
    if (
      msg.includes('is not a function') ||
      msg.includes('undefined is not an object') ||
      msg.includes('cannot read property') ||
      msg.includes('not supported')
    ) {
      // Further check if the browser version is notably older
      if (typeof navigator !== 'undefined') {
        const ua = navigator.userAgent;
        if (/MSIE|Trident|Chrome\/([1-7][0-9])\.|Version\/[1-9]\.[0-9] Safari/i.test(ua)) {
          isOutdated = true;
        }
      }
    }

    return {
      hasError: true,
      error,
      isOutdatedBrowser: isOutdated,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Researcho ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null, isOutdatedBrowser: false });
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  public render() {
    if (this.state.hasError) {
      // Pure standard HTML & inline styles for 100% reliability across all browsers
      return (
        <div
          style={{
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#ffffff',
            color: '#0f172a',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '100%',
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Researcho by IITians Brand Header */}
            <div style={{ marginBottom: '20px' }}>
              <h1
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1e3a8a',
                  margin: '0 0 6px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                Researcho by IITians
              </h1>
              <p
                style={{
                  fontSize: '13px',
                  color: '#475569',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                Research Support, Training &amp; Expert Guidance
              </p>
            </div>

            <div
              style={{
                height: '1px',
                backgroundColor: '#e2e8f0',
                margin: '16px 0 24px 0',
              }}
            />

            {/* Error Message */}
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#0f172a',
                margin: '0 0 12px 0',
              }}
            >
              {this.state.isOutdatedBrowser
                ? 'Your browser is outdated'
                : 'Something went wrong while rendering this page'}
            </h2>

            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#334155',
                margin: '0 0 24px 0',
              }}
            >
              {this.state.isOutdatedBrowser
                ? 'Your browser is outdated. Please update your browser for the best experience. You can access Researcho by IITians on the latest versions of Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.'
                : 'We encountered an unexpected issue. Please reload the page to continue exploring our research support and training services.'}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                onClick={this.handleReload}
                style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Reload Page
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1e293b',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Go to Home
              </button>
            </div>

            {/* Factual Transparency Note */}
            <div
              style={{
                marginTop: '28px',
                paddingTop: '16px',
                borderTop: '1px solid #e2e8f0',
                fontSize: '11px',
                color: '#64748b',
                lineHeight: '1.5',
              }}
            >
              Official Website:{' '}
              <a
                href="https://researcho-by-iitians.in/"
                style={{ color: '#2563eb', textDecoration: 'underline' }}
              >
                https://researcho-by-iitians.in/
              </a>
              <br />
              Researcho by IITians is an independent research support and training platform.
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
