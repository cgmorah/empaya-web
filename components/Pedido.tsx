'use client';
import { useState } from 'react';
import { WA_URL, WaIcon, QrPh } from './ui';

export function Pedido() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pedido, setPedido] = useState('');
  const [notas, setNotas] = useState('');

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const lineas = [
      '¡Hola EmpaYá! Quiero hacer un pedido:',
      nombre && `• Nombre: ${nombre}`,
      telefono && `• Teléfono: ${telefono}`,
      pedido && `• Pedido: ${pedido}`,
      notas && `• Notas: ${notas}`,
    ].filter(Boolean);
    window.open(`${WA_URL}?text=${encodeURIComponent(lineas.join('\n'))}`, '_blank', 'noopener');
  };

  return (
    <section className="pedido" id="pedido">
      <div className="wrap">
        <div className="pedido-grid">
          <div className="reveal">
            <h2 className="h2">¡Haz tu pedido!</h2>
            <p className="section-sub">Escríbenos y te respondemos al instante.</p>

            <form className="pedido-form" onSubmit={enviar}>
              <input
                className="field"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <input
                className="field"
                type="tel"
                placeholder="Teléfono / WhatsApp"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
              <input
                className="field"
                placeholder="¿Qué deseas pedir?"
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
                required
              />
              <textarea
                className="field"
                placeholder="Notas adicionales (opcional)"
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
              />
              <button type="submit" className="btn btn-amber">
                Enviar pedido <WaIcon />
              </button>
            </form>
          </div>

          <div className="qr-card reveal-scale">
            <div className="qr-card-title">O escanea y chatea<br />con nosotros</div>
            <QrPh label="QR WhatsApp" />
            <div className="script">¡Te esperamos!</div>
          </div>
        </div>
      </div>
    </section>
  );
}
