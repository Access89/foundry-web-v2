import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views with Google Analytics
 * Automatically sends page view events when the route changes
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (loaded from index.html)
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      const gtag = (window as any).gtag;
      
      // Send page view to Google Analytics
      gtag('config', 'G-DN2CHVCPH3', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });

      // Optional: Send a custom event for page views
      gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
};
