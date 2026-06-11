import { Ph } from './ui';

const packs = [
  { name: 'Pack x 6', price: '$20.000', save: 'Ahorra $2.800' },
  { name: 'Pack x 12', price: '$38.000', save: 'Ahorra $7.600' },
  { name: 'Pack x 24', price: '$72.000', save: 'Ahorra $19.200' },
];

export function Packs() {
  return (
    <section className="packs" id="packs">
      <div className="wrap">
        <div className="packs-grid">
          <div className="packs-intro reveal">
            <div className="section-label">Para compartir o reservar</div>
            <h2 className="h2">Packs <span className="it">congelados</span></h2>
            <p className="section-sub">Llévalas a casa y disfrútalas cuando quieras.</p>
            <a href="#pedido" className="btn btn-ghost">
              Ver packs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M12 3v18M12 7l-3-2.2M12 7l3-2.2M12 17l-3 2.2M12 17l3 2.2M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
              </svg>
            </a>
          </div>

          {packs.map((p) => (
            <div className="pack-card reveal" key={p.name}>
              <Ph label="Foto del pack" className="pack-visual" />
              <div className="pack-name">{p.name}</div>
              <div className="pack-price">{p.price}</div>
              <div className="pack-save">{p.save}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
