import Image from 'next/image';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-wrap">
                <Image src="/logo.webp" alt="EmpaYá" fill sizes="84px" className="footer-logo-img" />
              </span>
            </div>
            <p className="footer-tag">
              Empanadas colombianas frescas y congeladas. Receta de familia desde 1990.
            </p>
          </div>

          <div className="footer-col">
            <h4>Menú</h4>
            <ul>
              <li><a href="#menu">Saladas</a></li>
              <li><a href="#menu">Dulce</a></li>
              <li><a href="#menu">Congeladas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explorar</h4>
            <ul>
              <li><a href="#historia">Historia</a></li>
              <li><a href="#anatomia">Anatomía</a></li>
              <li><a href="#resenas">Reseñas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#encuentranos">Dirección</a></li>
              <li><a href="https://wa.me/57XXXXXXXXXX">WhatsApp</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© 2025 EmpaYá · Todos los derechos reservados</div>
          <div className="footer-made">
            Hecho con <span className="footer-made-heart">♥</span> en Bogotá
          </div>
        </div>
      </div>
    </footer>
  );
}
