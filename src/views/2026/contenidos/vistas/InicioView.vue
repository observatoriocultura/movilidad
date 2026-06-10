<template>
  <main class="inicio-vue" aria-label="Preguntas de apertura">
    <section class="inicio-vue__questions">
      <article class="question-card">
        <p>¿Por qué las personas cruzan la calle por donde no deben aunque conocen el riesgo?</p>
      </article>

      <article class="question-card">
        <p>
          ¿Qué hace que un motociclista exceda la velocidad aun sabiendo que pone en peligro su
          vida y la de otros?
        </p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.inicio-vue {
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 42px 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 38%),
    #bed000;
  overflow: hidden;
}

.inicio-vue__questions {
  width: min(100%, 1180px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.question-card {
  min-height: 380px;
  padding: 36px;
  display: flex;
  align-items: center;
  border: 3px solid rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.06)),
    rgba(255, 255, 255, 0.08);
  box-shadow:
    0 24px 60px rgba(27, 28, 17, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.34);
}

.question-card p {
  margin: 0;
  color: #000000;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(30px, 2.75vw, 39px);
  line-height: 1.14;
  font-weight: 800;
  letter-spacing: 0;
}

.question-card:first-child {
  transform: translateY(-12px);
}

.question-card:last-child {
  transform: translateY(12px);
}

@media (max-width: 900px) {
  .inicio-vue {
    min-height: 100svh;
    padding: 28px 24px;
    overflow: auto;
  }

  .inicio-vue__questions {
    grid-template-columns: 1fr;
  }

  .question-card,
  .question-card:first-child,
  .question-card:last-child {
    min-height: 0;
    padding: 28px;
    transform: none;
  }

  .question-card p {
    font-size: 30px;
  }
}
</style>
