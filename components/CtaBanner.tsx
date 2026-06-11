'use client';
import { useEffect, useRef } from 'react';
import { WA_URL, WaIcon } from './ui';

export function CtaBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ctaband">
      <div className="ctaband-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="ctaband-video"
          src="/media/video.mp4"
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="ctaband-grad" />
      </div>

      <svg className="ctaband-spark" viewBox="0 0 48 40" fill="none" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
        <path d="M6 34L16 24M24 28L26 12M36 24L44 18" />
      </svg>

      <div className="wrap">
        <div className="ctaband-inner reveal">
          <h2 className="ctaband-title">
            Tan exquisitas que te<br />
            <span className="it">chupas los dedos.</span>
          </h2>
          <a href={WA_URL} className="btn btn-red" target="_blank" rel="noopener noreferrer">
            Pedir ahora <WaIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
