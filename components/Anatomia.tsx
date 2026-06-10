'use client';
import { useState, useEffect, useRef } from 'react';

const ANATOMY_POINTS = [
  { num: '01', name: 'La Puntica', desc: 'Se empieza por aquí. El primer mordisco es un acto de fe.' },
  { num: '02', name: 'El Humito', desc: 'Señal de frescura. Si hay humito, es perfecta — espera... o no.' },
  { num: '03', name: 'Punto de Reflexión', desc: 'Cuando piensas si pedir otra antes de terminar la que tienes.' },
  { num: '04', name: 'El Culito', desc: 'La mejor parte. Nunca se comparte. Es tuya.' },
  { num: '05', name: 'El Cuerpo', desc: 'Media luna de maíz dorado, frito a temperatura infernal.' },
  { num: '06', name: 'El Relleno', desc: 'El alma. Pollo, carne, papa o lo que manda la abuela.' },
  { num: '07', name: 'Compartir', desc: 'Este punto une pueblos. Para partir un pedacito con alguien.' },
  { num: '08', name: 'La Prueba', desc: "El primer mordisco. De aquí pa'delante, lleva ají." },
];

const HOTSPOT_POSITIONS = [
  { left: '82%', top: '24%' },
  { left: '74%', top: '10%' },
  { left: '92%', top: '54%' },
  { left: '85%', top: '78%' },
  { left: '50%', top: '85%' },
  { left: '38%', top: '58%' },
  { left: '15%', top: '46%' },
  { left: '22%', top: '18%' },
];

