const items = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 13a4.5 4.5 0 1 1 1.1-8.86 5 5 0 0 1 7.8 0A4.5 4.5 0 1 1 17 13v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6z" />
        <path d="M7 17h10" />
      </svg>
    ),
    big: '35',
    accent: 'años',
    small: 'de receta familiar',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <path d="M12 2v20M12 6l-3-2M12 6l3-2M12 18l-3 2M12 18l3 2M3.3 7l17.4 10M6.5 5.6l.4 3.5M3.7 12.4l3.2-1.4M3.3 17L20.7 7M17.5 5.6l-.4 3.5M20.3 12.4l-3.2-1.4" />
      </svg>
    ),
    big: '100%',
    small: 'frescas y congeladas',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7.5-4.6-9.5-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.5 12c-2 4.4-9.5 9-9.5 9z" />
      </svg>
    ),
    big: 'Calidad',
    small: 'artesanal que se siente',
  },
];

export function TrustBar() {
  return (
    <div className="trust-box">
      {items.map((it) => (
        <div className="trust-item" key={it.big}>
          <span className="trust-icon">{it.icon}</span>
          <div>
            <div className="trust-big">
              {it.big}
              {it.accent && <span className="trust-accent"> {it.accent}</span>}
            </div>
            <div className="trust-small">{it.small}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
