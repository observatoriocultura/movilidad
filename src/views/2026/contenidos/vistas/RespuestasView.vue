<template>
  <main class="respuestas-view">
    <header class="respuestas-view__header">
      <p class="respuestas-view__eyebrow">La respuesta no está solo en la norma</p>

      <h1>Movilidad: una pregunta profundamente humana</h1>

      <p class="respuestas-view__subtitle">
        Antes de diseñar acciones, había que entender qué sostiene los comportamientos en la
        calle: las creencias, los hábitos, las emociones y las normas sociales que guían las
        decisiones cotidianas.
      </p>
    </header>

    <section class="respuestas-view__column" aria-label="Factores humanos y culturales">
      <p class="respuestas-view__lead">
        Estas preguntas de ciudad no se resuelven solo con
        <strong>más señales</strong>, <strong>más normas</strong> o
        <strong>más infraestructura</strong>.
      </p>

      <p>
        Detrás de cada comportamiento en la vía operan <strong>creencias</strong>,
        <strong>emociones</strong>, <strong>hábitos automáticos</strong>,
        <strong>narrativas que normalizan el riesgo</strong> y normas sociales que muchas veces
        pesan más que la ley escrita.
      </p>

      <p>
        Reconocer esto fue el punto de partida del
        <strong>Convenio Interadministrativo No. 611 de 2025</strong> entre la Secretaría
        Distrital de Movilidad y la Secretaría Distrital de Cultura, Recreación y Deporte: si
        los problemas de movilidad en Bogotá tienen una raíz
        <strong>profundamente humana, cultural y conductual</strong>, las respuestas también.
      </p>
    </section>

    <section class="respuestas-view__column" aria-label="Enfoque de Cultura Ciudadana">
      <p>
        Por eso, este convenio permitió la construcción del
        <strong>enfoque de Cultura Ciudadana</strong>. Este enfoque pone la
        <strong>protección de la vida</strong> como principio que guía todo, toma las prioridades
        de una <strong>movilidad segura, eficiente y sostenible</strong> como hoja de ruta, y usa
        herramientas de las <strong>ciencias del comportamiento</strong> para entender con datos
        concretos por qué las personas actúan como actúan en la vía.
      </p>

      <p>
        Integrar todo esto era necesario porque, por separado, cada mirada se quedaba corta:
        hablar de valores sin <strong>medir lo que pasa en la calle</strong> no cambia
        comportamientos, y medir comportamientos sin entender
        <strong>la cultura que los sostiene</strong> no produce cambios que duren.
      </p>

      <p class="respuestas-view__closing">
        El <strong>Enfoque de Cultura Ciudadana para la Movilidad</strong> resuelve esa
        separación y ofrece una ruta clara para pasar de entender los problemas a
        <strong>diseñar acciones que funcionen</strong> en el contexto real de Bogotá.
      </p>
    </section>
  </main>
</template>

<style scoped>
.respuestas-view {
  height: calc(100svh - 115px);
  width: 100%;
  padding: 34px 54px;
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 32px;
  align-items: center;
  overflow: hidden;
  border-left: 8px solid #bed000;
  background:
    linear-gradient(135deg, rgba(190, 208, 0, 0.22), rgba(190, 208, 0, 0) 42%),
    #fbfae7;
  color: #1b1c11;
}

.respuestas-view__header,
.respuestas-view__column {
  min-width: 0;
  align-self: center;
}

.respuestas-view__eyebrow {
  margin: 0 0 14px;
  color: #5a6400;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.respuestas-view h1 {
  margin: 0;
  color: #1b1c11;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: 0;
}

.respuestas-view__subtitle {
  margin: 16px 0 0;
  color: #464834;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.38;
}

.respuestas-view__column p {
  margin: 0;
  color: #303125;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(13px, 0.96vw, 15px);
  line-height: 1.35;
  letter-spacing: 0;
}

.respuestas-view__column p + p {
  margin-top: 10px;
}

.respuestas-view__lead,
.respuestas-view__closing {
  font-family: var(--heading, system-ui, sans-serif);
  font-weight: 800;
}

.respuestas-view__lead {
  font-size: clamp(17px, 1.32vw, 20px) !important;
  line-height: 1.2 !important;
  color: #1b1c11 !important;
}

.respuestas-view strong {
  color: #4e5600;
  font-weight: 800;
}

.respuestas-view__closing {
  padding: 10px 12px;
  border-radius: 8px;
  background: #f0efdc;
  color: #1b1c11 !important;
}

@media (max-width: 860px) {
  .respuestas-view {
    height: auto;
    min-height: 100svh;
    padding: 28px 24px;
    grid-template-columns: 1fr;
    row-gap: 28px;
    align-items: flex-start;
    border-left-width: 6px;
  }

  .respuestas-view__header,
  .respuestas-view__column {
    align-self: auto;
  }
}
</style>
