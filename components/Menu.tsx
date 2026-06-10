'use client';
import { useState } from 'react';

const EmpSVG = ({ fill = '#E8A84A', circles = [] as { cx: number; cy: number; r: number }[] }) => (
  <svg className="menu-emp" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 55 Q10 22 45 13 Q60 9 75 13 Q110 22 110 55 Q110 80 90 88 Q60 92 30 88 Q10 80 10 55 Z" fill={fill}/>
    <path d="M10 55 Q10 22 45 13 Q60 9 75 13 Q110 22 110 55" stroke="#7F4908" strokeWidth="1" fill="none" strokeDasharray="3 2.5" opacity="0.55"/>
    {circles.map((c, i) => (
      <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="#7F4908" opacity="0.5"/>
    ))}
  </svg>
);

const saladItems = [
  { num: '01', name: 'Pollo & Champiñones', desc: 'Pollo desmechado, champiñones salteados y queso fundido en masa crocante.', price: '$3.800', fill: '#E8A84A', circles: [{cx:40,cy:48,r:1.5},{cx:65,cy:40,r:2},{cx:85,cy:55,r:1.2}] },
  { num: '02', name: 'Papa & Carne', desc: 'Carne desmechada sazonada y papa pastusa. Sabor casero colombiano.', price: '$3.500', fill: '#D89230', circles: [{cx:50,cy:48,r:1.8},{cx:72,cy:55,r:1.5}] },
  { num: '03', name: 'Pollo & Arroz', desc: 'Receta clásica. Pollo desmechado, arroz especiado y masa de maíz crocante.', price: '$3.000', fill: '#E8A84A', circles: [{cx:55,cy:45,r:1.2},{cx:65,cy:52,r:1},{cx:48,cy:55,r:1},{cx:75,cy:50,r:1.2}] },
];

const congeladaItems = [
  { name: 'Papa & Carne', price: 'desde $28.800', fill: '#E8A84A' },
  { name: 'Pollo & Arroz', price: 'desde $28.800', fill: '#DC9D3F' },
  { name: 'Pollo & Champiñones', price: 'desde $28.800', fill: '#F0B156' },
];

function CongeladaCard({ name, price, fill }: { name: string; price: string; fill: string }) {
  const [qty, setQty] = useState(1);
  return (
    <div className="congelada-card reveal">
      <div className="congelada-visual">
        <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="70" rx="8" fill="#1E130A" stroke="#E8A84A" strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          <path d="M35 55 Q35 35 52 28 Q60 26 68 28 Q85 35 85 55 Q85 65 75 68 Q60 70 45 68 Q35 65 35 55 Z" fill={fill}/>
          <path d="M35 55 Q35 35 52 28 Q60 26 68 28 Q85 35 85 55" stroke="#7F4908" strokeWidth="0.8" fill="none" strokeDasharray="2 1.5" opacity="0.6"/>
          <text x="60" y="18" textAnchor="middle" fontFamily="var(--font-bricolage)" fontSize="5.5" fontWeight="700" fill="#E8A84A" letterSpacing="0.1em">×12 / ×20</text>
        </svg>
      </div>
      <div className="congelada-pack">Paquete × 12 | × 20 und.</div>
      <div className="congelada-name">{name}</div>
      <div className="congelada-price">{price}</div>
      <div className="congelada-controls">
        <div className="qty-control">
          <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Quitar">−</button>
          <span className="qty-val">{qty}</span>
          <button className="qty-btn" onClick={() => setQty(q => q + 1)} aria-label="Agregar">+</button>
        </div>
      </div>
      <button className="congelada-add">Agregar al pedido</button>
    </div>
  );
}

export function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="wrap">
        <div className="menu-header reveal">
          <div className="section-label">El Menú</div>
          <h2 className="display">Nuestras <span className="italic">empanadas</span>.</h2>
          <p className="menu-header-sub">Masa de maíz crocante. Rellenos con alma. Todas hechas a mano cada mañana.</p>
        </div>

        <div className="menu-subhead reveal">
          <span>Saladas</span>
          <span className="menu-subhead-side">Frescas · Al momento</span>
        </div>

        <div className="menu-list stagger-parent">
          {saladItems.map((item) => (
            <div className="menu-row reveal-left" key={item.num}>
              <div className="menu-num">{item.num}</div>
              <div className="menu-body">
                <div className="menu-name">{item.name}</div>
                <div className="menu-desc">{item.desc}</div>
              </div>
              <div className="menu-price">{item.price}</div>
              <div className="menu-visual">
                <EmpSVG fill={item.fill} circles={item.circles} />
              </div>
            </div>
          ))}
        </div>

        {/* Dulce */}
        <div className="dulce-feature reveal">
          <div>
            <span className="dulce-tag">Dulce · Especial</span>
            <div className="dulce-name">04 · Bocadillo con Queso</div>
            <p className="dulce-desc">Masa de maíz y plátano maduro, rellena de bocadillo veleño y queso campesino fundido. Un abrazo dulce.</p>
            <div className="dulce-price">$2.800</div>
          </div>
          <div className="dulce-visual">
            <svg className="dulce-empanada" viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="dulceGrad" cx="45%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#F7C566"/>
                  <stop offset="50%" stopColor="#DD9635"/>
                  <stop offset="100%" stopColor="#8E4F10"/>
                </radialGradient>
              </defs>
              <ellipse cx="120" cy="185" rx="85" ry="8" fill="#000" opacity="0.2"/>
              <path d="M25 110 Q25 50 80 35 Q120 25 160 35 Q215 50 215 110 Q215 145 180 162 Q120 170 60 162 Q25 145 25 110 Z" fill="url(#dulceGrad)"/>
              <path d="M25 110 Q25 50 80 35 Q120 25 160 35 Q215 50 215 110" stroke="#5F3404" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <g opacity="0.85">
                <path d="M30 108 L42 102 L44 114 L32 120 Z" fill="#8E4F10"/>
                <path d="M44 114 L60 110 L62 122 L48 127 Z" fill="#8E4F10"/>
                <path d="M62 122 L80 124 L82 134 L64 134 Z" fill="#8E4F10"/>
                <path d="M82 134 L105 140 L105 148 L82 147 Z" fill="#8E4F10"/>
                <path d="M105 148 L135 150 L135 158 L105 158 Z" fill="#8E4F10"/>
                <path d="M135 150 L160 146 L160 156 L135 158 Z" fill="#8E4F10"/>
                <path d="M160 146 L182 138 L184 148 L160 156 Z" fill="#8E4F10"/>
                <path d="M184 148 L200 132 L205 142 L184 148 Z" fill="#8E4F10"/>
                <path d="M200 132 L213 115 L215 125 L205 142 Z" fill="#8E4F10"/>
              </g>
              <ellipse cx="90" cy="70" rx="40" ry="15" fill="#FDDF9A" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Congeladas */}
        <div className="menu-subhead reveal">
          <span>Congeladas · Para tener en casa</span>
          <span className="menu-subhead-side">Paquetes × 12 y 20 und.</span>
        </div>
        <div className="congeladas-grid">
          {congeladaItems.map((item) => (
            <CongeladaCard key={item.name} {...item} />
          ))}
        </div>

        {/* Ají */}
        <div className="aji-strip reveal">
          <div className="aji-left">
            <span className="aji-icon">🌶</span>
            <div>
              <div className="aji-name">Ají Casero EmpaYá</div>
              <div className="aji-desc">Gratis con tu compra · Ingredientes frescos que realzan cada empanada.</div>
            </div>
          </div>
          <div className="aji-price">Adicional $2.500</div>
        </div>
      </div>
    </section>
  );
}
