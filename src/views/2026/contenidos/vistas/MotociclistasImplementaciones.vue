<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const videoModalAbierto = ref(false)
const videoThumbnail = `${import.meta.env.BASE_URL}2026/tablero_1/images/motociclistas-video-thumbnail.jpg`
const videoDriveId = '1mIj4QHAB61lkXllRxoVkZqy74UXZxtrX'
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
    nombre: 'Entre motociclistas nos cuidamos',
    alcance: [
      { icono: 'bi-people', cifra: '15', texto: 'implementaciones' },
      { icono: 'bi-clock', cifra: '45', texto: 'horas en campo' },
      { icono: 'bi-geo-alt', cifra: '7', texto: 'puntos de la ciudad' },
    ],
  },
  {
    numero: '02',
    nombre: 'Experimentos sociales',
    alcance: [
      { icono: 'bi-people', cifra: '12', texto: 'implementaciones' },
      { icono: 'bi-clock', cifra: '36', texto: 'horas en campo' },
      { icono: 'bi-geo-alt', cifra: '5', texto: 'puntos de la ciudad' },
    ],
  },
  {
    numero: '03',
    nombre: 'Circuito pedagógico',
    alcance: [
      { icono: 'bi-people', cifra: '10', texto: 'implementaciones' },
      { icono: 'bi-clock', cifra: '40', texto: 'horas en campo' },
      { icono: 'bi-geo-alt', cifra: '2', texto: 'colegios, 3 universidades, 3 plazas públicas' },
    ],
  },
]

</script>

