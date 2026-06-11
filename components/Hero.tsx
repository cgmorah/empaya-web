import Image from 'next/image';
import { WA_URL, WaIcon } from './ui';
import { TrustBar } from './TrustBar';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/media/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
        <div className="hero-bg-grad" />
      </div>

      <Image
        src="/media/35-anos-receta-familiar.webp"
        alt="35 años de receta familiar"
        width={170}
        height={170}
        priority
        className="hero-badge-img hero-anim-badge"
      />

      <div className="wrap hero-inner">
        <div className="hero-content">
          <h1 className="hero-title hero-anim-1">
            Crujientes<br />
            <em className="cream">por fuera.</em><br />
            <em className="amber">Exquisitas</em><br />
            <em className="cream">por dentro.</em>
          </h1>

          <p className="hero-sub hero-anim-2">
            Empanadas colombianas artesanales, frescas y congeladas,
            con nuestra receta familiar de 35 años.
          </p>

          <div className="hero-actions hero-anim-3">
            <a href={WA_URL} className="btn btn-red" target="_blank" rel="noopener noreferrer">
              Pedir ahora <WaIcon size={18} />
            </a>
            <a href="#menu" className="hero-menu-link">
              Ver menú
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="wrap hero-trust">
        <TrustBar />
      </div>
    </header>
  );
}
