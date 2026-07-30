<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const videoModalAbierto = ref(false)
const videoThumbnail = `${import.meta.env.BASE_URL}2026/tablero_1/images/empatia-video-thumbnail.jpg`
const videoDriveId = '1hZhz4BFxpBp0C-BAfxz0Rv1ri4w88bsb'
const videoUrl = computed(() =>
  videoModalAbierto.value ? `https://drive.google.com/file/d/${videoDriveId}/preview` : '',
)

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

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', manejarTeclaModal)
  cerrarVideo()
})

const acciones = [
  {
    numero: '01',
    nombre: 'Laboratorio de co creación',
    alcance: [
      { icono: 'bi-people', cifra: '3', texto: 'sesiones de grupo focal' },
      { icono: 'bi-music-note-beamed', cifra: '2', texto: 'sesiones de creación sonora' },
      { icono: 'bi-camera-reels', cifra: '3', texto: 'sesiones de creación de video clip' },
      { icono: 'bi-clock', cifra: '26', texto: 'horas en total' },
    ],
  },
  {
    numero: '02',
    nombre: 'Intervención con señal móvil',
    alcance: [
      { icono: 'bi-people', cifra: '12', texto: 'implementaciones' },
      { icono: 'bi-clock', cifra: '36', texto: 'horas en campo' },
    ],
  },
  {
    numero: '03',
    nombre: 'Kit emocional y contratos sociales',
    alcance: [{ icono: 'bi-people', cifra: '10', texto: 'implementaciones' }],
  },
]
</script>

