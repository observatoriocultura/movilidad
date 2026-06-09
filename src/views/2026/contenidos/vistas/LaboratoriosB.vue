<script setup>
const razones = [
  {
    icono: 'bi-people-fill',
    titulo: 'Personas que dinamizan',
    texto:
      'Los saberes, experiencias, perspectivas y vínculos con el territorio hacen posible la creación de productos y acciones transformadoras.',
    destaque: 'saberes y experiencias',
  },
  {
    icono: 'bi-person-raised-hand',
    titulo: 'Comunidades protagonistas',
    texto:
      'Las comunidades dejan de ser receptoras pasivas: diagnostican, idean, crean e implementan acciones con sentido de pertenencia.',
    destaque: 'agentes activos',
  },
  {
    icono: 'bi-chat-dots-fill',
    titulo: 'Participación innovadora',
    texto:
      'Proponen nuevas formas de interacción entre ciudadanía e institucionalidad, fortaleciendo la democracia desde la colaboración y el diálogo.',
    destaque: 'colaboración y diálogo',
  },
]
</script>

<template>
  <main class="contenido-slide laboratorios-b">
    <section class="container-fluid px-4 px-lg-5 py-4 h-100">
      <div class="row align-items-end g-4 mb-4">
        <div class="col-lg-8">
          <p class="contenido-eyebrow mb-2">Laboratorios de Transformación Cultural Situada</p>
          <h1 class="contenido-title display-4 lh-1 mb-3">
            De la solución en la vía a la conversación en el barrio
          </h1>
          <div class="accent-line" aria-hidden="true"></div>
        </div>

        <div class="col-lg-4">
          <div class="contenido-panel question-box p-4">
            <div class="d-flex align-items-center gap-3">
              <span class="contenido-icon contenido-icon--brand contenido-icon--lg question-box__icon" aria-hidden="true">
                <i class="bi bi-patch-question-fill"></i>
              </span>
              <h2 class="contenido-heading h3 mb-0">¿Por qué son importantes?</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 reason-row">
        <div v-for="(razon, index) in razones" :key="razon.titulo" class="col-12 col-lg-4">
          <article class="contenido-panel reason-card h-100 p-4 p-xl-5">
            <div class="d-flex justify-content-between align-items-start gap-3 mb-4">
              <span class="contenido-icon contenido-icon--brand contenido-icon--lg reason-card__icon" aria-hidden="true">
                <i class="bi" :class="razon.icono"></i>
              </span>
              <span class="contenido-number reason-card__number">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <h3 class="contenido-heading h2 mb-3">{{ razon.titulo }}</h3>
            <p class="lead fw-semibold mb-4">{{ razon.texto }}</p>

            <div class="contenido-tag reason-card__tag d-inline-flex align-items-center gap-2 px-3 py-2">
              <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
              <strong>{{ razon.destaque }}</strong>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.laboratorios-b h1 {
  max-width: 980px;
  font-size: clamp(2.7rem, 5vw, 4.9rem);
}

.accent-line {
  width: min(300px, 44vw);
  height: 7px;
  border-radius: 999px;
  background: var(--color-1);
}

.question-box h2 {
  font-size: clamp(1.45rem, 2vw, 2rem);
}

.reason-row {
  min-height: 430px;
}

.reason-card {
  display: flex;
  flex-direction: column;
}

.reason-card h3 {
  font-size: clamp(1.55rem, 2vw, 2.25rem);
}

.reason-card p {
  color: var(--contenidos-texto);
  font-size: clamp(1rem, 1.22vw, 1.22rem);
  line-height: 1.35;
}

.reason-card__tag {
  margin-top: auto;
  font-size: 0.95rem;
}

@media (max-width: 991.98px) {
  .reason-row {
    min-height: auto;
  }
}

@media (max-width: 575.98px) {
  .laboratorios-b h1 {
    font-size: 2.35rem;
  }

  .question-box__icon,
  .reason-card__icon {
    width: 54px;
    height: 54px;
    flex-basis: 54px;
    font-size: 1.7rem;
  }
}
</style>
