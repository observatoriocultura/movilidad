<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imageBase = `${import.meta.env.BASE_URL}2026/tablero_1/images/`

const estrategias = [
  {
    numero: '01',
    titulo: 'Entre motociclistas nos cuidamos',
    subtitulo: 'Teatro invisible en intersecciones',
    imagen: `${imageBase}moticiclistas-b-1.jpg`,
    alt: 'Actor caracterizado interactuando con motociclistas detenidos en una interseccion',
    width: 1167,
    height: 729,
    iconos: ['bi-heart', 'bi-people', 'bi-sign-stop'],
    bloques: [
      {
        pregunta: '¿Por qué este diseño?',
        texto:
          'Discutir no sirve. Lo que mueve a las personas es ver que sus iguales sí cumplen. Por eso, hay que hacerlo visible, no argumentarlo.',
      },
      {
        pregunta: '¿Qué se hace?',
        texto:
          'Actores caracterizados como motociclistas reales se ubican en intersecciones de alto flujo y modelan, de forma natural y creíble, la detención completa en rojo. Además, establecen diálogos promoviendo la detención oportuna.',
      },
      {
        pregunta: '¿Quiénes participan?',
        texto: 'Ciudadanos motociclistas y equipo implementador.',
      },
    ],
  },
  {
    numero: '02',
    titulo: 'Experimentos sociales',
    subtitulo: 'Intervenciones visibles en intersecciones',
    imagen: `${imageBase}motociclistas-b-2.jpg`,
    alt: 'Intervencion pedagogica visible en una interseccion con actores de movilidad',
    width: 1269,
    height: 727,
    iconos: ['bi-lightning-charge', 'bi-megaphone', 'bi-people'],
    bloques: [
      {
        pregunta: '¿Por qué este diseño?',
        texto:
          'Un reflejo no se cambia con información. Hay que interrumpirlo justo donde ocurre, en ese segundo exacto frente al semáforo.',
      },
      {
        pregunta: '¿Qué se hace?',
        texto:
          'Un estímulo inesperado rompe el piloto automático con sonido o señal móvil. Luego una micro escena con actores motociclistas modela la calma. Cierra con el mensaje: La pausa no te quita tiempo, te regala vida.',
      },
      {
        pregunta: '¿Quiénes participan?',
        texto: 'Ciudadanos motociclistas y equipo implementador.',
      },
    ],
  },
  {
    numero: '03',
    titulo: 'Circuito pedagógico',
    subtitulo: 'Dispositivo portátil',
    imagen: `${imageBase}motociclistas-b-3.jpg`,
    alt: 'Circuito pedagogico portatil con estudiantes y facilitadores',
    width: 1093,
    height: 728,
    iconos: ['bi-braces-asterisk', 'bi-map', 'bi-bank'],
    bloques: [
      {
        pregunta: '¿Por qué este diseño?',
        texto:
          'Porque aquí el problema no es uno solo. El circuito está diseñado para que cada estación trabaje una causa distinta y juntas produzcan un cambio.',
      },
      {
        pregunta: '¿Qué se hace?',
        texto:
          'Un recorrido de estaciones: simulación sensorial, realidad virtual con un accidente, mapeo de ruta propia y compromiso explícito de cambio.',
      },
      {
        pregunta: '¿Quiénes participan?',
        texto:
          'Universidades con alto porcentaje de estudiantes motociclistas, empresas de domicilios y colegios; facilitadores pedagógicos y aliados institucionales.',
      },
    ],
  },
]

const resumen = [
  {
    icono: 'bi-bullseye',
    titulo: 'Enfoque central',
    texto: 'Visibilizar comportamientos positivos y activar la norma social entre pares.',
  },
  {
    icono: 'bi-people',
    titulo: 'Resultado esperado',
    texto: 'Más detenciones completas en rojo, menos accidentes, más vidas cuidadas.',
  },
  {
    icono: 'bi-shield-check',
    titulo: 'Idea fuerza',
    texto: 'Entre motociclistas nos cuidamos.',
  },
]

const galeriaMotociclistasB = ref(null)
let lightbox = null

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galeriaMotociclistasB.value,
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
  <main class="motociclistas-b">
    <div class="motociclistas-b__halo" aria-hidden="true">
      <i class="bi bi-headset"></i>
    </div>

    <header class="motociclistas-b__header">
      <div>
        <h1>MOTOCICLISTAS</h1>
        <p>¿Qué propone la estrategia y por qué así?</p>
        <span aria-hidden="true"></span>
      </div>

      <aside class="motociclistas-b__quote" aria-label="Idea central de la estrategia">
        <i class="bi bi-quote" aria-hidden="true"></i>
        <p>
          No se trata de decirles a los motociclistas qué hacer, sino mostrarles que otros como
          ellos sí lo hacen.
          <strong>Porque lo que realmente mueve el comportamiento no es el argumento, es la norma social.</strong>
        </p>
      </aside>
    </header>

    <section
      ref="galeriaMotociclistasB"
      class="motociclistas-b__grid"
      aria-label="Estrategias para motociclistas"
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

    <footer class="motociclistas-b__summary" aria-label="Sintesis de la estrategia">
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
.motociclistas-b {
  position: relative;
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 22px 28px 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 96% 4%, rgba(190, 208, 0, 0.18), transparent 15%),
    linear-gradient(180deg, #ffffff 0%, #f7f7f3 100%);
  color: #070d35;
}

