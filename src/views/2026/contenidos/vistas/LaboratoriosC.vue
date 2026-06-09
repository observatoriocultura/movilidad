<script setup>
const laboratorios = [
  {
    nombre: 'Laboratorio Las Delicias',
    icono: 'bi-geo-alt-fill',
  },
  {
    nombre: 'Laboratorio Minuto de Dios',
    icono: 'bi-signpost-split-fill',
  },
]

const informacion = [
  'Pequeño resumen del proceso.',
  'Resumen del grupo de trabajo.',
  'Fotos del proceso.',
  'Resumen y fotos del hito cultural.',
  'Anexo: informe lab para conocimiento.',
]
</script>

<template>
  <main class="contenido-slide contenido-slide--blue laboratorios-c">
    <section class="container-fluid px-3 px-lg-4 py-3 h-100">
      <header class="row g-3 align-items-stretch mb-3">
        <div v-for="laboratorio in laboratorios" :key="laboratorio.nombre" class="col-12 col-lg-6">
          <article class="contenido-panel contenido-panel--left-sm lab-title h-100 p-3">
            <span class="contenido-icon contenido-icon--brand lab-title__icon" aria-hidden="true">
              <i class="bi" :class="laboratorio.icono"></i>
            </span>
            <h1 class="contenido-title mb-0">{{ laboratorio.nombre }}</h1>
          </article>
        </div>
      </header>

      <section class="contenido-panel proposal-box mx-auto mb-3 p-3 p-lg-4" aria-labelledby="propuesta-labs">
        <div class="contenido-icon contenido-icon--blue proposal-box__icon" aria-hidden="true">
          <i class="bi bi-map-fill"></i>
        </div>

        <div>
          <p class="contenido-eyebrow mb-2">Propuesta para ambos labs</p>
          <h2 id="propuesta-labs" class="contenido-title h1 mb-3">
            Un mapa para ubicar ambos barrios y conocer el proceso de cada laboratorio.
          </h2>
          <div class="d-flex flex-wrap gap-2">
            <span class="contenido-tag badge-pill">
              <i class="bi bi-pin-map-fill" aria-hidden="true"></i>
              Ubicación territorial
            </span>
            <span class="contenido-tag badge-pill">
              <i class="bi bi-journal-text" aria-hidden="true"></i>
              Recorrido del proceso
            </span>
          </div>
        </div>
      </section>

      <section class="row g-3 info-row" aria-label="Información de los laboratorios">
        <div v-for="laboratorio in laboratorios" :key="`${laboratorio.nombre}-info`" class="col-12 col-lg-6">
          <article class="contenido-panel contenido-panel--top-sm info-panel h-100 p-3 p-xl-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="contenido-icon contenido-icon--pink info-panel__icon" aria-hidden="true">
                <i class="bi bi-folder2-open"></i>
              </span>
              <div>
                <p class="contenido-eyebrow info-panel__label mb-1">{{ laboratorio.nombre }}</p>
                <h2 class="contenido-heading h3 mb-0">Información del laboratorio</h2>
              </div>
            </div>

            <ol class="info-list mb-0">
              <li v-for="item in informacion" :key="`${laboratorio.nombre}-${item}`">
                <span>{{ item }}</span>
              </li>
            </ol>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.lab-title {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
}

.lab-title h1 {
  font-size: clamp(1.55rem, 2.55vw, 2.75rem);
}

.lab-title__icon {
  width: 52px;
  height: 52px;
  font-size: 1.55rem;
}

.proposal-box {
  max-width: 980px;
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr);
  gap: 18px;
  border-color: rgba(var(--color-4-rgb), 0.24);
}

.proposal-box__icon {
  width: 66px;
  height: 66px;
  font-size: 2rem;
}

.info-panel__label {
  font-size: clamp(0.78rem, 0.9vw, 0.9rem);
}

.proposal-box h2 {
  font-size: clamp(1.25rem, 2vw, 2.2rem);
  line-height: 1.08;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 0.74rem;
  font-size: 0.88rem;
}

.info-row {
  min-height: 250px;
}

.info-panel__icon {
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  font-size: 1.45rem;
}

.info-panel h2 {
  font-size: clamp(1.05rem, 1.45vw, 1.55rem);
}

.info-list {
  display: grid;
  gap: 0.55rem;
  padding-left: 1.25rem;
  color: var(--contenidos-texto);
  font-size: clamp(0.92rem, 1.06vw, 1.08rem);
  font-weight: 700;
  line-height: 1.14;
}

.info-list li::marker {
  color: #6f7b00;
  font-weight: 900;
}

@media (max-width: 991.98px) {
  .info-row {
    min-height: auto;
  }
}

@media (max-width: 575.98px) {
  .lab-title,
  .proposal-box {
    grid-template-columns: 1fr;
  }

  .lab-title h1 {
    font-size: 1.7rem;
  }

  .proposal-box__icon {
    width: 58px;
    height: 58px;
    font-size: 1.8rem;
  }
}
</style>
