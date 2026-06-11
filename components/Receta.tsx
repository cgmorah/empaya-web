import Image from 'next/image';

const timeline = [
  { year: '1989', label: 'Comenzamos' },
  { year: '2010', label: 'Más familias' },
  { year: '2025', label: 'Gracias a ti' },
];

export function Receta() {
  return (
    <section className="receta" id="receta">
      <div className="wrap">
        <div className="receta-grid">
          <div className="receta-visual reveal">
            <Image
              src="/media/la-receta-del-viejo.webp"
              alt="El fundador preparando empanadas a mano en la cocina familiar"
              fill
              className="receta-img"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
            <div className="receta-img-grad" />
            <div className="receta-caption">Desde 1989</div>
          </div>

          <div className="receta-body reveal">
            <div className="section-label">Nuestra historia</div>
            <h2 className="h2">La receta <span className="it">del viejo.</span></h2>
            <p>
              Todo empezó en la cocina de mi casa, con la receta de mi mamá y el
              sueño de hacer las mejores empanadas del barrio.
            </p>
            <p>Hoy seguimos con la misma pasión y el mismo sabor de siempre.</p>

            <div className="timeline">
              {timeline.map((t, i) => (
                <div key={t.year} style={{ display: 'contents' }}>
                  {i > 0 && <div className="timeline-arrow" aria-hidden="true" />}
                  <div className="timeline-node">
                    <span className="timeline-year">{t.year}</span>
                    <span className="timeline-label">{t.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="receta-note">35 años de tradición que se sienten.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
