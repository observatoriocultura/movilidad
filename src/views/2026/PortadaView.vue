<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import MainMenu from '../../components/MainMenu.vue'
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

</script>

<template>
  <MainMenu />

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
            Cultura Ciudadana
            <strong>para la Movilidad</strong>
          </h1>

          <p class="hero__summary">
            En este sitio encontrarás toda la información del convenio 611 de 2025 realizado entre
            la Secretaria Distrital de Movilidad y la Secretaría Distrital de Cultura, Recreación y
            Deporte. Un convenio que integra la cultura ciudadana, movilidad segura y las ciencias
            del comportamiento.
          </p>

          <div class="hero__meta" aria-label="Información del producto">
            <span>Junio de 2026</span>
            <i aria-hidden="true"></i>
            <span>Bogotá, Colombia</span>
            <i aria-hidden="true"></i>
            <span>Secretaría Distrital de Cultura, Recreación y Deporte + Secretaría Distrital de Movilidad</span>
          </div>
        </div>

        <article class="overview-card hero__overview" aria-labelledby="overview-title">
          <div>
            <h2 id="overview-title">Una ruta de lectura</h2>
            <p>
              <strong>Lógica del Recorrido:</strong> Del diagnóstico a la transformación cultural.
            </p>
            <p>
              En este espacio encontrarás una guía para explorar el sitio. Usa las pestañas superiores
              para conocer el Diagnóstico Comportamental (Hallazgos) y las Intervenciones Culturales
              (Motociclistas, Empatía, Embriaguez y Mal Parqueo).
            </p>
            <p>
              Descubre cómo, a partir de estos hallazgos, se diseñan estrategias para promover una
              movilidad más segura en la ciudad.
            </p>
          </div>
        </article>
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

  </main>

</template>
