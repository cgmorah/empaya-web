import Image from 'next/image';

export function Historia() {
  return (
    <section className="historia" id="historia">
      <div className="wrap">
        <div className="historia-grid">
          <div className="historia-visual reveal">
            <Image
              src="/media/la-receta-del-viejo.webp"
              alt="El fundador preparando empanadas a mano en la cocina familiar"
              fill
              className="historia-img"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
            <div className="historia-img-grad" />
            <div className="historia-caption">Desde 1990</div>
          </div>

          <div className="historia-text reveal">
            <div className="section-label">La Historia</div>
            <h2 className="editorial">
              La receta <br /><span className="italic">del viejo.</span>
            </h2>
            <div className="historia-body">
              <p>
                Todo empezó en una cocina pequeña de Bogotá, con una paila de hierro fundido y una
                receta que no aceptaba atajos. Mi padre creía que el secreto no estaba solo en el
                guiso, sino en el <em>crunch</em> perfecto de la masa de maíz.
              </p>
              <p>
                Hoy, 35 años después, seguimos moliendo el maíz a primera hora y respetando esos
                mismos tiempos de fritura. Sin conservantes. Sin trucos.
              </p>
            </div>

            <div className="timeline">
              <div className="timeline-node">
                <span className="timeline-year">1990</span>
                <span className="timeline-label">Nace la receta</span>
              </div>
              <div className="timeline-arrow" />
              <div className="timeline-node">
                <span className="timeline-year">2010</span>
                <span className="timeline-label">La familia la perfecciona</span>
              </div>
              <div className="timeline-arrow" />
              <div className="timeline-node">
                <span className="timeline-year">2025</span>
                <span className="timeline-label">Llega EmpaYá</span>
              </div>
            </div>

            <div className="historia-stats">
              <div className="historia-stat-group">
                <div className="historia-stat">
                  <div className="num" data-count="35">35</div>
                  <div className="lbl">Años de tradición</div>
                </div>
                <div className="historia-stat">
                  <div className="num" data-count="100" data-count-suffix="%">100%</div>
                  <div className="lbl">Maíz local</div>
                </div>
              </div>
              <a href="#" className="historia-link">
                Conoce nuestra historia completa
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
