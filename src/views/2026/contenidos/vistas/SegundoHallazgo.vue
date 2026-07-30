<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const imageBase = `${import.meta.env.BASE_URL}2026/tablero_1/images/`
const videoModalAbierto = ref(false)
const videoThumbnail = `${imageBase}empatia-podcast-thumbnail.jpg`
const videoDriveId = '1PYhSRmdBLVS4E2ASr6IldZ33mxDAisv7'
const videoUrl = computed(() =>
  videoModalAbierto.value ? `https://drive.google.com/file/d/${videoDriveId}/preview` : '',
)

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

const abrirVideo = () => {
  videoModalAbierto.value = true
}

const cerrarVideo = () => {
  videoModalAbierto.value = false
}

const manejarTeclaModal = (event) => {
  if (event.key === 'Escape') {
    cerrarVideo()
  }
}

watch(videoModalAbierto, (abierto) => {
  document.body.style.overflow = abierto ? 'hidden' : ''

  if (abierto) {
    window.addEventListener('keydown', manejarTeclaModal)
  } else {
    window.removeEventListener('keydown', manejarTeclaModal)
  }
})

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: galeriaSegundoHallazgo.value,
    children: 'a',
    pswpModule: () => import('photoswipe'),
  })

  lightbox.init()
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', manejarTeclaModal)
  cerrarVideo()
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

    <section class="segundo-hallazgo__video" aria-labelledby="segundo-hallazgo-video-title">
      <p id="segundo-hallazgo-video-title">Aquí encontrarás nuestras memorias del proyecto</p>
      <button
        class="video-card"
        type="button"
        aria-label="Ver memorias del proyecto"
        @click="abrirVideo"
      >
        <img :src="videoThumbnail" alt="" loading="lazy" decoding="async" />
        <span class="video-card__overlay" aria-hidden="true">
          <i class="bi bi-play-fill"></i>
        </span>
      </button>
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

    <Teleport to="body">
      <div
        v-if="videoModalAbierto"
        class="video-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Memorias del proyecto"
        tabindex="-1"
        @click.self="cerrarVideo"
      >
        <button class="video-modal__close" type="button" aria-label="Cerrar video" @click="cerrarVideo">
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        <iframe
          class="video-modal__frame"
          :src="videoUrl"
          title="Memorias del proyecto"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.segundo-hallazgo {
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 26px 46px;
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto auto auto;
  column-gap: 28px;
  row-gap: 14px;
  align-items: start;
  overflow: auto;
  border-left: 8px solid #bed000;
  background:
    linear-gradient(135deg, rgba(190, 208, 0, 0.24), rgba(190, 208, 0, 0) 42%),
    #fbfae7;
  color: #1b1c11;
}

.segundo-hallazgo__header,
.segundo-hallazgo__column {
  min-width: 0;
  align-self: start;
}

.segundo-hallazgo__header {
  grid-row: 1 / 4;
}

.segundo-hallazgo__eyebrow {
  margin: 0 0 10px;
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
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: 0;
}

.segundo-hallazgo__subtitle {
  margin: 12px 0 0;
  color: #464834;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.38;
}

.segundo-hallazgo__column p {
  margin: 0;
  color: #303125;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(13px, 0.96vw, 15px);
  line-height: 1.35;
  letter-spacing: 0;
}

.segundo-hallazgo__column p + p {
  margin-top: 8px;
}

.segundo-hallazgo__lead,
.segundo-hallazgo__question,
.segundo-hallazgo__closing {
  font-family: var(--heading, system-ui, sans-serif) !important;
  font-weight: 800;
}

.segundo-hallazgo__lead {
  font-size: clamp(17px, 1.32vw, 20px) !important;
  line-height: 1.2 !important;
  color: #1b1c11 !important;
}

.segundo-hallazgo strong {
  color: #4e5600;
  font-weight: 800;
}

.segundo-hallazgo__question {
  padding: 8px 12px;
  border-left: 6px solid #bed000;
  background: rgba(240, 239, 220, 0.92);
  color: #1b1c11 !important;
  font-size: clamp(16px, 1.16vw, 18px) !important;
  line-height: 1.2 !important;
}

.segundo-hallazgo__closing {
  padding: 8px 12px;
  border-radius: 8px;
  background: #f0efdc;
  color: #1b1c11 !important;
}

.segundo-hallazgo__video {
  grid-column: 2 / 4;
  align-self: start;
  margin-top: 4px;
  display: grid;
  grid-template-columns: minmax(240px, 0.42fr) minmax(0, 1fr);
  gap: 14px;
  align-items: center;
}

.segundo-hallazgo__video p {
  margin: 0;
  color: #4e5600;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(15px, 1.18vw, 20px);
  line-height: 1.12;
  font-weight: 900;
}

.video-card {
  width: 100%;
  min-height: 142px;
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  padding: 0;
  display: block;
  background: #1b1c11;
  box-shadow: 0 12px 26px rgba(27, 28, 17, 0.16);
  cursor: pointer;
}

.video-card img {
  width: 100%;
  height: 100%;
  min-height: 142px;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.video-card__overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(27, 28, 17, 0.24);
  color: #ffffff;
  transition: background 180ms ease;
}

.video-card__overlay i {
  width: 62px;
  height: 62px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #bed000;
  color: #1b1c11;
  font-size: 48px;
  line-height: 1;
  box-shadow: 0 12px 24px rgba(27, 28, 17, 0.2);
}

.video-card:hover img,
.video-card:focus-visible img {
  transform: scale(1.025);
}

.video-card:hover .video-card__overlay,
.video-card:focus-visible .video-card__overlay {
  background: rgba(27, 28, 17, 0.36);
}

.video-card:focus-visible,
.video-modal__close:focus-visible {
  outline: 3px solid #5a6400;
  outline-offset: 3px;
}

.segundo-hallazgo__media {
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  align-self: start;
}

.segundo-hallazgo__figure {
  width: 100%;
  min-width: 0;
  aspect-ratio: 16 / 5.2;
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

.video-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 70px 28px 28px;
  display: grid;
  place-items: center;
  background: rgba(27, 28, 17, 0.92);
}

.video-modal__close {
  width: 48px;
  height: 48px;
  position: fixed;
  top: 18px;
  right: 22px;
  z-index: 1001;
  border: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #bed000;
  color: #1b1c11;
  font-size: 22px;
  cursor: pointer;
}

.video-modal__frame {
  width: min(100%, 1180px);
  height: min(78vh, 720px);
  border: 0;
  border-radius: 12px;
  background: #000000;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
}

@media (max-width: 860px) {
  .segundo-hallazgo {
    height: auto;
    min-height: 100svh;
    padding: 28px 24px;
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
  .segundo-hallazgo__video,
  .segundo-hallazgo__media {
    grid-column: auto;
    grid-row: auto;
  }

  .segundo-hallazgo__video {
    grid-template-columns: 1fr;
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
