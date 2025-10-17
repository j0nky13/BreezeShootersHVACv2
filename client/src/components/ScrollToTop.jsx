import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Runs before the browser paints the new screen
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}