import { StarIcon, GoogleG, QrPh } from './ui';

const reviews = [
  {
    text: 'Las empanadas son deliciosas, se nota el sabor casero y la calidad. ¡Súper recomendadas!',
    name: 'María P.',
  },
  {
    text: 'Compré las congeladas y quedan perfectas en el air fryer. Prácticas y deliciosas.',
    name: 'Juan C.',
  },
  {
    text: 'El bocadillo con queso es mi favorito. Sabor único, las mejores de Bogotá.',
    name: 'Laura G.',
  },
];

const pasos = [
  {
    label: 'Escríbenos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.38-4.1-1.05L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
    ),
  },
  {
    label: 'Déjanos tu reseña',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7a2.4 2.4 0 0 0-3.4-3.4L8.6 15.6 8 19l3.4-.6z" />
        <path d="M4 21h7" />
      </svg>
    ),
  },
  {
    label: 'Recibe un beneficio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </svg>
    ),
  },
];

export function Opiniones() {
  return (
    <section className="opiniones" id="opiniones">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Lo que dicen</div>
          <h2 className="h2">de <span className="it">EmpaYá</span> ♡</h2>
        </div>

        <div className="opiniones-grid stagger-parent">
          {reviews.map((r) => (
            <div className="review-card reveal" key={r.name}>
              <div className="review-top">
                <div className="stars" aria-label="5 estrellas">
                  {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} />)}
                </div>
                <GoogleG />
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-name">{r.name}</div>
            </div>
          ))}
        </div>

        <div className="resena-band reveal">
          <div>
            <h3 className="resena-title">Deja tu reseña<br /><span className="it">y gana.</span></h3>
            <p className="resena-sub">Tu opinión nos ayuda a seguir mejorando.</p>
          </div>

          <div className="resena-steps">
            {pasos.map((p) => (
              <div className="resena-step" key={p.label}>
                <span className="resena-step-icon">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>

          <div className="resena-qr">
            <QrPh label="QR reseña" />
            <span className="script">¡Escanéame!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
