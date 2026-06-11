import { WA_URL, WaIcon } from './ui';

export function Ubicacion() {
  return (
    <section className="ubicacion" id="ubicacion">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Visítanos</div>
          <h2 className="h2">Encuéntranos.</h2>
        </div>

        <div className="ubicacion-grid">
          <iframe
            className="mapa reveal-scale"
            src="https://www.google.com/maps?q=Calle+14A+Sur+%2319-46,+Restrepo,+Bogot%C3%A1&output=embed"
            title="Ubicación de EmpaYá en el mapa"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="reveal">
            <div className="ubi-block">
              <div className="ubi-label">Dirección</div>
              <div className="ubi-text">Calle 14 A Sur # 19-46, Local 1<br />Restrepo, Bogotá</div>
            </div>
            <div className="ubi-block">
              <div className="ubi-label">Horario de atención</div>
              <div className="ubi-text">Lunes a Domingo<br />8:00 a.m. – 6:00 p.m.</div>
            </div>
            <a href={WA_URL} className="btn btn-wa" target="_blank" rel="noopener noreferrer">
              Escríbenos por WhatsApp <WaIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
