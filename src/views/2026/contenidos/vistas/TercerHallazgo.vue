<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imageBase = `${import.meta.env.BASE_URL}2026/tablero_1/images/`

const imagenesTercerHallazgo = [
  {
    src: `${imageBase}prototipo-motociclista-juan-carro.jpeg`,
    alt: 'Prototipo de motociclista Juan en carro asociado al tercer hallazgo',
    width: 1600,
    height: 900,
  },
]

const galeriaTercerHallazgo = ref(null)
let lightbox = null

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galeriaTercerHallazgo.value,
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
  <main class="tercer-hallazgo">
    <header class="tercer-hallazgo__header">
      <p class="tercer-hallazgo__eyebrow">Tercer hallazgo</p>

      <h1>Muchas conductas “incorrectas” en realidad son soluciones</h1>

      <p class="tercer-hallazgo__subtitle">
        Algunas decisiones viales parecen simples incumplimientos. Al observarlas de cerca, también
        revelan estrategias para resolver rápido en un entorno que no siempre ofrece alternativas
        visibles, fáciles o confiables.
      </p>
    </header>

    <section class="tercer-hallazgo__column" aria-label="Mal parqueo como estrategia">
      <p class="tercer-hallazgo__lead">
        El <strong>mal parqueo</strong> es un buen ejemplo: no siempre se vive como un error, sino
        como una forma de salir del paso.
      </p>

      <p>
        A simple vista parece un problema de incumplimiento. Pero para muchos conductores es una
        <strong>estrategia para ahorrar tiempo</strong>, resolver rápido y responder a una ciudad
        donde las opciones legales existen, pero no siempre se perciben como suficientes.
      </p>

      <p class="tercer-hallazgo__question">¿Qué necesidad está resolviendo esa conducta?</p>
    </section>

    <section class="tercer-hallazgo__column" aria-label="Decisiones al final de la noche">
      <p>
        Algo similar ocurre con la <strong>embriaguez al volante</strong>. La mayoría sabe que no
        debe manejar después de tomar, pero muchas personas terminan haciéndolo porque no planearon
        cómo regresar.
      </p>

      <p>
        La decisión aparece al final de la noche, justo cuando la capacidad de elegir bien está más
        afectada. El problema no nace solo en la norma, sino en la
        <strong>falta de preparación previa</strong>.
      </p>

      <p class="tercer-hallazgo__closing">
        Para cambiar la conducta, hay que entender la <strong>solución práctica</strong> que la
        persona cree estar encontrando.
      </p>
    </section>

    <div
      ref="galeriaTercerHallazgo"
      class="tercer-hallazgo__media"
      aria-label="Imagen del tercer hallazgo"
    >
      <a
        v-for="imagen in imagenesTercerHallazgo"
        :key="imagen.src"
        class="tercer-hallazgo__figure"
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
.tercer-hallazgo {
  height: calc(100svh - 115px);
  width: 100%;
  padding: 30px 46px;
  display: grid;
  grid-template-columns: minmax(250px, 0.74fr) minmax(0, 0.96fr) minmax(340px, 0.8fr);
  grid-template-rows: auto minmax(0, 1fr);
  column-gap: 28px;
  row-gap: 18px;
  align-items: center;
  overflow: hidden;
  border-left: 8px solid #bed000;
  background:
    linear-gradient(135deg, rgba(190, 208, 0, 0.24), rgba(190, 208, 0, 0) 42%),
    #fbfae7;
  color: #1b1c11;
}

.tercer-hallazgo__header,
.tercer-hallazgo__column {
  min-width: 0;
  align-self: center;
}

.tercer-hallazgo__header {
  grid-column: 1 / 3;
  grid-row: 1;
}

.tercer-hallazgo__column {
  grid-row: 2;
}

.tercer-hallazgo__eyebrow {
  margin: 0 0 14px;
  color: #5a6400;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tercer-hallazgo h1 {
  margin: 0;
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: 0;
}

.tercer-hallazgo__subtitle {
  margin: 16px 0 0;
  color: #464834;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.38;
}

.tercer-hallazgo__column p {
  margin: 0;
  color: #303125;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(13px, 0.96vw, 15px);
  line-height: 1.35;
  letter-spacing: 0;
}

.tercer-hallazgo__column p + p {
  margin-top: 10px;
}

.tercer-hallazgo__lead,
.tercer-hallazgo__question,
.tercer-hallazgo__closing {
  font-family: var(--heading, system-ui, sans-serif) !important;
  font-weight: 800;
}

.tercer-hallazgo__lead {
  font-size: clamp(17px, 1.32vw, 20px) !important;
  line-height: 1.2 !important;
  color: #1b1c11 !important;
}

.tercer-hallazgo strong {
  color: #4e5600;
  font-weight: 800;
}

.tercer-hallazgo__question {
  padding: 10px 12px;
  border-left: 6px solid #bed000;
  background: rgba(240, 239, 220, 0.92);
  color: #1b1c11 !important;
  font-size: clamp(16px, 1.16vw, 18px) !important;
  line-height: 1.2 !important;
}

.tercer-hallazgo__closing {
  padding: 10px 12px;
  border-radius: 8px;
  background: #f0efdc;
  color: #1b1c11 !important;
}

.tercer-hallazgo__media {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
  align-self: center;
}

.tercer-hallazgo__figure {
  width: 100%;
  max-width: 560px;
  min-width: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  background: #e5e6d2;
  cursor: pointer;
  display: block;
}

.tercer-hallazgo__figure img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.tercer-hallazgo__figure:hover img,
.tercer-hallazgo__figure:focus-visible img {
  transform: scale(1.04);
}

.tercer-hallazgo__figure:focus-visible {
  outline: 3px solid #5a6400;
  outline-offset: 3px;
}

@media (max-width: 860px) {
  .tercer-hallazgo {
    height: auto;
    min-height: 100svh;
    padding: 28px 24px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 28px;
    align-items: flex-start;
    border-left-width: 6px;
  }

  .tercer-hallazgo__header,
  .tercer-hallazgo__column {
    align-self: auto;
  }

  .tercer-hallazgo__header,
  .tercer-hallazgo__media {
    grid-column: auto;
    grid-row: auto;
  }

  .tercer-hallazgo__media {
    max-width: 520px;
  }

  .tercer-hallazgo__figure {
    aspect-ratio: 16 / 9;
  }
}
</style>
