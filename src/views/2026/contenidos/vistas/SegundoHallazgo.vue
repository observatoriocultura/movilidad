<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imageBase = `${import.meta.env.BASE_URL}2026/tablero_1/images/`

const imagenesSegundoHallazgo = [
  {
    src: `${imageBase}segundo-hallazgo-1.jpg`,
    alt: 'Registro visual asociado al segundo hallazgo de movilidad',
    width: 989,
    height: 660,
  },
  {
    src: `${imageBase}segundo-hallazgo-2.jpg`,
    alt: 'Escena urbana asociada a la convivencia entre actores viales',
    width: 1292,
    height: 573,
  },
]

const galeriaSegundoHallazgo = ref(null)
let lightbox = null

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galeriaSegundoHallazgo.value,
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
  <main class="segundo-hallazgo">
    <header class="segundo-hallazgo__header">
      <p class="segundo-hallazgo__eyebrow">Segundo hallazgo</p>

      <h1>La empatía existe, pero no siempre aparece cuando se necesita</h1>

      <p class="segundo-hallazgo__subtitle">
        El problema no es simplemente que falte empatía. Es que, en la vía, esa empatía se puede
        desconectar justo cuando debería orientar la reacción frente al otro.
      </p>
    </header>

    <section class="segundo-hallazgo__column" aria-label="Empatía entre actores viales">
      <p class="segundo-hallazgo__lead">
        Los datos muestran que las personas <strong>sí sienten empatía</strong> y
        <strong>sí reconocen al otro</strong>.
      </p>

      <p>
        Sin embargo, cuando están al volante entran en juego otras fuerzas: la
        <strong>presión del entorno</strong>, la necesidad de demostrar control, normas sociales
        que premian la agresividad y una alta confianza en las propias habilidades.
      </p>

      <p class="segundo-hallazgo__question">¿Por qué se desconecta esa empatía?</p>
    </section>

    <section class="segundo-hallazgo__column" aria-label="Distancia social en la vía">
      <p>
        No todos los actores viales se perciben igual. Al <strong>peatón</strong> se le siente más
        cercano; al <strong>motociclista</strong> o al conductor de
        <strong>transporte público</strong>, más lejano.
      </p>

      <p>
        Esa distancia no es neutra: se llena de <strong>juicios negativos</strong> que bloquean la
        comprensión del otro y reducen la posibilidad de actuar con cuidado.
      </p>

      <p class="segundo-hallazgo__closing">
        El resultado es una vía donde muchas veces no reaccionamos desde la
        <strong>empatía</strong>, sino desde la <strong>defensa</strong> o el
        <strong>rechazo</strong>.
      </p>
    </section>

    <div
      ref="galeriaSegundoHallazgo"
      class="segundo-hallazgo__media"
      aria-label="Imágenes del segundo hallazgo"
    >
      <a
        v-for="imagen in imagenesSegundoHallazgo"
        :key="imagen.src"
        class="segundo-hallazgo__figure"
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
.segundo-hallazgo {
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

.segundo-hallazgo__header,
.segundo-hallazgo__column {
  min-width: 0;
  align-self: center;
}

.segundo-hallazgo__header {
  grid-row: 1 / 3;
}

.segundo-hallazgo__eyebrow {
  margin: 0 0 14px;
  color: #5a6400;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.segundo-hallazgo h1 {
  margin: 0;
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(32px, 3.25vw, 48px);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: 0;
}

.segundo-hallazgo__subtitle {
  margin: 18px 0 0;
  color: #464834;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(15px, 1.08vw, 17px);
  line-height: 1.36;
}

.segundo-hallazgo__column p {
  margin: 0;
  color: #303125;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.32;
  letter-spacing: 0;
}

.segundo-hallazgo__column p + p {
  margin-top: 11px;
}

.segundo-hallazgo__lead,
.segundo-hallazgo__question,
.segundo-hallazgo__closing {
  font-family: var(--heading, system-ui, sans-serif) !important;
  font-weight: 800;
}

.segundo-hallazgo__lead {
  font-size: clamp(18px, 1.42vw, 22px) !important;
  line-height: 1.16 !important;
  color: #1b1c11 !important;
}

.segundo-hallazgo strong {
  color: #4e5600;
  font-weight: 800;
}

.segundo-hallazgo__question {
  padding: 11px 13px;
  border-left: 6px solid #bed000;
  background: rgba(240, 239, 220, 0.92);
  color: #1b1c11 !important;
  font-size: clamp(17px, 1.25vw, 20px) !important;
  line-height: 1.18 !important;
}

.segundo-hallazgo__closing {
  padding: 11px 13px;
  border-radius: 8px;
  background: #f0efdc;
  color: #1b1c11 !important;
}

.segundo-hallazgo__media {
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  align-self: end;
}

.segundo-hallazgo__figure {
  width: 100%;
  min-width: 0;
  aspect-ratio: 16 / 6;
  overflow: hidden;
  border-radius: 8px;
  background: #e5e6d2;
  cursor: pointer;
  display: block;
}

.segundo-hallazgo__figure img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.segundo-hallazgo__figure:hover img,
.segundo-hallazgo__figure:focus-visible img {
  transform: scale(1.04);
}

.segundo-hallazgo__figure:focus-visible {
  outline: 3px solid #5a6400;
  outline-offset: 3px;
}

@media (max-width: 860px) {
  .segundo-hallazgo {
    height: auto;
    min-height: 100svh;
    padding: 24px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 28px;
    align-items: flex-start;
    border-left-width: 6px;
  }

  .segundo-hallazgo__header,
  .segundo-hallazgo__column {
    align-self: auto;
  }

  .segundo-hallazgo__header,
  .segundo-hallazgo__media {
    grid-column: auto;
    grid-row: auto;
  }

  .segundo-hallazgo__media {
    max-width: 520px;
  }
}

@media (max-width: 575.98px) {
  .segundo-hallazgo__media {
    grid-template-columns: 1fr;
  }

  .segundo-hallazgo__figure {
    aspect-ratio: 16 / 8;
  }
}
</style>
