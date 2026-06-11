import { Ph } from './ui';

const items = [
  {
    name: 'Pollo & Champiñones',
    desc: 'Pollo desmechado con champiñones salteados y especias.',
    price: '$3.800',
  },
  {
    name: 'Papa & Carne',
    desc: 'Papa criolla con carne desmechada y un toque de hogao.',
    price: '$3.500',
  },
  {
    name: 'Pollo & Arroz',
    desc: 'Pollo desmechado con arroz y especias tradicionales.',
    price: '$3.000',
  },
  {
    name: 'Bocadillo con Queso',
    desc: 'Dulce por fuera y cremoso por dentro. El favorito de muchos.',
    price: '$2.800',
  },
];

export function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="wrap">
        <div className="menu-header reveal">
          <div className="section-label">Nuestro menú</div>
          <h2 className="h2">Nuestras <span className="it">empanadas</span></h2>
          <p className="section-sub">Hechas a mano con ingredientes frescos y mucho amor.</p>
        </div>

        <div className="menu-list stagger-parent">
          {items.map((item) => (
            <div className="menu-row reveal-left" key={item.name}>
              <Ph label="Foto" className="menu-thumb" />
              <div className="menu-body">
                <div className="menu-name">{item.name}</div>
                <div className="menu-desc">{item.desc}</div>
              </div>
              <div className="menu-price">{item.price}</div>
              <div className="menu-chev" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
