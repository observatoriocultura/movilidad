<script setup>
const participantes = [
  'Líderes y lideresas barriales',
  'Organizaciones de base',
  'Juntas de Acción Comunal',
  'Actores viales',
  'Comerciantes formales e informales',
  'Vecinos y vecinas',
  'Otros actores del territorio',
]

const fases = [
  {
    numero: '01',
    icono: 'bi-map',
    titulo: 'Priorización y conformación comunitaria',
    texto: 'Se priorizan los barrios de interacción y se consolida el grupo comunitario.',
  },
  {
    numero: '02',
    icono: 'bi-search',
    titulo: 'Comprensión de la problemática',
    texto:
      'Se desarrolla trabajo comunitario para comprender la problemática, identificar actores involucrados y analizar comportamientos y factores culturales asociados.',
  },
  {
    numero: '03',
    icono: 'bi-lightbulb',
    titulo: 'Ideación de soluciones',
    texto: 'Se construyen colectivamente las soluciones y se aterriza la idea-proyecto.',
  },
  {
    numero: '04',
    icono: 'bi-gear-wide-connected',
    titulo: 'Materialización del proyecto',
    texto:
      'Las ideas se materializan en una solución construida con la comunidad, mediante acciones concretas y productos tangibles.',
  },
]

</script>

<template>
  <main class="contenido-slide contenido-slide--radial laboratorios-a">
    <header class="laboratorios-a__header">
      <h1>LABORATORIOS</h1>
      <p>De la solución en la vía a la conversación en el barrio</p>
      <span aria-hidden="true"></span>
    </header>

    <section class="contenido-panel contenido-panel--soft intro-card info-card info-card--wide" aria-labelledby="laboratorios-que-son">
      <div class="contenido-icon contenido-icon--brand info-card__icon" aria-hidden="true">
        <i class="bi bi-chat-square-heart"></i>
      </div>

      <div>
        <h2 id="laboratorios-que-son">¿Qué son los Laboratorios de Transformación Cultural?</h2>
        <p>
          Los Laboratorios de Transformación Cultural Situada nacen como una apuesta para trabajar
          de la mano con la ciudadanía y construir soluciones que realmente respondan a las
          realidades de cada territorio.
        </p>
        <p>
          Son espacios de <strong>encuentro, diálogo y co-creación</strong> donde diferentes
          actores de la comunidad se reúnen para pensar colectivamente las problemáticas de
          movilidad que viven en su día a día.
        </p>
      </div>
    </section>

    <section class="contenido-panel contenido-panel--soft participants-card" aria-labelledby="laboratorios-participantes">
      <div class="participants-card__intro">
        <div class="contenido-icon contenido-icon--brand info-card__icon" aria-hidden="true">
          <i class="bi bi-people"></i>
        </div>
        <h2 id="laboratorios-participantes">¿Quiénes participan?</h2>
        <p>En estos espacios pueden participar:</p>
      </div>

      <ul>
        <li v-for="participante in participantes" :key="participante">
          <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
          <span>{{ participante }}</span>
        </li>
      </ul>
    </section>

    <section class="info-grid" aria-label="Metodología y proceso">
      <article class="contenido-panel contenido-panel--soft info-card">
        <div class="contenido-icon contenido-icon--brand info-card__icon" aria-hidden="true">
          <i class="bi bi-people-fill"></i>
        </div>
        <h2>¿Cómo se trabaja?</h2>
        <p>
          A través de metodologías participativas, las comunidades tienen un papel activo en la
          construcción de propuestas y acciones que respondan a sus <strong>necesidades</strong>.
        </p>
        <p>
          La apuesta es <strong>construir conjuntamente desde lo local</strong>, reconociendo las
          experiencias y voces de quienes habitan el territorio.
        </p>
      </article>

      <article class="contenido-panel contenido-panel--soft info-card">
        <div class="contenido-icon contenido-icon--brand info-card__icon" aria-hidden="true">
          <i class="bi bi-arrow-repeat"></i>
        </div>
        <h2>Laboratorios como proceso</h2>
        <p>
          Se estructuran como <strong>procesos</strong> que, mediante reflexión, experimentación e
          ideación, generan soluciones a desafíos barriales de movilidad.
        </p>
        <p>
          El proceso culmina en un proyecto con <strong>acciones concretas</strong> y
          <strong>productos tangibles</strong>.
        </p>
      </article>
    </section>

    <section class="phases-panel" aria-labelledby="laboratorios-fases">
      <header class="phases-panel__header">
        <span></span>
        <i class="bi bi-flask" aria-hidden="true"></i>
        <h2 id="laboratorios-fases">Se estructura en 4 fases</h2>
        <span></span>
      </header>

      <div class="phases-list">
        <article v-for="fase in fases" :key="fase.numero" class="phase-row">
          <strong class="contenido-icon contenido-icon--brand">{{ fase.numero }}</strong>
          <div class="contenido-icon contenido-icon--brand-soft phase-row__icon" aria-hidden="true">
            <i class="bi" :class="fase.icono"></i>
          </div>
          <div>
            <h3>{{ fase.titulo }}</h3>
            <p>{{ fase.texto }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.laboratorios-a {
  width: 100%;
  padding: 24px 38px 18px;
  display: grid;
  grid-template-columns: minmax(420px, 0.9fr) minmax(470px, 1fr);
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  gap: 14px 28px;
}

.laboratorios-a__header {
  grid-column: 1 / 2;
}

.laboratorios-a__header h1 {
  margin: 0;
  color: var(--color-1);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(44px, 4.9vw, 70px);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: 0;
}

.laboratorios-a__header p {
  margin: 4px 0 0;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(20px, 1.85vw, 28px);
  line-height: 1.08;
  font-weight: 900;
}

.laboratorios-a__header span {
  width: 76px;
  height: 5px;
  margin-top: 10px;
  display: block;
  border-radius: 999px;
  background: var(--color-1);
}

.intro-card {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.participants-card {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  min-width: 0;
  padding: 24px 28px;
  display: grid;
  grid-template-columns: minmax(210px, 0.52fr) 1fr;
  gap: 24px;
  align-items: center;
}

.participants-card__intro {
  padding-right: 22px;
  border-right: 2px solid rgba(var(--color-1-rgb), 0.58);
}

.participants-card ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 22px;
  list-style: none;
}

.participants-card li {
  min-width: 0;
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  gap: 9px;
  align-items: start;
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.95vw, 15px);
  line-height: 1.22;
  font-weight: 700;
}

