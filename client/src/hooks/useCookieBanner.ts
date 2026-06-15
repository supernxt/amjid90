import { useState, useEffect } from "react";

export function useCookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () =>
      setVisible(document.body.classList.contains("cookie-banner-visible"));

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return visible;
}
