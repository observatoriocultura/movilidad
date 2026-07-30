<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const imageBase = `${import.meta.env.BASE_URL}2026/tablero_1/images/`
const videoActivo = ref(null)

const videos = [
  {
    titulo: 'Video podcast 1',
    thumbnail: `${imageBase}laboratorios-videos-1-thumbnail.jpg`,
    driveId: '1XQujhXM8chYiZ7-IswI3dsTN917x1ntS',
  },
  {
    titulo: 'Video podcast 2.1',
    thumbnail: `${imageBase}laboratorios-videos-2-thumbnail.jpg`,
    driveId: '1E3qYanFpLn3VAwGXfaYAgsLGSkrF8F9q',
  },
]

const videoUrl = computed(() =>
  videoActivo.value ? `https://drive.google.com/file/d/${videoActivo.value.driveId}/preview` : '',
)

const abrirVideo = (video) => {
  videoActivo.value = video
}

const cerrarVideo = () => {
  videoActivo.value = null
}

const manejarTeclaModal = (event) => {
  if (event.key === 'Escape') {
    cerrarVideo()
  }
}

watch(videoActivo, (video) => {
  document.body.style.overflow = video ? 'hidden' : ''

  if (video) {
    window.addEventListener('keydown', manejarTeclaModal)
  } else {
    window.removeEventListener('keydown', manejarTeclaModal)
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', manejarTeclaModal)
  cerrarVideo()
})
</script>

<template>
  <main class="contenido-slide laboratorios-videos">
    <section class="laboratorios-videos__inner" aria-labelledby="laboratorios-videos-title">
      <header class="laboratorios-videos__header">
        <p class="contenido-eyebrow mb-2">Laboratorios</p>
        <h1 id="laboratorios-videos-title" class="contenido-title mb-0">Memorias audiovisuales</h1>
      </header>

      <section class="laboratorios-videos__grid" aria-label="Videos de laboratorios">
        <button
          v-for="video in videos"
          :key="video.driveId"
          class="video-card"
          type="button"
          :aria-label="`Ver ${video.titulo}`"
          @click="abrirVideo(video)"
        >
          <img :src="video.thumbnail" alt="" loading="lazy" decoding="async" />
          <span class="video-card__overlay" aria-hidden="true">
            <strong>{{ video.titulo }}</strong>
            <i class="bi bi-play-fill"></i>
          </span>
        </button>
      </section>
    </section>

    <Teleport to="body">
      <div
        v-if="videoActivo"
        class="video-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="videoActivo.titulo"
        tabindex="-1"
        @click.self="cerrarVideo"
      >
        <button class="video-modal__close" type="button" aria-label="Cerrar video" @click="cerrarVideo">
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        <iframe
          class="video-modal__frame"
          :src="videoUrl"
          :title="videoActivo.titulo"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.laboratorios-videos {
  width: 100%;
  padding: 34px 54px;
  display: grid;
  align-items: center;
}

.laboratorios-videos__inner {
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.laboratorios-videos__header {
  max-width: 760px;
}

.laboratorios-videos__header h1 {
  font-size: clamp(2.25rem, 4.4vw, 4.8rem);
  line-height: 0.95;
}

.laboratorios-videos__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.video-card {
  width: 100%;
  min-height: 360px;
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  padding: 0;
  display: block;
  background: var(--contenidos-texto);
  box-shadow: 0 18px 42px rgba(8, 15, 37, 0.16);
  cursor: pointer;
}

.video-card img {
  width: 100%;
  height: 100%;
  min-height: 360px;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.video-card__overlay {
  position: absolute;
  inset: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 18px;
  background: linear-gradient(180deg, rgba(8, 15, 37, 0.08), rgba(8, 15, 37, 0.74));
  color: #ffffff;
  transition: background 180ms ease;
}

.video-card__overlay strong {
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(1.6rem, 2.4vw, 2.6rem);
  line-height: 1;
  font-weight: 900;
}

.video-card__overlay i {
  width: 78px;
  height: 78px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-1);
  color: #1b1c11;
  font-size: 60px;
  line-height: 1;
  box-shadow: 0 16px 32px rgba(8, 15, 37, 0.24);
}

.video-card:hover img,
.video-card:focus-visible img {
  transform: scale(1.025);
}

.video-card:hover .video-card__overlay,
.video-card:focus-visible .video-card__overlay {
  background: linear-gradient(180deg, rgba(8, 15, 37, 0.16), rgba(8, 15, 37, 0.84));
}

.video-card:focus-visible,
.video-modal__close:focus-visible {
  outline: 3px solid var(--color-1);
  outline-offset: 3px;
}

.video-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 70px 28px 28px;
  display: grid;
  place-items: center;
  background: rgba(8, 15, 37, 0.92);
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
  background: var(--color-1);
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

@media (max-width: 991.98px) {
  .laboratorios-videos {
    padding: 28px 24px;
    align-items: start;
  }

  .laboratorios-videos__grid {
    grid-template-columns: 1fr;
  }

  .video-card,
  .video-card img {
    min-height: 280px;
  }
}
</style>