.participants-card li .bi {
  margin-top: 1px;
  color: #6f7b00;
  font-size: 16px;
  line-height: 1;
}

.info-grid {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.info-card {
  min-width: 0;
  padding: 18px;
}

.info-card--wide {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 18px;
}

.info-card__icon {
  width: 70px;
  height: 70px;
  font-size: 36px;
}

.info-card h2,
.participants-card h2,
.phases-panel h2 {
  margin: 0;
  color: #6f7b00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(18px, 1.38vw, 23px);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.participants-card h2 {
  margin-top: 12px;
}

.info-card p,
.participants-card p,
.phase-row p {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.96vw, 15px);
  line-height: 1.34;
  font-weight: 600;
}

.info-card p {
  margin-top: 11px;
}

.info-card strong,
.phase-row strong + .phase-row__icon + div strong {
  font-weight: 900;
}

.phases-panel {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  min-width: 0;
  align-self: stretch;
  padding: 10px 10px 0;
}

.phases-panel__header {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 46px auto 1fr;
  gap: 14px;
  align-items: center;
}

.phases-panel__header span {
  height: 2px;
  background: var(--color-1);
}

.phases-panel__header > .bi {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-1);
  border-radius: 50%;
  color: #6f7b00;
  font-size: 24px;
}

.phases-list {
  display: grid;
}

.phase-row {
  min-height: 92px;
  display: grid;
  grid-template-columns: 70px 88px minmax(0, 1fr);
  gap: 22px;
  align-items: center;
  border-top: 1px dotted rgba(var(--color-1-rgb), 0.7);
}

.phase-row > strong {
  width: 58px;
  height: 58px;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 28px;
  font-weight: 900;
}

.phase-row__icon {
  width: 64px;
  height: 64px;
  font-size: 33px;
}

.phase-row h3 {
  margin: 0 0 4px;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(14px, 1.08vw, 17px);
  line-height: 1.12;
  font-weight: 900;
}

@media (max-width: 1180px) {
  .laboratorios-a {
    height: auto;
    grid-template-columns: 1fr;
  }

  .laboratorios-a__header,
  .intro-card,
  .participants-card,
  .info-grid,
  .phases-panel {
    grid-column: auto;
    grid-row: auto;
  }
}

@media (max-width: 700px) {
  .laboratorios-a {
    padding: 28px 20px;
  }

  .participants-card,
  .info-card--wide,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .participants-card__intro {
    padding-right: 0;
    padding-bottom: 18px;
    border-right: 0;
    border-bottom: 2px solid rgba(var(--color-1-rgb), 0.58);
  }

  .participants-card ul {
    grid-template-columns: 1fr;
  }

  .phases-panel__header {
    grid-template-columns: 42px minmax(0, 1fr);
  }

  .phases-panel__header span {
    display: none;
  }

  .phase-row {
    grid-template-columns: 62px minmax(0, 1fr);
    gap: 12px;
    padding: 16px 0;
  }

  .phase-row__icon {
    display: none;
  }
}
</style>
