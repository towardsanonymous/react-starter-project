import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    } else if (pathname === "/") {
      let scrollPosition = JSON.parse(sessionStorage.getItem('scrollLocationHome'));
      if (scrollPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition[1],
            left: scrollPosition[0],
            behavior: 'smooth'
          });
          sessionStorage.removeItem('scrollLocationHome');
        }, 1.2 * 1000);
      }
    }

  }, [pathname]);

  return null; // Since this is a utility component, it doesn't render anything
};

export default ScrollToTop;
