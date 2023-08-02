import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function scrollToTop(): void {
  window.scrollTo(0, 0);
}

export function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
