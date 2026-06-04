<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imageBase = `${import.meta.env.BASE_URL}2026/tablero_1/images/`

const estrategias = [
  {
    numero: '01',
    titulo: 'Laboratorio de co-creación',
    subtitulo: 'Taller + composición audiovisual',
    imagen: `${imageBase}empatia-b-1.jpg`,
    alt: 'Laboratorio de co-creación con actores viales, músicos y equipo audiovisual',
    width: 1020,
    height: 676,
    iconos: ['bi-lightbulb', 'bi-camera-reels', 'bi-people'],
    bloques: [
      {
        pregunta: '¿Por qué este diseño?',
        texto:
          'Porque la reconciliación vial no se puede hacer desde afuera. El taller la trabaja con quienes la tienen que vivir, y las piezas las produce ese mismo grupo: una canción y un video que nacen de su propia experiencia.',
      },
      {
        pregunta: '¿Qué se hace?',
        texto:
          '7 sesiones con actores viales diversos: grupos focales que dan insumos temáticos, laboratorio de co-creación con músicos, y producción de un jingle y videoclip sobre la reconciliación vial.',
      },
      {
        pregunta: '¿Quiénes participan?',
        texto: 'Actores viales · artistas y músicos · realizadores audiovisuales.',
      },
    ],
  },
  {
    numero: '02',
    titulo: 'Dispositivos escenográficos',
    subtitulo: 'Intervenciones urbanas temporales',
    imagen: `${imageBase}empatia-b-2.jpg`,
    alt: 'Dispositivo escenográfico urbano con mensaje de gratitud vial',
    width: 755,
    height: 662,
    iconos: ['bi-signpost-split', 'bi-chat-heart', 'bi-sign-intersection'],
    bloques: [
      {
        pregunta: '¿Por qué este diseño?',
        texto:
          'Porque el entorno físico moldea cómo nos comportamos. Si el espacio mismo empieza a hablar un lenguaje de reconocimiento en lugar de sanción, eso cambia la disposición emocional antes de cualquier conflicto.',
      },
      {
        pregunta: '¿Qué se hace?',
        texto:
          'Instalaciones urbanas temporales en zonas de alta fricción que reinterpretan la señalización: mensajes como «Cuando el ciclista para en rojo, da las gracias» refuerzan comportamientos positivos ya existentes.',
      },
      {
        pregunta: '¿Quiénes participan?',
        texto: 'Actores viales en cruces · performers que activan mensajes.',
      },
    ],
  },
  {
    numero: '03',
    titulo: 'Kit pedagógico + contrato social',
    subtitulo: 'Taller mecánico emocional',
    imagen: `${imageBase}empatia-b-3.jpg`,
    alt: 'Kit pedagógico taller mecánico de las emociones en la vía',
    width: 871,
    height: 667,
    iconos: ['bi-tools', 'bi-clipboard-check', 'bi-geo-alt'],
    bloques: [
      {
        pregunta: '¿Por qué este diseño?',
        texto:
          'El kit da herramientas concretas para regular las emociones en el momento exacto del conflicto, y el contrato convierte una intención individual en un compromiso visible.',
      },
      {
        pregunta: '¿Qué se hace?',
        texto:
          'Un taller que simula un taller automotriz emocional: herramientas simbólicas (Extintor Emocional, Retrovisor Social, Líquido Refrigerante) para gestionar reacciones en vía. Cierra con un contrato social que se firma y se acumula.',
      },
      {
        pregunta: '¿Quiénes participan?',
        texto:
          'Actores viales en espacio público · facilitadores · instalación itinerante por Bogotá.',
      },
    ],
  },
]

const resumen = [
  {
    icono: 'bi-compass',
    titulo: 'Enfoque central',
    texto: 'Dar herramientas para leer mejor el entorno, regular emociones y responder distinto.',
  },
  {
    icono: 'bi-heart-pulse',
    titulo: 'Resultado esperado',
    texto: 'Menos reactividad en el conflicto vial y más reconocimiento entre actores.',
  },
  {
    icono: 'bi-chat-heart',
    titulo: 'Idea fuerza',
    texto: 'Antes de reaccionar, revisa.',
  },
]

const galeriaEmpatiaB = ref(null)
let lightbox = null

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galeriaEmpatiaB.value,
    children: '.strategy-card__image-link',
    pswpModule: () => import('photoswipe'),
  })

  lightbox.init()
})

