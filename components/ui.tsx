/* Piezas compartidas: link WhatsApp, placeholder de imagen e iconos */

export const WA_URL = 'https://wa.me/573151650333';

export function Ph({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`ph ${className}`}>
      <svg className="ph-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <circle cx="9" cy="10" r="1.8" />
        <path d="M3 16.5l4.8-4.2a1.5 1.5 0 0 1 2 0L15 17.2M13.5 15l2.3-2a1.5 1.5 0 0 1 2 0L21 16" />
      </svg>
      <span className="ph-label">{label}</span>
    </div>
  );
}

export function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.66 15.01L2 22l5.13-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.42-4.4-1.16l-.32-.18-3.05.77.8-2.96-.2-.33A8.18 8.18 0 1 1 12 20.2zm4.5-6.13c-.25-.13-1.46-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22a7.44 7.44 0 0 1-1.38-1.7c-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.57.2-1.06.14-1.17-.06-.1-.23-.17-.48-.3z" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.26 6.86.78-5.1 4.66 1.38 6.76L12 17.07l-6.04 3.39 1.38-6.76-5.1-4.66 6.86-.78L12 2z" />
    </svg>
  );
}

export function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.93-2.91l-3.87-3a7.22 7.22 0 0 1-10.78-3.79H1.29v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.28 14.3a7.18 7.18 0 0 1 0-4.6V6.6H1.29a12.03 12.03 0 0 0 0 10.8l3.99-3.1z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43A11.97 11.97 0 0 0 1.29 6.6l3.99 3.1A7.22 7.22 0 0 1 12 4.75z" />
    </svg>
  );
}

export function QrPh({ label = 'QR · te lo doy luego' }: { label?: string }) {
  return (
    <div className="ph qr-box">
      <svg className="ph-icon" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM20 14h1M14 20h1M18 18h3v3h-3z" />
      </svg>
      <span className="ph-label">{label}</span>
    </div>
  );
}
