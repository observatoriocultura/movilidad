<script setup>
import portadaMovilidad from '../../assets/portada-movilidad.jpg'

const metrics = [
  {
    label: 'Metricas clave',
    value: '+85%',
    detail: 'Uso de casco',
  },
  {
    label: 'Tendencia',
    value: '12.4%',
    detail: 'Crecimiento bici',
  },
  {
    label: 'Data points',
    value: '450k',
    detail: 'Observaciones',
  },
]

const insights = [
  {
    icon: 'directions_bike',
    value: '74%',
    label: 'Respeto a ciclovias',
    variant: 'lime',
  },
  {
    icon: 'speed',
    value: '+15%',
    label: 'Conciencia de velocidad',
    variant: 'green',
  },
]
</script>

<template>
  <header class="topbar">
    <nav class="topbar__inner" aria-label="Navegacion principal">
      <RouterLink class="brand" to="/">Cultura para la Movilidad</RouterLink>

      <RouterLink class="report-button" to="/contenidos">Empezar</RouterLink>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero__image" :src="portadaMovilidad" alt="" />
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__copy">
          <p class="eyebrow"><span></span> Reporte ejecutivo de ciudadania</p>

          <h1 id="hero-title">
            Cultura para la
            <strong>Movilidad</strong>
          </h1>

          <p class="hero__summary">
            Resultados de analisis de cultura y comportamiento ciudadano en movilidad,
            transporte, motocicletas y biciusuarios.
          </p>

          <div class="metric-grid" aria-label="Metricas destacadas">
            <article v-for="metric in metrics" :key="metric.label" class="metric-card">
              <span>{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
              <small>{{ metric.detail }}</small>
            </article>
          </div>

          <div class="hero__meta" aria-label="Informacion del reporte">
            <span>Junio de 2026</span>
            <i aria-hidden="true"></i>
            <span>Bogota, Colombia</span>
          </div>
        </div>

        <div class="signal-rings" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="slide-indicator" aria-hidden="true">
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section class="insights" aria-labelledby="overview-title">
      <article class="overview-card">
        <div>
          <h2 id="overview-title">Vision general</h2>
          <p>
            Analizamos la evolucion de los comportamientos en la via publica para
            desarrollar politicas publicas basadas en evidencia.
          </p>
        </div>

        <a class="method-link" href="#">
          Ver metodologia
          <span aria-hidden="true">-></span>
        </a>
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

  <footer class="footer">
    <div class="footer__inner">
      <div>
        <strong>Cultura para la Movilidad</strong>
        <p>(c) 2026 Cultura para la Movilidad. Analisis de comportamiento ciudadano.</p>
      </div>

      <nav aria-label="Enlaces secundarios">
        <a href="#">Privacidad</a>
        <a href="#">Datos abiertos</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  </footer>
</template>
