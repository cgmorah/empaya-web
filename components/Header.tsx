'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('empaya-theme');
      if (saved === 'light' || saved === 'dark') setTheme(saved);
    } catch {}

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('empaya-theme', next); } catch {}
  }, [theme]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        <a href="#" className="nav-logo">
          <span className="nav-logo-wrap">
            <Image src="/logo.webp" alt="EmpaYá" fill sizes="52px" className="nav-logo-img" priority />
          </span>
        </a>

        <ul className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} id="navLinks">
          {[
            ['#menu', 'Menú'],
            ['#historia', 'Historia'],
            ['#anatomia', 'Anatomía'],
            ['#resenas', 'Reseñas'],
            ['#encuentranos', 'Encuéntranos'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={closeMobile}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="https://wa.me/57XXXXXXXXXX" className="nav-cta">
            Pedir ahora
          </a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            type="button"
          >
            {/* Sun icon */}
            <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/>
            </svg>
            {/* Moon icon */}
            <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4a7.2 7.2 0 1 0 11.5 11.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