.motociclistas-b__halo {
  position: absolute;
  top: -42px;
  right: -28px;
  width: 178px;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(190, 208, 0, 0.15);
  color: #a7ba00;
  font-size: 76px;
  pointer-events: none;
}

.motociclistas-b__header {
  position: relative;
  z-index: 1;
  margin-bottom: 14px;
  display: grid;
  grid-template-columns: minmax(0, 0.93fr) minmax(360px, 0.72fr);
  gap: 28px;
  align-items: start;
}

.motociclistas-b h1 {
  margin: 0;
  color: #a7ba00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(48px, 5.35vw, 76px);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: 0;
}

.motociclistas-b__header p {
  margin: 6px 0 0;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(25px, 2.55vw, 36px);
  line-height: 1.04;
  font-weight: 850;
}

.motociclistas-b__header span {
  width: 72px;
  height: 6px;
  margin-top: 14px;
  display: block;
  border-radius: 999px;
  background: #bed000;
}

.motociclistas-b__quote {
  min-height: 112px;
  padding: 26px 34px 22px 78px;
  position: relative;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(7, 13, 53, 0.14);
}

.motociclistas-b__quote .bi {
  position: absolute;
  top: 16px;
  left: 28px;
  color: #a7ba00;
  font-size: 46px;
  line-height: 1;
}

.motociclistas-b__quote p {
  margin: 0;
  max-width: 510px;
  color: #070d35;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1.13vw, 17px);
  line-height: 1.34;
  font-weight: 700;
}

.motociclistas-b__quote strong {
  display: block;
  margin-top: 3px;
  color: #a7ba00;
  font-weight: 900;
}

.motociclistas-b__grid {
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
  border-bottom: 9px solid #bed000;
  background: #ffffff;
  box-shadow: 0 10px 22px rgba(7, 13, 53, 0.12);
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
  background: #bed000;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 42px;
  line-height: 1;
  font-weight: 900;
}

.strategy-card__header div:last-child {
  min-width: 0;
  padding: 15px 14px 8px 0;
}

.strategy-card h2 {
  margin: 0;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(19px, 1.55vw, 26px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0;
}

.strategy-card__header p {
  margin: 4px 0 0;
  color: #91a400;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 1vw, 15px);
  line-height: 1.14;
  font-weight: 700;
}

.strategy-card__image-link {
  width: calc(100% - 22px);
  height: 168px;
  margin: 0 11px 12px;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  cursor: zoom-in;
}

.strategy-card__image-link:focus-visible {
  outline: 3px solid #5a6400;
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
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 12px;
  padding: 10px 0;
  border-top: 1px dotted rgba(167, 186, 0, 0.85);
}

.strategy-card__item:first-child {
  border-top: 0;
  padding-top: 0;
}

.strategy-card__icon {
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #bed000;
  color: #ffffff;
  font-size: 29px;
  line-height: 1;
}

.strategy-card h3 {
  margin: 0 0 3px;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(14px, 1.13vw, 17px);
  line-height: 1.08;
  font-weight: 900;
}

.strategy-card__item p {
  margin: 0;
  color: #070d35;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.94vw, 15px);
  line-height: 1.22;
  font-weight: 600;
}

.motociclistas-b__summary {
  position: relative;
  z-index: 1;
  margin-top: 14px;
  padding: 10px 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(7, 13, 53, 0.1);
}

.summary-item {
  min-width: 0;
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
}

.summary-item + .summary-item {
  border-left: 2px solid #bed000;
  padding-left: 24px;
}

.summary-item > .bi {
  color: #a7ba00;
  font-size: 64px;
  line-height: 1;
}

.summary-item h2 {
  margin: 0 0 3px;
  color: #a7ba00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(16px, 1.24vw, 20px);
  line-height: 1.05;
  font-weight: 900;
}

.summary-item p {
  margin: 0;
  color: #070d35;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.95vw, 15px);
  line-height: 1.2;
  font-weight: 700;
}

@media (max-width: 1180px) {
  .motociclistas-b {
    overflow: auto;
  }

  .motociclistas-b__header {
    grid-template-columns: 1fr;
  }

  .motociclistas-b__quote {
    max-width: 720px;
  }

  .motociclistas-b__grid,
  .motociclistas-b__summary {
    grid-template-columns: 1fr;
  }

  .strategy-card__image-link {
    height: 240px;
  }

  .summary-item + .summary-item {
    border-left: 0;
    border-top: 2px solid #bed000;
    padding-left: 0;
    padding-top: 14px;
  }
}

@media (max-width: 575.98px) {
  .motociclistas-b {
    padding: 22px 16px;
  }

  .motociclistas-b__halo {
    display: none;
  }

  .motociclistas-b h1 {
    font-size: 42px;
  }

  .motociclistas-b__header p {
    font-size: 25px;
  }

  .motociclistas-b__quote {
    padding: 22px 20px;
  }

  .motociclistas-b__quote .bi {
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
    font-size: 34px;
  }

  .strategy-card__image-link {
    height: 190px;
  }

  .strategy-card__item,
  .summary-item {
    grid-template-columns: 1fr;
  }

  .strategy-card__icon {
    width: 48px;
    height: 48px;
    font-size: 25px;
  }

  .motociclistas-b__summary {
    padding: 18px;
  }
}
</style>