export function Anatomia() {
  const [active, setActive] = useState(-1);
  const [animated, setAnimated] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current || !('IntersectionObserver' in window)) {
      setAnimated(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(stageRef.current);
    return () => obs.disconnect();
  }, []);

  const handleHotspot = (i: number) => setActive((prev) => (prev === i ? -1 : i));

  const current = active >= 0 ? ANATOMY_POINTS[active] : null;

  return (
    <section className="anatomia" id="anatomia">
      {/* Video / cinematic panel */}
      <div className="anatomia-video">
        <div className="anatomia-video-placeholder">
          <svg className="anatomia-steam" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 100 Q42 75 50 55 Q58 35 48 15" stroke="#E8A84A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
            <path d="M65 100 Q68 75 60 55 Q52 35 62 15" stroke="#E8A84A" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
            <path d="M80 100 Q78 80 85 65 Q92 45 82 30" stroke="#E8A84A" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
          </svg>
          <svg className="anatomia-video-empanada" viewBox="0 0 520 460" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="vidEmp" cx="45%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#F7C566"/>
                <stop offset="45%" stopColor="#E8A84A"/>
                <stop offset="80%" stopColor="#B8710F"/>
                <stop offset="100%" stopColor="#7F4908"/>
              </radialGradient>
            </defs>
            <ellipse cx="260" cy="410" rx="160" ry="16" fill="#000" opacity="0.4"/>
            <path d="M60 240 Q60 130 180 95 Q260 75 340 95 Q460 130 460 240 Q460 310 400 340 Q340 360 260 360 Q180 360 120 340 Q60 310 60 240 Z" fill="url(#vidEmp)"/>
            <path d="M60 240 Q60 130 180 95 Q260 75 340 95 Q460 130 460 240" stroke="#5F3404" strokeWidth="2.5" fill="none" opacity="0.35"/>
            <g opacity="0.8">
              <path d="M70 235 L90 225 L95 245 L75 255 Z" fill="#9A5D10"/>
              <path d="M95 245 L115 240 L118 258 L100 265 Z" fill="#9A5D10"/>
              <path d="M118 258 L140 260 L145 272 L122 272 Z" fill="#9A5D10"/>
              <path d="M145 272 L170 280 L172 290 L145 290 Z" fill="#9A5D10"/>
              <path d="M172 290 L200 295 L200 305 L173 302 Z" fill="#9A5D10"/>
              <path d="M200 305 L235 308 L235 318 L200 317 Z" fill="#9A5D10"/>
              <path d="M235 318 L270 318 L270 328 L235 330 Z" fill="#9A5D10"/>
              <path d="M270 328 L305 325 L305 335 L270 338 Z" fill="#9A5D10"/>
              <path d="M305 325 L335 320 L335 330 L305 335 Z" fill="#9A5D10"/>
              <path d="M335 320 L365 312 L368 322 L335 330 Z" fill="#9A5D10"/>
              <path d="M365 312 L395 300 L400 310 L368 322 Z" fill="#9A5D10"/>
              <path d="M395 300 L420 285 L425 295 L400 310 Z" fill="#9A5D10"/>
              <path d="M420 285 L445 265 L448 278 L425 295 Z" fill="#9A5D10"/>
              <path d="M445 265 L458 245 L460 260 L448 278 Z" fill="#9A5D10"/>
            </g>
          </svg>
        </div>
        <div className="anatomia-overlay">
          <div className="anatomia-overlay-inner">
            <h2 className="display">Anatomía de <br /><span className="italic">la felicidad.</span></h2>
            <p>Cada parte tiene su momento.</p>
          </div>
        </div>
      </div>

      {/* Interactive section */}
      <div className="anatomia-interactive">
        <div className="wrap">
          <div ref={stageRef} className={`anatomia-stage${animated ? ' animated' : ''}`} id="anatomiaStage">
            <svg className="anatomia-big-empanada" viewBox="0 0 520 460" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="bigEmp" cx="45%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#F7C566"/>
                  <stop offset="45%" stopColor="#E8A84A"/>
                  <stop offset="80%" stopColor="#B8710F"/>
                  <stop offset="100%" stopColor="#7F4908"/>
                </radialGradient>
              </defs>
              <ellipse cx="260" cy="410" rx="170" ry="18" fill="#000" opacity="0.35"/>
              <path d="M60 240 Q60 130 180 95 Q260 75 340 95 Q460 130 460 240 Q460 310 400 340 Q340 360 260 360 Q180 360 120 340 Q60 310 60 240 Z" fill="url(#bigEmp)"/>
              <path d="M60 240 Q60 130 180 95 Q260 75 340 95 Q460 130 460 240" stroke="#5F3404" strokeWidth="2.5" fill="none" opacity="0.35"/>
              <g opacity="0.8">
                <path d="M70 235 L90 225 L95 245 L75 255 Z" fill="#9A5D10"/>
                <path d="M95 245 L115 240 L118 258 L100 265 Z" fill="#9A5D10"/>
                <path d="M118 258 L140 260 L145 272 L122 272 Z" fill="#9A5D10"/>
                <path d="M145 272 L170 280 L172 290 L145 290 Z" fill="#9A5D10"/>
                <path d="M172 290 L200 295 L200 305 L173 302 Z" fill="#9A5D10"/>
                <path d="M200 305 L235 308 L235 318 L200 317 Z" fill="#9A5D10"/>
                <path d="M235 318 L270 318 L270 328 L235 330 Z" fill="#9A5D10"/>
                <path d="M270 328 L305 325 L305 335 L270 338 Z" fill="#9A5D10"/>
                <path d="M305 325 L335 320 L335 330 L305 335 Z" fill="#9A5D10"/>
                <path d="M335 320 L365 312 L368 322 L335 330 Z" fill="#9A5D10"/>
                <path d="M365 312 L395 300 L400 310 L368 322 Z" fill="#9A5D10"/>
                <path d="M395 300 L420 285 L425 295 L400 310 Z" fill="#9A5D10"/>
                <path d="M420 285 L445 265 L448 278 L425 295 Z" fill="#9A5D10"/>
                <path d="M445 265 L458 245 L460 260 L448 278 Z" fill="#9A5D10"/>
              </g>
            </svg>

            <div className="hotspots-container">
              {HOTSPOT_POSITIONS.map((pos, i) => (
                <button
                  key={i}
                  className={`hotspot${active === i ? ' active' : ''}`}
                  style={{ left: pos.left, top: pos.top }}
                  aria-label={ANATOMY_POINTS[i].name}
                  onClick={() => handleHotspot(i)}
                >
                  <div className="hotspot-dot" />
                </button>
              ))}
            </div>
          </div>

          <div className="hotspot-info">
            <div className="hotspot-info-num">
              {current ? `${current.num} · De 08` : 'Toca un punto'}
            </div>
            <div className="hotspot-info-name">
              {current ? current.name : 'Descubre cada parte'}
            </div>
            <div className="hotspot-info-desc">
              {current ? current.desc : 'Cada parte de la empanada tiene su historia, su momento y su razón de ser.'}
            </div>
          </div>

          <div className="anatomia-nav-dots">
            {ANATOMY_POINTS.map((_, i) => (
              <button
                key={i}
                className={`nav-dot${active === i ? ' active' : ''}`}
                aria-label={`Punto ${i + 1}`}
                onClick={() => handleHotspot(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
