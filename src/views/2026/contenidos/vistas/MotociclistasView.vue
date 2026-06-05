<template>
  <main class="motociclistas-view">
    <header class="motociclistas-view__header">
      <div>
        <p class="motociclistas-view__eyebrow">Motociclistas</p>

        <h1>Del comportamiento estudiado al comportamiento intervenido</h1>
      </div>

      <p class="motociclistas-view__intro">
        De cuatro problemáticas diagnosticadas, dos fueron priorizadas para intervención:
        <strong>motociclistas</strong> y <strong>empatía entre actores viales</strong>.
      </p>
    </header>

    <section class="motociclistas-view__focus" aria-label="Problema priorizado">
      <div class="motociclistas-view__problem">
        <span>Problemática 1</span>
        <strong>No detenerse ante el semáforo en rojo</strong>
      </div>

      <p>
        La siniestralidad vial concentra un riesgo alto en motociclistas. La no detención ante el
        semáforo es un comportamiento <strong>observable</strong>, <strong>recurrente</strong> y
        <strong>modificable</strong> en intersecciones urbanas.
      </p>

      <p class="motociclistas-view__diagnosis">
        El diagnóstico mostró una brecha clara: saber la norma no garantiza actuar en el momento
        crítico.
      </p>
    </section>

    <section class="motociclistas-view__metrics" aria-label="Indicadores del diagnóstico">
      <article class="metric-card metric-card--featured">
        <div class="metric-card__top">
          <i class="bi bi-heart-pulse" aria-hidden="true"></i>
          <div class="metric-card__number">47%</div>
        </div>
        <h2>Muertes en vía</h2>
        <p>
          Las motos concentran casi la mitad de las muertes viales y el 63 % de las fatalidades en
          Bogotá durante 2024.
        </p>
      </article>

      <article class="metric-card">
        <div class="metric-card__top">
          <i class="bi bi-traffic-light" aria-hidden="true"></i>
          <div class="metric-card__number">98%</div>
        </div>
        <h2>Conocen la norma</h2>
        <p>
          Identifican correctamente la luz roja. El problema no es ignorancia, sino la distancia
          entre <strong>intención declarada</strong> y acción.
        </p>
      </article>

      <article class="metric-card">
        <div class="metric-card__top">
          <i class="bi bi-people-fill" aria-hidden="true"></i>
          <div class="metric-card__number">4,3/10</div>
        </div>
        <h2>Pares que cruzan en rojo</h2>
        <p>
          Perciben que otros también lo hacen. Esa norma descriptiva negativa
          <strong>normaliza la transgresión</strong>.
        </p>
      </article>

      <article class="metric-card">
        <div class="metric-card__top">
          <i class="bi bi-shield-exclamation" aria-hidden="true"></i>
          <div class="metric-card__number">53,8%</div>
        </div>
        <h2>Sin sanción moral</h2>
        <p>
          Nunca o rara vez sienten que obran mal al cruzar en rojo. La regulación moral
          <strong>no opera como freno</strong>.
        </p>
      </article>

      <article class="metric-card">
        <div class="metric-card__top">
          <i class="bi bi-clock-history" aria-hidden="true"></i>
          <div class="metric-card__number">10,8%</div>
        </div>
        <h2>Cruza en rojo</h2>
        <p>
          Declara hacerlo porque cree que <strong>ahorra tiempo</strong>, sin aumentar de forma
          significativa el riesgo.
        </p>
      </article>
    </section>

    <aside class="motociclistas-view__callout" aria-label="Paso a intervención">
      <p>A partir de estos hallazgos, el convenio no se queda en el diagnóstico.</p>
      <strong>Da un paso más: diseña intervenciones concretas.</strong>
    </aside>
  </main>
</template>

<style scoped>
.motociclistas-view {
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 32px 50px;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.42fr);
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: 16px 24px;
  overflow: hidden;
  border-left: 8px solid #f1ff36;
  background: #4e5600;
  color: #fbfae7;
}

.motociclistas-view__header {
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(280px, 0.58fr);
  gap: 26px;
  align-items: end;
}

