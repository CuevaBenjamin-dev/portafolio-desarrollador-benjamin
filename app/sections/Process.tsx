const steps = [
  { number: "01", title: "Comprender", description: "El problema y los procesos existentes." },
  { number: "02", title: "Definir", description: "Requerimientos, flujos y lógica de negocio." },
  { number: "03", title: "Diseñar", description: "Interfaces y arquitectura tecnológica." },
  { number: "04", title: "Implementar", description: "Dirigir el desarrollo con herramientas asistidas por IA." },
  { number: "05", title: "Validar", description: "Corregir y desplegar la solución." },
];

export function Process() {
  return (
    <section id="proceso" className="section process-section" aria-labelledby="process-title">
      <div className="page-width">
        <div className="process-grid">
          <div className="process-left">
            <div className="section-heading process-heading" data-reveal>
              <div className="section-heading__label"><span>04 / CÓMO TRABAJO</span><span className="section-heading__line" /></div>
              <h2 id="process-title">
                <span>No planificar es</span>{" "}
                <span>planificar el fracaso.</span>
              </h2>
            </div>
            <div className="process-intro" data-reveal><span className="process-intro__graphic" aria-hidden="true"><i /><i /><i /></span><p>Del análisis a la puesta en marcha, cada decisión busca mantener el propósito original de la solución.</p></div>
          </div>
          <ol className="process-steps">{steps.map((step) => <li key={step.number} data-reveal><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
        </div>
        <div className="ai-note" data-reveal><span>IA EN MI PROCESO</span><p>Utilizo herramientas de inteligencia artificial para acelerar la implementación y explorar soluciones técnicas. Mi participación consiste en definir lo que debe construirse, orientar las decisiones, evaluar la coherencia de los resultados y verificar que el sistema responda a las necesidades originales.</p></div>
      </div>
    </section>
  );
}
