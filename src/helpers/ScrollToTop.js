import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = () => {
  // Get Pathname
  const {pathname} = useLocation();
  // Scroll To Top Of The Window Smoothly
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
