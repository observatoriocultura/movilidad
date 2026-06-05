<template>
  <main class="empatia-view">
    <header class="empatia-view__header">
      <p class="empatia-view__eyebrow">Empatía</p>

      <h1>Comportamiento intervenido</h1>

      <p class="empatia-view__intro">
        De cuatro problemáticas diagnosticadas, dos fueron priorizadas para intervención:
        <strong>motociclistas</strong> y <strong>empatía</strong> entre actores viales.
      </p>
    </header>

    <section class="empatia-view__problem" aria-label="Problema priorizado">
      <div class="empatia-view__icon" aria-hidden="true">
        <i class="bi bi-hearts"></i>
      </div>

      <div>
        <h2>Problemática 2 Empatía:</h2>
        <p class="empatia-view__problem-title">
          Reactividad vial: respuestas hostiles entre actores que no se reconocen entre ellos
        </p>
        <p class="empatia-view__problem-copy">
          Comportamiento observable, recurrente y con impacto directo en conflicto vial en Bogotá.
        </p>
      </div>
    </section>

    <section class="empatia-view__diagnosis" aria-label="Diagnóstico">
      <div class="empatia-view__diagnosis-title">
        <span aria-hidden="true"><i class="bi bi-search"></i></span>
        <p>El diagnóstico mostró esto <strong>→</strong> por eso se decidió intervenir</p>
      </div>

      <div class="empatia-view__findings">
        <article
          v-for="finding in findings"
          :key="finding.title"
          class="finding-row"
        >
          <div class="finding-row__icon" aria-hidden="true">
            <i :class="finding.icon"></i>
          </div>

          <div class="finding-row__stat">
            <strong>{{ finding.value }}</strong>
            <span>{{ finding.title }}</span>
          </div>

          <p>{{ finding.copy }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const findings = [
  {
    icon: 'bi bi-emoji-frown',
    value: '30,9%',
    title: 'Se alegra del mal ajeno',
    copy:
      'El 30,9% de infractores admite alegrarse cuando le pasa algo malo a otro actor vial. La cultura del castigo entre pares está normalizada y opera como contranorma que inhibe la gratitud y el reconocimiento.',
  },
  {
    icon: 'bi bi-sign-turn-slight-right',
    value: '62,9%',
    title: 'Valoran maniobras riesgosas',
    copy:
      'El 62,9% de infractores considera importante demostrar que es un excelente conductor mediante maniobras. El entorno social recompensa la temeridad y penaliza la precaución: la norma social va en dirección contraria al cambio.',
  },
  {
    icon: 'bi bi-x-lg',
    value: '45%',
    title: 'Empatía nula o negativa',
    copy:
      'Entre actores viales que se perciben como lejanos, el nivel más frecuente es empatía nula o negativa. El comportamiento ajeno se interpreta como falta deliberada, no como error, activando rechazo moral, no comprensión.',
  },
  {
    icon: 'bi bi-gender-male',
    value: '90,8%',
    title: 'Infractores son hombres',
    copy:
      'Los hombres representan el 90,8% de los infractores frente al 80,2% de quienes no tienen comparendos. La conducción riesgosa opera como performance de masculinidad: demostrar dominio e imponerse en la vía.',
  },
]
</script>

<style scoped>
.empatia-view {
  min-height: calc(100svh - 140px);
  width: 100%;
  padding: 32px 54px 26px;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(circle at center, rgba(var(--color-1-rgb), 0.5) 0 2px, transparent 2.5px) right -8px top -4px / 20px 20px no-repeat,
    var(--contenidos-fondo-suave);
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
}

.empatia-view::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: min(30vw, 360px);
  height: 126px;
  opacity: 0.62;
  background-image: radial-gradient(circle, var(--color-1) 0 2px, transparent 2.5px);
  background-size: 18px 18px;
  pointer-events: none;
}

.empatia-view__header,
.empatia-view__problem,
.empatia-view__diagnosis {
  position: relative;
  z-index: 1;
}