onBeforeUnmount(() => {
  lightbox?.destroy()
  lightbox = null
})
</script>

<template>
  <main class="empatia-b">
    <div class="empatia-b__halo" aria-hidden="true">
      <i class="bi bi-chat-heart"></i>
    </div>

    <header class="empatia-b__header">
      <div>
        <h1>EMPATÍA</h1>
        <p>¿Qué propone la estrategia y por qué así?</p>
        <span aria-hidden="true"></span>
      </div>

      <aside class="empatia-b__quote" aria-label="Idea central de la estrategia">
        <i class="bi bi-quote" aria-hidden="true"></i>
        <p>
          En empatía, el enfoque no es pedirle a la gente que “sienta más”, sino darle
          herramientas para actuar distinto en medio del conflicto:
          <strong>leer mejor el entorno, regular emociones, responder de otra manera.</strong>
        </p>
      </aside>
    </header>

    <section
      ref="galeriaEmpatiaB"
      class="empatia-b__grid"
      aria-label="Estrategias para empatía"
    >
      <article v-for="estrategia in estrategias" :key="estrategia.numero" class="strategy-card">
        <header class="strategy-card__header">
          <div class="strategy-card__number">{{ estrategia.numero }}</div>
          <div>
            <h2>{{ estrategia.titulo }}</h2>
            <p>{{ estrategia.subtitulo }}</p>
          </div>
        </header>

        <a
          class="strategy-card__image-link"
          :href="estrategia.imagen"
          :data-pswp-width="estrategia.width"
          :data-pswp-height="estrategia.height"
          target="_blank"
          rel="noreferrer"
          :aria-label="`Ver imagen ampliada: ${estrategia.alt}`"
        >
          <img class="strategy-card__image" :src="estrategia.imagen" :alt="estrategia.alt" />
        </a>

        <div class="strategy-card__body">
          <section
            v-for="(bloque, index) in estrategia.bloques"
            :key="bloque.pregunta"
            class="strategy-card__item"
          >
            <div class="strategy-card__icon" aria-hidden="true">
              <i class="bi" :class="estrategia.iconos[index]"></i>
            </div>
            <div>
              <h3>{{ bloque.pregunta }}</h3>
              <p>{{ bloque.texto }}</p>
            </div>
          </section>
        </div>
      </article>
    </section>

    <footer class="empatia-b__summary" aria-label="Síntesis de la estrategia">
      <section v-for="item in resumen" :key="item.titulo" class="summary-item">
        <i class="bi" :class="item.icono" aria-hidden="true"></i>
        <div>
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.texto }}</p>
        </div>
      </section>
    </footer>
  </main>
</template>

<style scoped>
.empatia-b {
  position: relative;
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 22px 28px 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 96% 4%, rgba(var(--color-4-rgb), 0.18), transparent 15%),
    linear-gradient(180deg, #ffffff 0%, var(--contenidos-fondo-suave) 100%);
  color: var(--contenidos-texto);
}

.empatia-b__halo {
  position: absolute;
  top: -42px;
  right: -28px;
  width: 178px;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--color-4-rgb), 0.13);
  color: var(--color-4);
  font-size: 76px;
  pointer-events: none;
}

.empatia-b__header {
  position: relative;
  z-index: 1;
  margin-bottom: 14px;
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(390px, 0.82fr);
  gap: 28px;
  align-items: start;
}

.empatia-b h1 {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(48px, 5.1vw, 74px);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: 0;
}

.empatia-b__header p {
  margin: 8px 0 0;
  color: var(--color-1);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(25px, 2.36vw, 34px);
  line-height: 1.04;
  font-weight: 850;
}

.empatia-b__header span {
  width: 72px;
  height: 6px;
  margin-top: 14px;
  display: block;
  border-radius: 999px;
  background: var(--color-4);
}

.empatia-b__quote {
  min-height: 112px;
  padding: 26px 34px 22px 78px;
  position: relative;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(7, 13, 53, 0.12);
}

.empatia-b__quote .bi {
  position: absolute;
  top: 16px;
  left: 28px;
  color: var(--color-4);
  font-size: 46px;
  line-height: 1;
}

.empatia-b__quote p {
  margin: 0;
  max-width: 690px;
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1.13vw, 17px);
  line-height: 1.34;
  font-weight: 700;
}

.empatia-b__quote strong {
  display: block;
  margin-top: 3px;
  color: var(--color-1);
  font-weight: 900;
}

