const GoogleIcon = () => (
  <svg className="review-google" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const INCENTIVO_QR: [number, number][] = [
  [40,12],[48,12],[56,12],[36,20],[44,20],[52,20],[60,20],[40,28],[50,28],
  [10,40],[22,40],[32,40],[42,40],[52,40],[62,40],[72,40],[84,40],[14,48],[26,48],[38,48],[48,48],[58,48],[68,48],[80,48],[88,48],
  [10,56],[20,56],[34,56],[44,56],[54,56],[66,56],[76,56],[86,56],[16,64],[28,64],[40,64],[50,64],[62,64],[72,64],[82,64],
  [36,72],[44,72],[52,72],[60,72],[68,72],[40,80],[50,80],[60,80],[36,86],[48,86],[56,86],[64,86],
];

const reviews = [
  {
    initials: 'MC',
    name: 'María Clavijo',
    date: 'Hace 2 semanas',
    text: '"La masa más crocante que he probado en Bogotá. Se nota la receta de años. Las congeladas también son increíbles para tener en casa."',
  },
  {
    initials: 'AR',
    name: 'Andrés Rodríguez',
    date: 'Hace 1 mes',
    text: '"Probé las de pollo con champiñones y quedé enamorado. El sabor es auténtico, no como otras empanadas de producción masiva. Altamente recomendadas."',
  },
  {
    initials: 'LM',
    name: 'Laura Morales',
    date: 'Hace 3 semanas',
    text: '"Sabor de casa. Me recordó las empanadas de mi abuela en tierra caliente. El ají casero es un complemento perfecto. Volveré sin duda."',
  },
];

export function Resenas() {
  return (
    <section className="resenas" id="resenas">
      <div className="wrap">
        <div className="resenas-header reveal">
          <div className="section-label">Lo que dicen</div>
          <h2 className="display">
            Lo que dicen<br /><span className="italic">de EmpaYá.</span>
          </h2>
        </div>

        <div className="resenas-grid">
          {reviews.map((r) => (
            <div className="review-card reveal" key={r.name}>
              <div className="review-head">
                <div className="review-stars">★★★★★</div>
                <GoogleIcon />
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initials}</div>
                <div className="review-author-info">
                  <div className="review-name">{r.name}</div>
                  <div className="review-date">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Incentivo */}
        <div className="incentivo reveal">
          <div className="incentivo-grid">
            <div>
              <div className="section-label">Incentivo</div>
              <h3 className="display">
                Deja tu reseña <br /><span className="italic">y gana.</span>
              </h3>
              <p className="incentivo-sub">
                Por cada reseña positiva de 4 o 5 estrellas en Google, elige uno de estos premios al pasar por el local:
              </p>
              <div className="benefits">
                <div className="benefit">
                  <span className="benefit-icon">🥟</span>
                  <div className="benefit-text">Una empanada gratis en tu próxima visita</div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🏷</span>
                  <div className="benefit-text">5% de descuento en congeladas</div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🎟</span>
                  <div className="benefit-text">Cupón de bienvenida para un amigo</div>
                </div>
              </div>
              <a href="https://g.page/r/XXX/review" className="incentivo-cta">
                Calificarnos en Google <span>⭐</span>
              </a>
              <p className="incentivo-note">
                Muestra el pantallazo de tu reseña en el punto de venta para reclamar tu premio. Válido para reseñas de 4 o 5 estrellas.
              </p>
            </div>

            <div className="incentivo-qr">
              <svg className="incentivo-qr-code" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Código QR para calificarnos">
                <rect width="100" height="100" fill="#F5EDE0"/>
                <g fill="#0A0300">
                  <rect x="8" y="8" width="22" height="22"/>
                  <rect x="12" y="12" width="14" height="14" fill="#F5EDE0"/>
                  <rect x="16" y="16" width="6" height="6"/>
                  <rect x="70" y="8" width="22" height="22"/>
                  <rect x="74" y="12" width="14" height="14" fill="#F5EDE0"/>
                  <rect x="78" y="16" width="6" height="6"/>
                  <rect x="8" y="70" width="22" height="22"/>
                  <rect x="12" y="74" width="14" height="14" fill="#F5EDE0"/>
                  <rect x="16" y="78" width="6" height="6"/>
                  {INCENTIVO_QR.map(([x, y], i) => (
                    <rect key={i} x={x} y={y} width="4" height="4"/>
                  ))}
                </g>
              </svg>
              <div className="incentivo-qr-label">Escanéa para <br />calificarnos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
