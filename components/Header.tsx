'use client';
import { useState } from 'react';
import Image from 'next/image';
import { WA_URL, WaIcon } from './ui';

const links = [
  ['#menu', 'Menú'],
  ['#packs', 'Packs'],
  ['#receta', 'La receta'],
  ['#opiniones', 'Opiniones'],
  ['#ubicacion', 'Ubicación'],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="EmpaYá — inicio">
          <Image src="/logo.webp" alt="EmpaYá" width={138} height={46} priority className="nav-logo-img" />
        </a>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>

        <a href={WA_URL} className="btn btn-amber nav-cta" target="_blank" rel="noopener noreferrer">
          Pedir ahora <WaIcon />
        </a>

        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </nav>
  );
}