.empatia-view__eyebrow {
  width: fit-content;
  margin: 0 0 8px;
  padding-bottom: 6px;
  border-bottom: 3px solid var(--color-1);
  color: var(--color-1);
  font-size: clamp(16px, 1.38vw, 21px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.empatia-view h1 {
  margin: 0 0 7px;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(34px, 3.55vw, 52px);
  line-height: 1.04;
  font-weight: 900;
  letter-spacing: 0;
}

.empatia-view__intro {
  max-width: 1120px;
  margin: 0;
  color: var(--contenidos-texto-secundario);
  font-size: clamp(14px, 1.16vw, 18px);
  line-height: 1.36;
}

.empatia-view strong {
  font-weight: 900;
}

.empatia-view__problem {
  margin-top: 22px;
  padding-bottom: 14px;
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  border-bottom: 2px solid rgba(var(--color-1-rgb), 0.42);
}

.empatia-view__icon {
  width: 66px;
  height: 66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-1);
  border-radius: 14px;
  color: var(--color-2);
  font-size: 38px;
}

.empatia-view__problem h2 {
  margin: 0 0 8px;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(19px, 1.72vw, 26px);
  line-height: 1.08;
  font-weight: 900;
}

.empatia-view__problem-title {
  max-width: 1000px;
  margin: 0 0 9px;
  color: var(--color-1);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(20px, 2vw, 30px);
  line-height: 1.1;
  font-weight: 900;
}

.empatia-view__problem-copy {
  margin: 0;
  color: var(--contenidos-texto-secundario);
  font-size: clamp(13px, 1.02vw, 16px);
  line-height: 1.36;
}

.empatia-view__diagnosis {
  margin-top: 12px;
}

.empatia-view__diagnosis-title {
  width: min(650px, 100%);
  min-height: 44px;
  margin-bottom: 8px;
  padding: 6px 20px 6px 8px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgba(var(--color-1-rgb), 0.14), rgba(var(--color-1-rgb), 0.03));
}

.empatia-view__diagnosis-title span {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(var(--color-1-rgb), 0.68);
  border-radius: 50%;
  color: var(--color-1);
  font-size: 19px;
}

.empatia-view__diagnosis-title p {
  margin: 0;
  color: var(--contenidos-texto-secundario);
  font-size: clamp(14px, 1.12vw, 17px);
  line-height: 1.2;
  font-style: italic;
}

.empatia-view__findings {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.finding-row {
  min-height: 124px;
  padding: 12px 15px 13px;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
  gap: 8px 12px;
  align-items: start;
  border: 1px solid rgba(8, 15, 37, 0.11);
  border-left: 5px solid var(--color-1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.68);
}

.finding-row__icon {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--color-1-rgb), 0.12);
  color: var(--color-1);
  font-size: 24px;
}

.finding-row__stat {
  min-height: 46px;
  padding-right: 0;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 10px;
  border-right: 0;
}

.finding-row__stat strong {
  color: var(--color-4);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(26px, 2.3vw, 36px);
  line-height: 0.95;
  font-weight: 900;
}

.finding-row__stat span {
  margin-top: 0;
  color: var(--color-4);
  font-size: clamp(11px, 0.9vw, 14px);
  line-height: 1.1;
  font-weight: 900;
  text-transform: uppercase;
}

.finding-row p {
  grid-column: 1 / 3;
  margin: 0;
  color: var(--contenidos-texto-secundario);
  font-size: clamp(12px, 0.9vw, 14px);
  line-height: 1.34;
}

@media (max-width: 1100px) {
  .empatia-view {
    min-height: 100svh;
    overflow: auto;
  }

  .finding-row {
    min-height: 148px;
  }
}

@media (max-width: 767.98px) {
  .empatia-view {
    padding: 28px 24px;
  }

  .empatia-view::after {
    width: 190px;
    height: 110px;
  }

  .empatia-view__findings {
    grid-template-columns: 1fr;
  }

  .empatia-view__problem {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .finding-row {
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 12px 14px;
    min-height: auto;
  }

  .finding-row__icon {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }

  .finding-row__stat {
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .finding-row p {
    grid-column: 1 / 3;
  }
}

@media (max-width: 575.98px) {
  .empatia-view {
    padding: 24px 20px;
  }

  .finding-row p {
    padding-left: 0;
  }
}
</style>
