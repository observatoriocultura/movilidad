<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import logoAquiSi from '../../assets/images/app/logos-distrito-aqui-si-pasa-mi-ciudad-mi casa.svg'
import logoBogota from '../../assets/images/app/logos-distrito-bogota-estrella.svg'

const portadaBase = `${import.meta.env.BASE_URL}2026/tablero_1/portada/`
const imagenesPortada = [
  'portada-movilidad.jpg',
  'datos-a-la-calle-1.jpg',
  'movilidad-estrategia.jpg',
  'movilidad-estrategia-2.jpg',
].map((imagen) => `${portadaBase}${imagen}`)

const imagenActiva = ref(0)
let intervaloPortada = null

const iniciarCarrusel = () => {
  window.clearInterval(intervaloPortada)
  intervaloPortada = window.setInterval(avanzarImagen, 5000)
}

const cambiarImagen = (indice) => {
  if (indice === imagenActiva.value) return

  imagenActiva.value = indice
  iniciarCarrusel()
}

const avanzarImagen = () => {
  imagenActiva.value = (imagenActiva.value + 1) % imagenesPortada.length
}

onMounted(() => {
  iniciarCarrusel()
})

onBeforeUnmount(() => {
  window.clearInterval(intervaloPortada)
})

const metrics = [
  {
    label: 'Convenio',
    value: '611',
    detail: 'Interadministrativo 2025',
  },
  {
    label: 'Casos priorizados',
    value: '2',
    detail: 'Motociclistas y empatía vial',
  },
  {
    label: 'Ruta de trabajo',
    value: '7',
    detail: 'Capítulos de contexto y acción',
  },
]

const insights = [
  {
    icon: 'travel_explore',
    value: '01',
    label: 'Diagnóstico comportamental',
    variant: 'lime',
  },
  {
    icon: 'diversity_3',
    value: '02',
    label: 'Intervenciones culturales',
    variant: 'green',
  },
  {
    icon: 'school',
    value: '03',
    label: 'Aprendizajes para continuar',
    variant: 'blue',
  },
]
</script>

<template>
  <header class="topbar">
    <nav class="topbar__inner" aria-label="Navegación principal">
      <div class="navlinks" aria-label="Secciones principales">
        <RouterLink to="/contenidos/primer_hallazgo">Hallazgos</RouterLink>
        <RouterLink to="/contenidos/motociclistas">Motociclistas</RouterLink>
        <RouterLink to="/contenidos/empatia_a">Empatía</RouterLink>
        <RouterLink to="/contenidos/laboratorios_a">Laboratorios</RouterLink>
        <RouterLink to="/contenidos/aprendizajes_a">Aprendizajes</RouterLink>
      </div>

      <RouterLink class="report-button" to="/contenidos">Iniciar</RouterLink>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <img
        v-for="(imagen, index) in imagenesPortada"
        :key="imagen"
        class="hero__image"
        :class="{ 'hero__image--active': index === imagenActiva }"
        :src="imagen"
        decoding="async"
        alt=""
      />
      <div class="hero__overlay"></div>

      <img
        class="hero__logo hero__logo--left"
        :src="logoAquiSi"
        alt="Aquí sí pasa, mi ciudad, mi casa"
      />
      <img
        class="hero__logo hero__logo--right"
        :src="logoBogota"
        alt="Bogotá"
      />

      <div class="hero__content">
        <div class="hero__copy">
          <p class="eyebrow"><span></span> Convenio Interadministrativo 611 de 2025</p>

          <h1 id="hero-title">
            Del diagnóstico
            <strong>a la transformación cultural</strong>
          </h1>

          <p class="hero__summary">
            Una experiencia navegable sobre cómo la Secretaría Distrital de Movilidad y la
            Secretaría Distrital de Cultura, Recreación y Deporte integran cultura ciudadana,
            movilidad segura y ciencias del comportamiento para comprender por qué actuamos como
            actuamos en la vía.
          </p>

          <div class="metric-grid" aria-label="Datos destacados del convenio">
            <article v-for="metric in metrics" :key="metric.label" class="metric-card">
              <span>{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
              <small>{{ metric.detail }}</small>
            </article>
          </div>

          <div class="hero__meta" aria-label="Información del producto">
            <span>Junio de 2026</span>
            <i aria-hidden="true"></i>
            <span>Bogotá, Colombia</span>
            <i aria-hidden="true"></i>
            <span>Secretaría Distrital de Cultura, Recreación y Deporte + Secretaría Distrital de Movilidad</span>
          </div>
        </div>

        <div class="signal-rings" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="slide-indicator" aria-label="Imágenes de portada">
        <button
          v-for="(imagen, index) in imagenesPortada"
          :key="imagen"
          type="button"
          :class="{ active: index === imagenActiva }"
          :aria-label="`Mostrar imagen ${index + 1}`"
          :aria-current="index === imagenActiva ? 'true' : undefined"
          @click="cambiarImagen(index)"
        ></button>
      </div>
    </section>

    <section class="insights" aria-labelledby="overview-title">
      <article class="overview-card">
        <div>
          <h2 id="overview-title">Una ruta de lectura</h2>
          <p>
            El contenido avanza desde las preguntas iniciales hasta los hallazgos, estrategias,
            laboratorios, escuela de multiplicadores y aprendizajes estratégicos del proceso.
          </p>
        </div>

        <RouterLink class="method-link" to="/contenidos/respuestas">
          Entrar al contexto
          <span aria-hidden="true">-></span>
        </RouterLink>
      </article>

      <article
        v-for="insight in insights"
        :key="insight.label"
        class="insight-card"
        :class="`insight-card--${insight.variant}`"
      >
        <span class="material-symbols-outlined insight-icon" aria-hidden="true">
          {{ insight.icon }}
        </span>
        <strong>{{ insight.value }}</strong>
        <small>{{ insight.label }}</small>
      </article>
    </section>
  </main>

</template>
