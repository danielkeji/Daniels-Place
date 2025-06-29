import { useEffect, useState } from "react";

const ThemeImage = ({ lightSrc, darkSrc, alt, className }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img src={isDark ? darkSrc : lightSrc} alt={alt} className={className} />
  );
};

export default ThemeImage;
