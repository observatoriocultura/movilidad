<script setup>
const secciones = [
  {
    titulo: '¿Qué se priorizó?',
    icono: 'bi-bullseye',
    items: [
      {
        icono: 'bi-traffic-light',
        partes: [
          'A partir de los resultados del diagnóstico y del enfoque de Cultura Ciudadana para la Movilidad, se escogió el comportamiento ',
          { texto: 'omitir el semáforo en rojo', destacado: true },
          ' como base para la transferencia conceptual con motociclistas.',
        ],
      },
      {
        icono: 'bi-diagram-3-fill',
        partes: [
          'Desde el enfoque de Cultura Ciudadana para la Movilidad, se tomó el cruce de ',
          { texto: 'factores, determinantes y motivantes', destacado: true },
          ' para diseñar una metodología de transferencia conceptual con motociclistas.',
        ],
      },
    ],
  },
  {
    titulo: '¿Qué se hizo?',
    icono: 'bi-tools',
    items: [
      {
        icono: 'bi-mortarboard-fill',
        partes: [
          'Se realizaron ',
          { texto: '3 cohortes de formación', destacado: true },
          ' con motociclistas de la ciudad, incluyendo repartidores, repartidoras y personas que trabajan en domicilios.',
        ],
      },
      {
        icono: 'bi-search-heart',
        partes: [
          'Se desarrolló un ejercicio analítico sobre el comportamiento priorizado, profundizando en las ',
          { texto: 'necesidades de transformación cultural', destacado: true },
          ' detrás de este comportamiento.',
        ],
      },
      {
        icono: 'bi-chat-square-heart-fill',
        partes: [
          'Se generaron espacios de reflexión colectiva para construir un ',
          { texto: 'compromiso de cambio comportamental', destacado: true },
          ' y multiplicar nuevos comportamientos hacia una movilidad más segura.',
        ],
      },
    ],
  },
]
</script>

<template>
  <main class="contenido-slide escuela-multiplicadores">
    <section class="container px-3 px-lg-5 py-3 h-100">
      <header class="contenido-panel contenido-panel--left hero-panel p-3 p-lg-4 mb-3">
        <div class="contenido-icon contenido-icon--brand contenido-icon--lg hero-panel__icon" aria-hidden="true">
          <i class="bi bi-megaphone-fill"></i>
        </div>

        <div>
          <p class="contenido-eyebrow mb-1">Formación y multiplicación</p>
          <h1 class="contenido-title mb-0">Escuela de Multiplicadores de Cultura Ciudadana para la Movilidad</h1>
        </div>
      </header>

      <section class="row g-3 align-items-stretch" aria-label="Contenido de Escuela de Multiplicadores">
        <div v-for="seccion in secciones" :key="seccion.titulo" class="col-12 col-lg-6">
          <article class="contenido-panel contenido-panel--top section-card h-100 p-3 p-xl-4">
            <div class="section-card__header mb-3">
              <span class="contenido-icon contenido-icon--blue contenido-icon--md section-card__icon" aria-hidden="true">
                <i class="bi" :class="seccion.icono"></i>
              </span>
              <h2 class="contenido-heading h3 mb-0">{{ seccion.titulo }}</h2>
            </div>

            <ul class="contenido-icon-list content-list mb-0">
              <li v-for="item in seccion.items" :key="item.icono">
                <span class="contenido-icon contenido-icon--brand-soft contenido-icon--sm content-list__icon" aria-hidden="true">
                  <i class="bi" :class="item.icono"></i>
                </span>
                <span>
                  <template v-for="(parte, index) in item.partes" :key="index">
                    <strong v-if="parte.destacado">{{ parte.texto }}</strong>
                    <template v-else>{{ parte }}</template>
                  </template>
                </span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.hero-panel {
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
}

.hero-panel h1 {
  font-size: clamp(1.45rem, 2.35vw, 2.45rem);
}

.section-card__header {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
}

.section-card h2 {
  font-size: clamp(1.35rem, 1.8vw, 2rem);
}

.content-list {
  margin-top: 0;
}

@media (max-width: 575.98px) {
  .hero-panel {
    grid-template-columns: 1fr;
  }

  .hero-panel h1 {
    font-size: 1.45rem;
  }

  .content-list li {
    grid-template-columns: 36px minmax(0, 1fr);
  }
}
</style>
