'use client';
import { useState } from 'react';

type Answers = Record<number, string>;

const questions = [
  { id: 1, label: 'Temperatura al recibirla', options: ['Fría', 'Tibia', 'Perfectamente caliente'] },
  { id: 2, label: 'El relleno', options: ['Regular', 'Bueno', '¡Delicioso!', 'Podría mejorar'] },
  { id: 3, label: 'Textura de la masa', options: ['Blanda', 'Normal', 'Crocante perfecta'] },
  { id: 4, label: 'Presentación', options: ['Mejoraría', 'Bien', '¡Muy bonita!'] },
  { id: 5, label: '¿Volverías a pedir?', options: ['No', 'Tal vez', '¡Claro que sí!'] },
];

const sabores = ['Pollo & Champiñones', 'Papa & Carne', 'Pollo & Arroz', 'Bocadillo con Queso'];

const QR_RECTS = [
  [36,10],[42,10],[36,16],[48,16],[58,10],[36,22],[46,22],[54,22],[42,28],[52,28],[62,28],
  [10,36],[20,36],[30,36],[40,36],[50,36],[60,36],[70,36],[80,36],[16,42],[26,42],[36,42],
  [48,42],[58,42],[68,42],[82,42],[10,48],[22,48],[36,48],[44,48],[54,48],[64,48],[74,48],
  [86,48],[18,54],[28,54],[40,54],[52,54],[62,54],[72,54],[82,54],[12,60],[24,60],[36,60],
  [46,60],[58,60],[68,60],[78,60],[88,60],[36,68],[42,68],[50,68],[60,68],[70,68],[80,68],
  [40,74],[52,74],[62,74],[74,74],[86,74],[36,80],[46,80],[58,80],[68,80],[80,80],[42,86],
  [54,86],[64,86],[76,86],[86,86],
];

export function Encuesta() {
  const [answers, setAnswers] = useState<Answers>({});
  const [sabor, setSabor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const select = (qId: number, option: string) =>
    setAnswers((prev) => ({ ...prev, [qId]: option }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="encuesta" id="encuesta">
      <div className="wrap">
        <div className="encuesta-grid">
          <div className="reveal">
            <div className="section-label">Tu opinión</div>
            <h2 className="display">¿Qué tal <span className="italic">tu empanada?</span></h2>
            <p className="encuesta-intro">Tu opinión nos ayuda a mejorar cada día. Contesta en 30 segundos.</p>

            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem' }}>
                ¡Gracias por tu opinión! 🥟
              </div>
            ) : (
              <form className="encuesta-form" onSubmit={handleSubmit}>
                {questions.map((q) => (
                  <div className="q-block" key={q.id}>
                    <div className="q-label">
                      <span className="q-label-num">Q{q.id}</span>
                      {q.label}
                    </div>
                    <div className="q-options">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`q-pill${answers[q.id] === opt ? ' selected' : ''}`}
                          onClick={() => select(q.id, opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="q-block">
                  <div className="q-label">
                    <span className="q-label-num">Q6</span>
                    ¿Qué empanada probaste?
                  </div>
                  <select
                    className="q-select"
                    value={sabor}
                    onChange={(e) => setSabor(e.target.value)}
                    required
                  >
                    <option value="">Elige una opción</option>
                    {sabores.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <button type="submit" className="encuesta-submit">Enviar mi opinión</button>
              </form>
            )}
          </div>

          <div className="encuesta-qr reveal">
            <svg className="qr-code" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Código QR para la encuesta">
              <rect width="100" height="100" fill="#F5EDE0"/>
              <g fill="#0A0300">
                <rect x="8" y="8" width="22" height="22"/>
                <rect x="12" y="12" width="14" height="14" fill="#F5EDE0"/>
                <rect x="16" y="16" width="6" height="6"/>
                <rect x="70" y="8" width="22" height="22"/>
                <rect x="74" y="12" width="14" height="14" fill="#F5EDE0"/>
                <rect x="78" y="16" width="6" height="6"/>
                <rect x="8" y="70" width="22" height="22"/>
                <rect x="12" y="74" width="14" height="14" fill="#F5EDE0"/>
                <rect x="16" y="78" width="6" height="6"/>
                {QR_RECTS.map(([x, y], i) => (
                  <rect key={i} x={x} y={y} width="4" height="4"/>
                ))}
              </g>
            </svg>
            <div className="encuesta-qr-title">Escanéa con tu celular</div>
            <div className="encuesta-qr-sub">Responde desde donde estés. Rápido y anónimo.</div>
            <div className="encuesta-qr-note">En empaque · En el local</div>
          </div>
        </div>
      </div>
    </section>
  );
}
