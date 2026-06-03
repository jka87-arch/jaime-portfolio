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

    // Set the correct theme immediately on mount without waiting for the
    // first async intersection callback (fixes wrong color on hard refresh).
    const initial = Array.from(sections).find(s => {
      const rect = s.getBoundingClientRect();
      return rect.top <= 80 && rect.bottom > 80;
    }) ?? sections[0];
    if (initial) {
      const t = initial.getAttribute('data-nav-theme');
      if (t) setTheme(t as 'blue' | 'cream' | 'transparent');
    }

    return () => observer.disconnect();
  }, []);

  return theme;
}