<template>
  <main class="empatia-implementaciones">
    <section class="implementaciones-panel" aria-labelledby="empatia-implementaciones-title">
      <p class="implementaciones-panel__eyebrow">EMPATÍA</p>
      <h1 id="empatia-implementaciones-title">Implementaciones</h1>
      <span class="section-mark" aria-hidden="true"></span>

      <div class="implementaciones-table" role="table" aria-label="Acciones y alcance de empatía">
        <div class="implementaciones-table__head" role="row">
          <div role="columnheader">Acción</div>
          <div role="columnheader">Alcance</div>
        </div>

        <article v-for="accion in acciones" :key="accion.numero" class="action-row" role="row">
          <div class="action-row__name" role="cell">
            <span>{{ accion.numero }}</span>
            <h2>{{ accion.nombre }}</h2>
          </div>

          <div class="action-row__scope" role="cell">
            <p v-for="item in accion.alcance" :key="`${accion.numero}-${item.texto}`">
              <i class="bi" :class="item.icono" aria-hidden="true"></i>
              <strong>{{ item.cifra }}</strong>
              <span>{{ item.texto }}</span>
            </p>
          </div>
        </article>
      </div>
    </section>

    <div class="empatia-implementaciones__divider" aria-hidden="true">
      <span></span>
      <span></span>
    </div>

    <aside class="resultados-panel" aria-label="Resultados de la estrategia de empatía">
      <section class="resultados-panel__block" aria-labelledby="empatia-resultados-title">
        <h2 id="empatia-resultados-title">Resultados</h2>
        <span class="section-mark" aria-hidden="true"></span>

        <button
          class="video-card"
          type="button"
          aria-label="Ver video Al Dar Vía das Vida"
          @click="abrirVideo"
        >
          <img :src="videoThumbnail" alt="" loading="lazy" decoding="async" />
          <span class="video-card__overlay" aria-hidden="true">
            <strong>Al Dar Vía das Vida</strong>
            <i class="bi bi-play-fill"></i>
          </span>
        </button>
      </section>
    </aside>

    <Teleport to="body">
      <div
        v-if="videoModalAbierto"
        class="video-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Video Al Dar Vía das Vida"
        tabindex="-1"
        @click.self="cerrarVideo"
      >
        <button class="video-modal__close" type="button" aria-label="Cerrar video" @click="cerrarVideo">
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        <iframe
          class="video-modal__frame"
          :src="videoUrl"
          title="Al Dar Vía das Vida"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.empatia-implementaciones {
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 28px 50px 26px;
  display: grid;
  grid-template-columns: minmax(520px, 1.05fr) 28px minmax(390px, 0.78fr);
  gap: 22px;
  overflow: hidden;
  background:
    radial-gradient(circle at 48% 2%, rgba(var(--color-1-rgb), 0.14), transparent 7%),
    linear-gradient(180deg, #ffffff 0%, var(--contenidos-fondo-suave) 100%);
  color: var(--contenidos-texto);
}

.implementaciones-panel__eyebrow {
  margin: 0 0 12px;
  color: #5a6400;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(24px, 2.35vw, 32px);
  line-height: 0.96;
  font-weight: 900;
  letter-spacing: 0;
}

.implementaciones-panel h1,
.resultados-panel h2 {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(26px, 2.2vw, 34px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0;
}

.section-mark {
  width: 96px;
  height: 5px;
  margin: 10px 0 12px;
  display: block;
  border-radius: 999px;
  background: var(--color-1);
}

.implementaciones-table {
  border: 1px solid rgba(var(--color-1-rgb), 0.32);
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
}

.implementaciones-table__head {
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
  background: var(--color-1);
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(15px, 1.12vw, 19px);
  line-height: 1;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

.implementaciones-table__head > div {
  padding: 13px 16px;
}

.implementaciones-table__head > div + div,
.action-row__scope {
  border-left: 1px solid rgba(var(--color-1-rgb), 0.4);
}

.action-row {
  min-height: 126px;
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
}

.action-row + .action-row {
  border-top: 1px solid rgba(var(--color-1-rgb), 0.28);
}

.action-row__name {
  padding: 18px 20px;
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
}

.action-row__name span {
  width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-1);
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 31px;
  line-height: 1;
  font-weight: 900;
}

.action-row__name h2 {
  margin: 0;
  color: var(--contenidos-texto);
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(17px, 1.18vw, 21px);
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: 0;
}

.action-row__scope {
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.action-row__scope p {
  margin: 0;
  display: grid;
  grid-template-columns: 30px 42px minmax(0, 1fr);
  gap: 7px;
  align-items: center;
  min-width: 0;
  padding: 5px 8px;
  border-radius: 8px;
  background: rgba(var(--color-1-rgb), 0.08);
  color: var(--contenidos-texto);
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(12px, 0.86vw, 14px);
  line-height: 1.18;
  font-weight: 700;
}

.action-row__scope i {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--color-1-rgb), 0.13);
  color: #5a6400;
  font-size: 15px;
  line-height: 1;
}

.action-row__scope strong {
  color: #5a6400;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(16px, 1vw, 19px);
  line-height: 1;
  font-weight: 900;
}

.empatia-implementaciones__divider {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empatia-implementaciones__divider::before {
  content: "";
  width: 3px;
  flex: 1 1 auto;
  background: var(--color-1);
}

.empatia-implementaciones__divider span {
  width: 11px;
  height: 11px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-2);
}

.empatia-implementaciones__divider span:first-child {
  order: -1;
}

.resultados-panel {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: 0;
}

.resultados-panel__block {
  min-width: 0;
}

.video-card {
  width: 100%;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 12px;
  padding: 0;
  display: block;
  background: var(--contenidos-texto);
  box-shadow: 0 16px 34px rgba(8, 15, 37, 0.16);
  cursor: pointer;
}

.video-card img {
  width: 100%;
  height: 100%;
  min-height: 260px;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.video-card__overlay {
  position: absolute;
  inset: 0;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 18px;
  background: linear-gradient(180deg, rgba(8, 15, 37, 0.12), rgba(8, 15, 37, 0.72));
  color: #ffffff;
  transition: background 180ms ease;
}

.video-card__overlay strong {
  max-width: 340px;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(24px, 2.25vw, 36px);
  line-height: 1.02;
  font-weight: 900;
}

.video-card__overlay i {
  width: 74px;
  height: 74px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-1);
  color: #1b1c11;
  font-size: 58px;
  line-height: 1;
  box-shadow: 0 16px 32px rgba(8, 15, 37, 0.24);
}

.video-card:hover img,
.video-card:focus-visible img {
  transform: scale(1.025);
}

.video-card:hover .video-card__overlay,
.video-card:focus-visible .video-card__overlay {
  background: linear-gradient(180deg, rgba(8, 15, 37, 0.18), rgba(8, 15, 37, 0.82));
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

@media (max-width: 1180px) {
  .empatia-implementaciones {
    height: auto;
    min-height: 100svh;
    grid-template-columns: 1fr;
    overflow: auto;
  }

  .empatia-implementaciones__divider {
    display: none;
  }

  .resultados-panel {
    padding-top: 0;
  }
}

@media (max-width: 700px) {
  .empatia-implementaciones {
    padding: 28px 20px;
  }

  .implementaciones-table__head,
  .action-row,
  .video-card {
    grid-template-columns: 1fr;
  }

  .implementaciones-table__head > div + div,
  .action-row__scope {
    border-left: 0;
    border-top: 1px solid rgba(var(--color-1-rgb), 0.28);
  }

  .action-row__name {
    grid-template-columns: 62px minmax(0, 1fr);
    gap: 18px;
    padding: 22px 18px;
  }

  .action-row__name span {
    width: 62px;
    height: 62px;
    font-size: 34px;
  }

  .action-row__scope {
    padding: 18px;
  }

  .action-row__scope p {
    grid-template-columns: 30px 42px minmax(0, 1fr);
  }
}
</style>
