'use client';
import { useEffect, useRef } from 'react';

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vsec" ref={sectionRef} id="proceso">
      {/* Cinematic background */}
      <div className="vsec-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="vsec-video"
          src="/media/video.mp4"
          muted
          autoPlay
          playsInline
          loop
          preload="metadata"
        />
        <div className="vsec-overlay" />
        <div className="vsec-vignette" />
        <div className="vsec-grain" />
      </div>

      {/* Corner stamps */}
      <div className="vsec-corner vsec-corner-tl" aria-hidden="true">
        <span className="vsec-corner-brand">EmpaYá</span>
        <span className="vsec-corner-sub">Bogotá · CO</span>
      </div>
      <div className="vsec-corner vsec-corner-br" aria-hidden="true">
        <span className="vsec-corner-brand">SINCE 1990</span>
        <span className="vsec-corner-sub">Empanadas artesanales</span>
      </div>

      {/* Main content */}
      <div className="vsec-content">
        <div className="wrap">
          <div className="vsec-badge reveal">
            <span className="vsec-badge-line" />
            <span className="vsec-badge-label">El Sabor</span>
            <span className="vsec-badge-line" />
          </div>

          <h2 className="vsec-headline reveal">
            Tan exquisitas que te<br />
            <em className="vsec-em">chuparas los dedos.</em>
          </h2>

          <p className="vsec-sub reveal">
            Desde 1990, sin cambiar el ritual. Maíz local, manos propias,<br className="vsec-br" />
            el mismo <em>crunch</em> que te hace volver.
          </p>

          <div className="vsec-actions reveal">
            <a href="#menu" className="vsec-cta">
              Ver el menú
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M2 7.5H13M13 7.5L7.5 2M13 7.5L7.5 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://wa.me/57XXXXXXXXXX" className="vsec-ghost">
              Pedir ahora
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="vsec-scroll" aria-hidden="true">
        <div className="vsec-scroll-line" />
        <span className="vsec-scroll-label">Scroll</span>
      </div>
    </section>
  );
}
