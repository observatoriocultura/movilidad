<script setup>
import { computed } from 'vue'
import { vistasContenidos } from '../constants'

const descripcionesCapitulo = {
  Contexto: 'Por qué la movilidad también es un fenómeno cultural y comportamental.',
  Hallazgos: 'Qué reveló el diagnóstico sobre normas, empatía, hábitos y contexto.',
  Motociclistas: 'Cómo se traduce el hallazgo en estrategias para detenerse ante el rojo.',
  Empatía: 'Cómo se intervienen respuestas hostiles y baja conexión entre actores viales.',
  Laboratorios: 'Cómo la conversación sale de la vía y entra al territorio barrial.',
  'Escuela de Multiplicadores': 'Cómo se prepara a otros para sostener cultura ciudadana.',
  Aprendizajes: 'Qué queda para futuros convenios y procesos de cambio comportamental.',
}

const conectores = [
  { texto: 'Diagnóstico riguroso' },
  { texto: 'Priorización de problemas' },
  { texto: 'Diseño de intervenciones' },
  { texto: 'Implementación y aprendizaje' },
]

const capitulos = computed(() => {
  const visibles = vistasContenidos.filter((vista) => vista.display !== false)
  const grupos = new Map()

  visibles.forEach((vista) => {
    if (!grupos.has(vista.capitulo)) {
      grupos.set(vista.capitulo, {
        nombre: vista.capitulo,
        descripcion: descripcionesCapitulo[vista.capitulo] ?? vista.label,
        vistas: [],
      })
    }

    grupos.get(vista.capitulo).vistas.push(vista)
  })

  return Array.from(grupos.values())
})
</script>

<template>
  <main class="contenido-slide estructura-view">
    <section class="container-fluid px-3 px-lg-4 pt-2 pb-3 h-100">
      <header class="estructura-header mb-3">
        <div>
          <p class="contenido-eyebrow mb-1">Mapa de contenidos</p>
          <h1 class="mb-1">Del diagnóstico a la transformación cultural</h1>
          <p class="estructura-header__lead mb-0">
            Esta navegación cuenta el proceso del Convenio 611 de 2025 como una ruta: comprender
            el comportamiento en la vía, priorizar problemas, diseñar intervenciones situadas y
            extraer aprendizajes para continuar.
          </p>
        </div>
      </header>

      <section class="estructura-layout" aria-label="Estructura temática de contenidos">
        <aside class="contenido-panel contenido-panel--soft p-3">
          <h2 class="contenido-heading h4 mb-3">Lógica del recorrido</h2>

          <ol class="connector-list mb-0">
            <li v-for="(conector, index) in conectores" :key="conector.texto">
              <strong>{{ conector.texto }}</strong>
              <i v-if="index < conectores.length - 1" class="bi bi-arrow-down-short connector-arrow" aria-hidden="true"></i>
            </li>
          </ol>
        </aside>

        <div class="diagram-wrap">
          <article
            v-for="(capitulo, index) in capitulos"
            :key="capitulo.nombre"
            class="chapter-node contenido-panel"
            :class="`chapter-node--${index + 1}`"
          >
            <div class="chapter-node__top">
              <div>
                <span class="chapter-node__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <h2>{{ capitulo.nombre }}</h2>
              </div>
            </div>

            <p>{{ capitulo.descripcion }}</p>

            <div class="chapter-node__views" :aria-label="`Vistas de ${capitulo.nombre}`">
              <RouterLink
                v-for="vista in capitulo.vistas"
                :key="vista.key"
                :to="{ name: 'contenidos', params: { key: vista.key } }"
              >
                {{ vista.label }}
              </RouterLink>
            </div>

            <i
              v-if="index < capitulos.length - 1"
              class="bi bi-arrow-right-short chapter-node__arrow"
              aria-hidden="true"
            ></i>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.estructura-view {
  background: #fcfcfc;
}

.estructura-header {
  padding-top: 2px;
}

.estructura-header h1 {
  max-width: 760px;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(1.35rem, 2vw, 2.1rem);
  font-weight: 700;
  line-height: 1.08;
}

.estructura-header__lead {
  max-width: 900px;
  color: var(--contenidos-texto-secundario);
  font-size: clamp(0.82rem, 0.92vw, 0.98rem);
  font-weight: 400;
  line-height: 1.28;
}

.estructura-layout {
  display: grid;
  grid-template-columns: minmax(220px, 0.25fr) minmax(0, 1fr);
  gap: 16px;
}

.connector-list {
  display: grid;
  gap: 7px;
  padding: 0;
  list-style: none;
}

.connector-list li {
  position: relative;
  padding: 9px 0;
  border-bottom: 1px solid rgba(var(--color-5-rgb), 0.12);
}

.connector-list strong {
  color: var(--contenidos-texto);
  font-size: clamp(0.88rem, 0.98vw, 1rem);
  font-weight: 500;
  line-height: 1.15;
}

.connector-arrow {
  display: block;
  margin: 4px 0 -8px;
  color: rgba(var(--color-5-rgb), 0.55);
  font-size: 1.05rem;
}

.diagram-wrap {
  min-height: 448px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 14px 28px;
}

.chapter-node {
  position: relative;
  min-width: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--color-5-rgb), 0.16);
  border-left: 3px solid var(--color-1);
}

.chapter-node:nth-child(even) {
  border-left-color: rgba(var(--color-5-rgb), 0.32);
}

.chapter-node__top {
  margin-bottom: 9px;
}

.chapter-node__number {
  color: rgba(var(--color-1-rgb), 0.56);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.chapter-node h2 {
  margin: 1px 0 0;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(1rem, 1.26vw, 1.38rem);
  font-weight: 700;
  line-height: 1.04;
  text-transform: uppercase;
}

.chapter-node p {
  margin: 0 0 10px;
  color: var(--contenidos-texto-secundario);
  font-size: clamp(0.78rem, 0.88vw, 0.92rem);
  font-weight: 400;
  line-height: 1.2;
}

.chapter-node__views {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.chapter-node__views a {
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(var(--color-1-rgb), 0.14);
  color: #5d6800;
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.chapter-node__views a:hover,
.chapter-node__views a:focus-visible {
  background: rgba(var(--color-1-rgb), 0.28);
  transform: translateY(-1px);
}

.chapter-node__views a:focus-visible {
  outline: 2px solid var(--contenidos-acento-oscuro);
  outline-offset: 2px;
}

.chapter-node__arrow {
  position: absolute;
  top: 50%;
  right: -26px;
  color: #6f7b00;
  font-size: 2rem;
  line-height: 1;
  transform: translateY(-50%);
}

.chapter-node--4 .chapter-node__arrow {
  right: 50%;
  top: auto;
  bottom: -30px;
  transform: translateX(50%) rotate(90deg);
}

@media (max-width: 1199.98px) {
  .diagram-wrap {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto;
  }

  .chapter-node__arrow {
    display: none;
  }
}

@media (max-width: 991.98px) {
  .estructura-header,
  .estructura-layout {
    grid-template-columns: 1fr;
  }

  .diagram-wrap {
    min-height: auto;
    grid-template-columns: 1fr;
  }
}
</style>