.empatia-b__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.strategy-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border-bottom: 9px solid var(--color-4);
  background: #ffffff;
  box-shadow: 0 10px 22px rgba(7, 13, 53, 0.1);
  overflow: hidden;
}

.strategy-card__header {
  min-height: 78px;
  display: flex;
  align-items: stretch;
  gap: 18px;
}

.strategy-card__number {
  width: 78px;
  min-height: 76px;
  flex: 0 0 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 26px;
  background: #ececec;
  color: var(--color-1);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 36px;
  line-height: 1;
  font-weight: 900;
}

.strategy-card__header div:last-child {
  min-width: 0;
  padding: 15px 14px 8px 0;
}

.strategy-card h2 {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(18px, 1.35vw, 23px);
  line-height: 1.02;
  font-weight: 900;
  letter-spacing: 0;
}

.strategy-card__header p {
  margin: 5px 0 0;
  color: var(--color-1);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.98vw, 15px);
  line-height: 1.14;
  font-style: italic;
  font-weight: 600;
}

.strategy-card__image-link {
  width: calc(100% - 22px);
  height: 170px;
  margin: 0 11px 12px;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  cursor: zoom-in;
}

.strategy-card__image-link:focus-visible {
  outline: 3px solid var(--color-4);
  outline-offset: 3px;
}

.strategy-card__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.strategy-card__image-link:hover .strategy-card__image,
.strategy-card__image-link:focus-visible .strategy-card__image {
  transform: scale(1.04);
}

.strategy-card__body {
  padding: 0 18px 10px 10px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}

.strategy-card__item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 12px;
  padding: 9px 0;
  border-top: 1px dotted rgba(var(--color-4-rgb), 0.72);
}

.strategy-card__item:first-child {
  border-top: 0;
  padding-top: 0;
}

.strategy-card__icon {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--color-4-rgb), 0.15);
  color: var(--color-4);
  font-size: 25px;
  line-height: 1;
}

.strategy-card h3 {
  margin: 0 0 3px;
  color: var(--color-1);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(14px, 1.13vw, 17px);
  line-height: 1.08;
  font-style: italic;
  font-weight: 850;
}

.strategy-card__item p {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.9vw, 14px);
  line-height: 1.19;
  font-weight: 600;
}

.empatia-b__summary {
  position: relative;
  z-index: 1;
  margin-top: 14px;
  padding: 10px 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(7, 13, 53, 0.09);
}

.summary-item {
  min-width: 0;
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
}

.summary-item + .summary-item {
  border-left: 2px solid var(--color-4);
  padding-left: 24px;
}

.summary-item > .bi {
  color: var(--color-4);
  font-size: 58px;
  line-height: 1;
}

.summary-item h2 {
  margin: 0 0 3px;
  color: var(--color-1);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(16px, 1.24vw, 20px);
  line-height: 1.05;
  font-weight: 900;
}

.summary-item p {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.95vw, 15px);
  line-height: 1.2;
  font-weight: 700;
}

@media (max-width: 1180px) {
  .empatia-b {
    overflow: auto;
  }

  .empatia-b__header {
    grid-template-columns: 1fr;
  }

  .empatia-b__quote {
    max-width: 760px;
  }

  .empatia-b__grid,
  .empatia-b__summary {
    grid-template-columns: 1fr;
  }

  .strategy-card__image-link {
    height: 250px;
  }

  .summary-item + .summary-item {
    border-left: 0;
    border-top: 2px solid var(--color-4);
    padding-left: 0;
    padding-top: 14px;
  }
}

@media (max-width: 575.98px) {
  .empatia-b {
    padding: 22px 16px;
  }

  .empatia-b__halo {
    display: none;
  }

  .empatia-b h1 {
    font-size: 42px;
  }

  .empatia-b__header p {
    font-size: 25px;
  }

  .empatia-b__quote {
    padding: 22px 20px;
  }

  .empatia-b__quote .bi {
    position: static;
    display: block;
    margin-bottom: 6px;
  }

  .strategy-card__header {
    gap: 12px;
  }

  .strategy-card__number {
    width: 66px;
    flex-basis: 66px;
    font-size: 32px;
  }

  .strategy-card__image-link {
    height: 190px;
  }

  .strategy-card__item,
  .summary-item {
    grid-template-columns: 1fr;
  }

  .strategy-card__icon {
    width: 46px;
    height: 46px;
    font-size: 24px;
  }

  .empatia-b__summary {
    padding: 18px;
  }
}
</style>