.motociclistas-view__eyebrow {
  margin: 0 0 10px;
  color: #f1ff36;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.motociclistas-view h1 {
  max-width: 760px;
  margin: 0;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(31px, 3.1vw, 46px);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: 0;
}

.motociclistas-view__intro {
  margin: 0 0 4px;
  color: #f4f5d8;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1.04vw, 16px);
  line-height: 1.38;
}

.motociclistas-view strong {
  color: #f1ff36;
  font-weight: 800;
}

.motociclistas-view__focus {
  grid-column: 1 / 2;
  padding: 16px 18px;
  display: grid;
  grid-template-columns: minmax(250px, 0.82fr) minmax(0, 1fr);
  gap: 12px 22px;
  align-items: center;
  border-left: 6px solid #f1ff36;
  background: rgba(255, 255, 255, 0.1);
}

.motociclistas-view__focus p {
  margin: 0;
  color: #f4f5d8;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(13px, 0.94vw, 15px);
  line-height: 1.34;
}

.motociclistas-view__problem span {
  display: block;
  margin-bottom: 6px;
  color: #f1ff36;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  text-transform: uppercase;
}

.motociclistas-view__problem strong {
  display: block;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(20px, 1.8vw, 27px);
  line-height: 1.1;
}

.motociclistas-view__diagnosis {
  grid-column: 1 / 3;
  padding-top: 2px;
  color: #f1ff36 !important;
  font-weight: 800;
}

.motociclistas-view__metrics {
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  align-items: stretch;
}

.metric-card {
  min-width: 0;
  padding: 14px 13px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  background: #fbfae7;
  box-shadow: 0 18px 36px rgba(20, 24, 0, 0.16);
}

.metric-card--featured {
  border-color: rgba(241, 255, 54, 0.72);
  background: #eef1c7;
}

.metric-card__top {
  min-height: 39px;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.metric-card__top .bi {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(190, 208, 0, 0.22);
  color: #4e5600;
  font-size: 15px;
  line-height: 1;
}

.metric-card__number {
  color: #5a6400;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(25px, 2.18vw, 36px);
  line-height: 0.94;
  font-weight: 900;
  text-align: right;
}

.metric-card--featured .metric-card__number,
.metric-card--featured h2 {
  color: #4e5600;
}

.metric-card--featured .metric-card__top .bi {
  background: #bed000;
  color: #1b1c11;
}

.metric-card--featured p {
  color: #1b1c11;
}

.metric-card h2 {
  margin: 0 0 7px;
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(14px, 1.04vw, 16px);
  line-height: 1.12;
  font-weight: 800;
}

.metric-card p {
  margin: 0;
  color: #303125;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(11px, 0.84vw, 13px);
  line-height: 1.3;
}

.metric-card strong {
  color: #4e5600;
}

.motociclistas-view__callout {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  align-self: stretch;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.12);
}

.motociclistas-view__callout::before {
  content: "";
  width: 100%;
  height: 3px;
  margin-bottom: auto;
  background: #f1ff36;
}

.motociclistas-view__callout p,
.motociclistas-view__callout strong {
  margin: 0;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(18px, 1.65vw, 25px);
  line-height: 1.16;
  font-weight: 800;
}

@media (max-width: 1100px) {
  .motociclistas-view {
    height: auto;
    min-height: 100svh;
    grid-template-columns: 1fr;
    overflow: auto;
  }

  .motociclistas-view__header,
  .motociclistas-view__focus,
  .motociclistas-view__metrics,
  .motociclistas-view__callout {
    grid-column: auto;
    grid-row: auto;
  }

  .motociclistas-view__header,
  .motociclistas-view__focus {
    grid-template-columns: 1fr;
  }

  .motociclistas-view__diagnosis {
    grid-column: auto;
  }

  .motociclistas-view__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .motociclistas-view {
    padding: 28px 24px;
    border-left-width: 6px;
  }

  .motociclistas-view__metrics {
    grid-template-columns: 1fr;
  }
}
</style>
