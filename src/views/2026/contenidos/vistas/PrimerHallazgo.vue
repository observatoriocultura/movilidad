<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imagenesPrimerHallazgo = [
  {
    src: '/2026/tablero_1/images/primer-hallazgo-1.jpg',
    alt: 'Registro visual asociado al primer hallazgo de movilidad',
    width: 1920,
    height: 1032,
  },
  {
    src: '/2026/tablero_1/images/primer-hallazgo-2.jpg',
    alt: 'Escena urbana asociada al comportamiento vial del primer hallazgo',
    width: 1920,
    height: 1032,
  },
]

const galeriaPrimerHallazgo = ref(null)
let lightbox = null

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galeriaPrimerHallazgo.value,
    children: 'a',
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
  <main class="primer-hallazgo">
    <header class="primer-hallazgo__header">
      <p class="primer-hallazgo__eyebrow">Primer hallazgo</p>

      <h1>Sabemos más de lo que creemos, pero eso no cambia lo que hacemos</h1>

      <p class="primer-hallazgo__subtitle">
        El caso de los motociclistas muestra una brecha clave: la norma se conoce, pero la
        decisión real ocurre en el instante de actuar.
      </p>
    </header>

    <section class="primer-hallazgo__column" aria-label="Conocimiento de la norma">
      <p class="primer-hallazgo__lead">
        Las cifras son contundentes: <strong>casi la mitad de las muertes en vía</strong> están
        asociadas a motos.
      </p>

      <p>
        Pero lo más interesante no es solo la magnitud del problema. Prácticamente todos los
        motociclistas saben que el <strong>semáforo en rojo significa detenerse</strong>. Lo
        reconocen, lo entienden y, en teoría, están de acuerdo.
      </p>

      <p class="primer-hallazgo__question">Entonces, ¿por qué no se detienen?</p>
    </section>

    <section class="primer-hallazgo__column" aria-label="Brecha entre saber y hacer">
      <p>
        La respuesta no está solo en la norma, sino en el momento. Cuando el semáforo cambia a
        amarillo se activa otra lógica: el <strong>afán</strong>, la
        <strong>confianza excesiva</strong>, la percepción de que
        <strong>todos lo hacen</strong> y un entorno que no siempre sanciona.
      </p>

      <p>
        En ese instante, la decisión no pasa por lo que se sabe, sino por lo que se
        <strong>siente</strong>, se <strong>percibe</strong> y se
        <strong>normaliza</strong> en la vía.
      </p>

      <p class="primer-hallazgo__closing">
        La brecha no está entre <strong>no saber</strong> y <strong>saber</strong>, sino entre
        <strong>saber</strong> y <strong>hacer</strong>.
      </p>
    </section>

    <div
      ref="galeriaPrimerHallazgo"
      class="primer-hallazgo__media"
      aria-label="Imágenes del primer hallazgo"
    >
      <a
        v-for="imagen in imagenesPrimerHallazgo"
        :key="imagen.src"
        class="primer-hallazgo__figure"
        :href="imagen.src"
        :data-pswp-width="imagen.width"
        :data-pswp-height="imagen.height"
        target="_blank"
        rel="noreferrer"
        :aria-label="`Ver imagen ampliada: ${imagen.alt}`"
      >
        <img :src="imagen.src" :alt="imagen.alt" />
      </a>
    </div>
  </main>
</template>

<style scoped>
.primer-hallazgo {
  height: calc(100svh - 115px);
  width: 100%;
  padding: 24px 38px;
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) auto;
  column-gap: 28px;
  row-gap: 18px;
  align-items: center;
  overflow: hidden;
  border-left: 10px solid #bed000;
  background:
    linear-gradient(135deg, rgba(190, 208, 0, 0.24), rgba(190, 208, 0, 0) 42%),
    #fbfae7;
  color: #1b1c11;
}

.primer-hallazgo__header,
.primer-hallazgo__column {
  min-width: 0;
  align-self: center;
}

.primer-hallazgo__header {
  grid-row: 1 / 3;
}

.primer-hallazgo__eyebrow {
  margin: 0 0 14px;
  color: #5a6400;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.primer-hallazgo h1 {
  margin: 0;
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(32px, 3.25vw, 48px);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: 0;
}

.primer-hallazgo__subtitle {
  margin: 18px 0 0;
  color: #464834;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(15px, 1.08vw, 17px);
  line-height: 1.36;
}

.primer-hallazgo__column p {
  margin: 0;
  color: #303125;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.32;
  letter-spacing: 0;
}

.primer-hallazgo__column p + p {
  margin-top: 11px;
}

.primer-hallazgo__lead,
.primer-hallazgo__question,
.primer-hallazgo__closing {
  font-family: var(--heading, system-ui, sans-serif) !important;
  font-weight: 800;
}

.primer-hallazgo__lead {
  font-size: clamp(18px, 1.42vw, 22px) !important;
  line-height: 1.16 !important;
  color: #1b1c11 !important;
}

.primer-hallazgo strong {
  color: #4e5600;
  font-weight: 800;
}

.primer-hallazgo__question {
  padding: 11px 13px;
  border-left: 6px solid #bed000;
  background: rgba(240, 239, 220, 0.92);
  color: #1b1c11 !important;
  font-size: clamp(17px, 1.25vw, 20px) !important;
  line-height: 1.18 !important;
}

.primer-hallazgo__closing {
  padding: 11px 13px;
  border-radius: 8px;
  background: #f0efdc;
  color: #1b1c11 !important;
}

.primer-hallazgo__media {
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  align-self: end;
}

.primer-hallazgo__figure {
  width: 100%;
  min-width: 0;
  aspect-ratio: 16 / 6;
  overflow: hidden;
  border-radius: 8px;
  background: #e5e6d2;
  cursor: pointer;
  display: block;
}

.primer-hallazgo__figure img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.primer-hallazgo__figure:hover img,
.primer-hallazgo__figure:focus-visible img {
  transform: scale(1.04);
}

.primer-hallazgo__figure:focus-visible {
  outline: 3px solid #5a6400;
  outline-offset: 3px;
}

@media (max-width: 860px) {
  .primer-hallazgo {
    height: auto;
    min-height: 100svh;
    padding: 24px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 28px;
    align-items: flex-start;
    border-left-width: 6px;
  }

  .primer-hallazgo__header,
  .primer-hallazgo__column {
    align-self: auto;
  }

  .primer-hallazgo__header,
  .primer-hallazgo__media {
    grid-column: auto;
    grid-row: auto;
  }

  .primer-hallazgo__media {
    max-width: 520px;
  }
}

@media (max-width: 575.98px) {
  .primer-hallazgo__media {
    grid-template-columns: 1fr;
  }

  .primer-hallazgo__figure {
    aspect-ratio: 16 / 8;
  }
}
</style>
