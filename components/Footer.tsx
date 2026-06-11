import Image from 'next/image';
import { WA_URL, WaIcon } from './ui';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo.webp" alt="EmpaYá" width={186} height={62} className="footer-logo-img" />
            <p className="footer-tag">
              Empanadas artesanales hechas con amor, tradición y los mejores ingredientes.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <a href="#menu">Menú</a>
              <a href="#packs">Packs</a>
              <a href="#receta">La receta</a>
            </div>
            <div className="footer-col">
              <a href="#opiniones">Opiniones</a>
              <a href="#ubicacion">Ubicación</a>
              <a href="#pedido">Contáctanos</a>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://facebook.com" className="social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.87.24-1.46 1.49-1.46h1.41V5a19 19 0 0 0-2.07-.1c-2.05 0-3.46 1.25-3.46 3.55V11H8.5v3h2.37v7h2.63z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/empaya.oficial/" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={WA_URL} className="social-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <WaIcon size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EmpaYá Empanadas. Todos los derechos reservados.</span>
          <span>Hecho en Bogotá con 🧡</span>
        </div>
      </div>
    </footer>
  );
}
