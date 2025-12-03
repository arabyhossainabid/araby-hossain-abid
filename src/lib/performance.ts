/* eslint-disable @typescript-eslint/no-explicit-any */
// Performance monitoring utility
export const reportWebVitals = (metric: any) => {
    if (process.env.NODE_ENV === 'production') {
        // You can send metrics to analytics service here
        // Example: analytics.track(metric.name, metric.value);
    }
};

// Lazy load helper
export const lazyLoad = (importFunc: () => Promise<any>) => {
    return importFunc();
};

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle utility for scroll events
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;

    return function executedFunction(...args: Parameters<T>) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// If you want proper typing, replace `any` with `unknown` or appropriate types, e.g. PerformanceObserverEntry, Metric types.
export function sendToAnalytics(metric: any) {
  // ...existing code...
}
