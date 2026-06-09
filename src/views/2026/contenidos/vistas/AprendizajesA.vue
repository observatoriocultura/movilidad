<script setup>
const sintesis = [
  {
    icono: 'bi-clipboard2-data-fill',
    texto: 'Diagnosticar con rigor ya es un logro; hacer varios diagnósticos obliga a priorizar.',
  },
  {
    icono: 'bi-lightbulb-fill',
    texto: 'El conocimiento no basta si no se interviene también el contexto.',
  },
  {
    icono: 'bi-sliders2',
    texto: 'Los problemas comportamentales no admiten soluciones estándar.',
  },
  {
    icono: 'bi-hourglass-split',
    texto: 'El cambio real toma más tiempo del que cabe en un convenio.',
  },
]

const aprendizajes = [
  {
    numero: '01',
    icono: 'bi-translate',
    titulo: 'Construir un lenguaje común',
    subtitulo: 'La alineación técnica también debe presupuestarse.',
    texto:
      'Cuando dos entidades con culturas, procesos y tradiciones distintas trabajan sobre problemas complejos, la alineación no ocurre por decreto. Futuros convenios deberían incorporar una fase formal para acordar qué es un problema comportamental, qué evidencia permite actuar y cómo se traduce un hallazgo en una estrategia concreta.',
    claves: ['glosarios compartidos', 'criterios de decisión', 'protocolos de validación conjunta'],
  },
  {
    numero: '02',
    icono: 'bi-kanban-fill',
    titulo: 'Negociar rigor y operación',
    subtitulo: 'Ajustar no es debilitar la metodología.',
    texto:
      'La Rueda de Cambio Comportamental orienta qué intervención resulta pertinente para cada barrera. Pero entre el modelo y la ejecución aparecen tiempos, presupuestos, contratación, logística e infraestructura. Aplicarlo bien implica saber dónde ajustar sin perder la lógica de cambio.',
    claves: ['qué se priorizó', 'qué se descartó', 'por qué se ajustó'],
  },
  {
    numero: '03',
    icono: 'bi-arrow-repeat',
    titulo: 'Pensar la continuidad',
    subtitulo: 'Un piloto prometedor no equivale a cambio sostenible.',
    texto:
      'Las estrategias se diseñaron, pilotearon e implementaron en plazos contractuales definidos. El cambio comportamental necesita repetición, seguimiento y presencia sostenida en el territorio. Los convenios futuros deben operar como eslabones de un proceso más largo.',
    claves: ['continuidad institucional', 'seguimiento', 'indicadores de persistencia'],
  },
]
</script>

<template>
  <main class="contenido-slide aprendizajes-a">
    <section class="container-fluid px-3 px-lg-4 py-3 h-100">
      <header class="row g-3 align-items-stretch mb-3">
        <div class="col-12 col-lg-5">
          <div class="contenido-panel contenido-panel--left title-panel h-100 p-3 p-xl-4">
            <p class="contenido-eyebrow mb-2">Aprendizajes hasta aquí</p>
            <h1 class="contenido-title mb-3">Este proceso deja varias lecciones</h1>
            <p class="lead contenido-text mb-0">
              El valor del convenio no está solo en sus productos: también está en lo que enseña
              sobre cómo diseñar, ejecutar y sostener procesos de cambio comportamental.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <div class="contenido-panel summary-panel h-100 p-3 p-xl-4">
            <div class="summary-grid">
              <article v-for="item in sintesis" :key="item.texto" class="summary-item">
                <span class="contenido-icon contenido-icon--brand-soft contenido-icon--sm summary-item__icon" aria-hidden="true">
                  <i class="bi" :class="item.icono"></i>
                </span>
                <p class="mb-0">{{ item.texto }}</p>
              </article>
            </div>
          </div>
        </div>
      </header>

      <section class="row g-3 learning-row" aria-label="Aprendizajes estratégicos del proceso">
        <div v-for="aprendizaje in aprendizajes" :key="aprendizaje.numero" class="col-12 col-lg-4">
          <article class="contenido-panel contenido-panel--top learning-card h-100 p-3 p-xl-4">
            <div class="learning-card__top mb-3">
              <span class="contenido-number learning-card__number">{{ aprendizaje.numero }}</span>
              <span class="contenido-icon contenido-icon--blue contenido-icon--md learning-card__icon" aria-hidden="true">
                <i class="bi" :class="aprendizaje.icono"></i>
              </span>
            </div>

            <h2 class="contenido-heading mb-2">{{ aprendizaje.titulo }}</h2>
            <h3 class="mb-3">{{ aprendizaje.subtitulo }}</h3>
            <p class="learning-card__text mb-3">{{ aprendizaje.texto }}</p>

            <ul class="contenido-key-list key-list mb-0" aria-label="Productos o decisiones clave">
              <li v-for="clave in aprendizaje.claves" :key="clave">
                <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
                <strong>{{ clave }}</strong>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.title-panel h1 {
  font-size: clamp(2rem, 3.4vw, 3.55rem);
}

.title-panel .lead {
  max-width: 560px;
  font-size: clamp(0.95rem, 1.08vw, 1.12rem);
  font-weight: 500;
  line-height: 1.28;
}

.summary-grid {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 18px;
  align-content: center;
}

.summary-item {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.summary-item p {
  color: var(--contenidos-texto);
  font-size: clamp(0.88rem, 1vw, 1rem);
  font-weight: 650;
  line-height: 1.22;
}

.learning-row {
  min-height: 410px;
}

.learning-card {
  display: flex;
  flex-direction: column;
}

.learning-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.learning-card h2 {
  font-size: clamp(1.2rem, 1.55vw, 1.65rem);
}

.learning-card h3 {
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(0.95rem, 1.1vw, 1.1rem);
  font-weight: 850;
  line-height: 1.14;
}

.learning-card__text {
  color: var(--contenidos-texto);
  font-size: clamp(0.84rem, 0.95vw, 0.95rem);
  font-weight: 450;
  line-height: 1.24;
}

.key-list {
  margin-top: auto;
}

@media (max-width: 991.98px) {
  .learning-row {
    min-height: auto;
  }
}

@media (max-width: 575.98px) {
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .title-panel h1 {
    font-size: 2rem;
  }
}
</style>
