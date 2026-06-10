import Image from 'next/image';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-watermark" aria-hidden="true">EMPAYÁ</div>
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow hero-anim-1">
            <span className="hero-eyebrow-dot" />
            Bogotá · Desde 1990
          </div>

          <h1 className="display hero-anim-2">
            <span className="amber">Crujientes</span><br />
            por fuera.<br />
            <span className="outline">Exquisitas</span><br />
            por dentro.
          </h1>

          <p className="hero-sub hero-anim-6">
            Empanadas frescas y congeladas hechas con la misma receta de mi papá hace 35 años.
            Sin atajos. Sin conservantes.
          </p>
          <div className="hero-actions hero-anim-7">
            <a href="#menu" className="btn btn-primary">
              Ver Menú
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path className="btn-arrow" d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#menu" className="btn btn-ghost">
              Congeladas para llevar
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path className="btn-arrow" d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-badge hero-anim-badge">
            <div className="hero-badge-num">35</div>
            <div className="hero-badge-txt">Años de<br />Receta</div>
          </div>
          <Image
            src="/media/hero-empanada.webp"
            alt="Empanada colombiana crocante EmpaYá"
            width={520}
            height={420}
            className="hero-empanada hero-anim-emp"
            priority
          />
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-hint-line" />
      </div>
    </header>
  );
}