<template>
  <main class="motociclistas-implementaciones">
    <section class="implementaciones-panel" aria-labelledby="implementaciones-title">
      <p class="implementaciones-panel__eyebrow">MOTOCICLISTAS</p>
      <h1 id="implementaciones-title">Implementaciones</h1>
      <span class="section-mark" aria-hidden="true"></span>

      <div class="implementaciones-table" role="table" aria-label="Acciones y alcance">
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

    <div class="motociclistas-implementaciones__divider" aria-hidden="true">
      <span></span>
      <span></span>
    </div>

    <aside class="resultados-panel" aria-label="Resultados">
      <section class="resultados-panel__block" aria-labelledby="resultados-title">
        <h2 id="resultados-title">Resultados</h2>
        <span class="section-mark" aria-hidden="true"></span>

        <button
          class="video-card"
          type="button"
          aria-label="Ver video de resultados de motociclistas"
          @click="abrirVideo"
        >
          <img :src="videoThumbnail" alt="" loading="lazy" decoding="async" />
          <span class="video-card__overlay" aria-hidden="true">
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
        aria-label="Video de resultados de motociclistas"
        tabindex="-1"
        @click.self="cerrarVideo"
        @keydown="manejarTeclaModal"
      >
        <button class="video-modal__close" type="button" aria-label="Cerrar video" @click="cerrarVideo">
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        <iframe
          class="video-modal__frame"
          :src="videoUrl"
          title="Video de resultados de motociclistas"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.motociclistas-implementaciones {
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 34px 58px 32px;
  display: grid;
  grid-template-columns: minmax(470px, 1fr) 30px minmax(470px, 0.92fr);
  gap: 24px;
  overflow: hidden;
  background:
    radial-gradient(circle at 48% 2%, rgba(190, 208, 0, 0.14), transparent 7%),
    linear-gradient(180deg, #ffffff 0%, #f7f7f3 100%);
  color: #070d35;
}

.implementaciones-panel__eyebrow {
  margin: 0 0 16px;
  color: #a7ba00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(26px, 2.6vw, 36px);
  line-height: 0.96;
  font-weight: 900;
  letter-spacing: 0;
}

.implementaciones-panel h1,
.resultados-panel h2 {
  margin: 0;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(27px, 2.35vw, 36px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0;
}

.section-mark {
  width: 96px;
  height: 5px;
  margin: 11px 0 14px;
  display: block;
  border-radius: 999px;
  background: #bed000;
}

.implementaciones-table {
  border: 1px solid rgba(190, 208, 0, 0.32);
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
}

.implementaciones-table__head {
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
  background: #bed000;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(16px, 1.22vw, 21px);
  line-height: 1;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

.implementaciones-table__head > div {
  padding: 15px 18px;
}

.implementaciones-table__head > div + div,
.action-row__scope {
  border-left: 1px solid rgba(190, 208, 0, 0.4);
}

.action-row {
  min-height: 158px;
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
}

.action-row + .action-row {
  border-top: 1px solid rgba(190, 208, 0, 0.28);
}

.action-row__name {
  padding: 22px 24px;
  display: grid;
  grid-template-columns: 66px minmax(0, 1fr);
  gap: 20px;
  align-items: center;
}

.action-row__name span {
  width: 66px;
  height: 66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #bed000;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 36px;
  line-height: 1;
  font-weight: 900;
}

.action-row__name h2 {
  margin: 0;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(18px, 1.28vw, 23px);
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: 0;
}

.action-row__scope {
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.action-row__scope p {
  margin: 0;
  display: grid;
  grid-template-columns: 40px auto minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  color: #070d35;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(13px, 0.94vw, 16px);
  line-height: 1.2;
  font-weight: 600;
}

.action-row__scope i {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(190, 208, 0, 0.13);
  color: #a7ba00;
  font-size: 21px;
  line-height: 1;
}

.action-row__scope strong {
  color: #a7ba00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(18px, 1.16vw, 22px);
  line-height: 1;
  font-weight: 900;
}

.motociclistas-implementaciones__divider {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.motociclistas-implementaciones__divider::before {
  content: "";
  width: 3px;
  flex: 1 1 auto;
  background: #bed000;
}

.motociclistas-implementaciones__divider span {
  width: 13px;
  height: 13px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #a7ba00;
}

.motociclistas-implementaciones__divider span:first-child {
  order: -1;
}

.resultados-panel {
  padding-top: 58px;
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
  min-height: 230px;
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 12px;
  padding: 0;
  display: block;
  background: #070d35;
  box-shadow: 0 16px 34px rgba(7, 13, 53, 0.16);
  cursor: pointer;
}

.video-card img {
  width: 100%;
  height: 100%;
  min-height: 230px;
  display: block;
  object-fit: cover;
  transition: transform 180ms ease;
}

.video-card__overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(7, 13, 53, 0.22);
  color: #ffffff;
  font-size: 76px;
  line-height: 1;
  transition: background 180ms ease;
}

.video-card__overlay i {
  width: 92px;
  height: 92px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #bed000;
  color: #070d35;
  box-shadow: 0 16px 32px rgba(7, 13, 53, 0.22);
}

.video-card:hover img,
.video-card:focus-visible img {
  transform: scale(1.025);
}

.video-card:hover .video-card__overlay,
.video-card:focus-visible .video-card__overlay {
  background: rgba(7, 13, 53, 0.34);
}

.video-card:focus-visible,
.video-modal__close:focus-visible {
  outline: 3px solid #bed000;
  outline-offset: 3px;
}

.video-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 70px 28px 28px;
  display: grid;
  place-items: center;
  background: rgba(7, 13, 53, 0.92);
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
  color: #070d35;
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
  .motociclistas-implementaciones {
    height: auto;
    min-height: 100svh;
    padding: 28px 32px 40px;
    grid-template-columns: 1fr;
    overflow: visible;
  }

  .motociclistas-implementaciones__divider {
    display: none;
  }

  .resultados-panel {
    padding-top: 0;
  }
}

@media (max-width: 700px) {
  .motociclistas-implementaciones {
    min-height: 100svh;
    padding: 20px 16px 32px;
    gap: 20px;
    border-top: 5px solid #bed000;
  }

  .implementaciones-panel__eyebrow {
    margin-bottom: 10px;
    font-size: clamp(24px, 9vw, 32px);
  }

  .implementaciones-panel h1,
  .resultados-panel h2 {
    font-size: clamp(30px, 9vw, 38px);
  }

  .section-mark {
    width: 72px;
    height: 4px;
    margin: 9px 0 12px;
  }

  .implementaciones-table {
    border-radius: 12px;
  }

  .implementaciones-table__head {
    display: none;
  }

  .action-row {
    min-height: 0;
    display: block;
  }

  .action-row__scope {
    border-left: 0;
    border-top: 1px solid rgba(190, 208, 0, 0.28);
  }

  .action-row__name {
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 14px;
    padding: 18px 14px;
  }

  .action-row__name span {
    width: 54px;
    height: 54px;
    font-size: 30px;
  }

  .action-row__name h2 {
    font-size: 20px;
    line-height: 1.12;
  }

  .action-row__scope {
    padding: 14px;
    gap: 11px;
  }

  .action-row__scope p {
    grid-template-columns: 34px auto minmax(0, 1fr);
    gap: 8px;
    align-items: start;
    font-size: 15px;
    line-height: 1.3;
  }

  .action-row__scope i {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }

  .action-row__scope strong {
    font-size: 20px;
    line-height: 1.1;
  }

  .resultados-panel {
    gap: 20px;
  }

  .video-card {
    min-height: 0;
    aspect-ratio: 16 / 9;
    border-radius: 10px;
  }

  .video-card img {
    min-height: 0;
  }

  .video-card__overlay i {
    width: 70px;
    height: 70px;
    font-size: 58px;
  }

}
</style>
