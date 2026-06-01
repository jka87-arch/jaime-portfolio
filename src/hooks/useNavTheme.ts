import { useEffect, useState } from 'react';

export function useNavTheme() {
  const [theme, setTheme] = useState<'blue' | 'cream' | 'transparent'>('transparent');

  useEffect(() => {
    const sections = document.querySelectorAll('[data-nav-theme]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const t = entry.target.getAttribute('data-nav-theme');
            if (t) setTheme(t as 'blue' | 'cream' | 'transparent');
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return theme;
}