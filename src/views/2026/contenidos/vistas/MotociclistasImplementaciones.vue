<script setup>
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

const documentos = [
  {
    titulo: 'Diseño de estrategia',
    url: 'https://docs.google.com/document/d/1GNVctZw1LFEa6qLw-Zmebt71hmYMkaL_/edit?usp=sharing&ouid=106533408026140613709&rtpof=true&sd=true',
  },
  {
    titulo: 'Protocolo de implementación acción de teatro invisible',
    url: 'https://docs.google.com/document/d/1CrTs2XrkJPDD9iObTbYoToGFcC3DrqNQ/edit?usp=sharing&ouid=106533408026140613709&rtpof=true&sd=true',
  },
  {
    titulo: 'Protocolo de implementación acción de experimentos sociales',
    url: 'https://docs.google.com/document/d/1xIn3sgvoeDj49bL94msWujQ8CYZxNA7x/edit?usp=sharing&ouid=106533408026140613709&rtpof=true&sd=true',
  },
  {
    titulo: 'Protocolo de implementación de Circuito pedagógico',
    url: 'https://docs.google.com/document/d/14r5HBXOHAOf54Yj5dZdSUUWjfvjB7Ou5/edit?usp=sharing&ouid=106533408026140613709&rtpof=true&sd=true',
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

    <aside class="resultados-panel" aria-label="Resultados y documentos relacionados">
      <section class="resultados-panel__block" aria-labelledby="resultados-title">
        <h2 id="resultados-title">Resultados</h2>
        <span class="section-mark" aria-hidden="true"></span>

        <div class="pending-card">
          <div class="pending-card__icon" aria-hidden="true">
            <i class="bi bi-clipboard-check"></i>
          </div>
          <strong>Pendiente</strong>
        </div>
      </section>

      <section class="resultados-panel__block" aria-labelledby="documentos-title">
        <h2 id="documentos-title">Documentos relacionados</h2>
        <span class="section-mark" aria-hidden="true"></span>

        <nav class="documents-list" aria-label="Documentos relacionados">
          <a
            v-for="documento in documentos"
            :key="documento.titulo"
            :href="documento.url || '#'"
            :aria-disabled="!documento.url"
            :target="documento.url ? '_blank' : undefined"
            :rel="documento.url ? 'noopener noreferrer' : undefined"
            @click="!documento.url && $event.preventDefault()"
          >
            <i class="bi bi-file-earmark-text" aria-hidden="true"></i>
            <span>{{ documento.titulo }}</span>
          </a>
        </nav>
      </section>
    </aside>
  </main>
</template>

<style scoped>
.motociclistas-implementaciones {
  min-height: calc(100svh - 115px);
  width: 100%;
  padding: 24px 50px 28px;
  display: grid;
  grid-template-columns: minmax(500px, 1fr) 34px minmax(500px, 0.92fr);
  gap: 26px;
  overflow: hidden;
  background:
    radial-gradient(circle at 48% 2%, rgba(190, 208, 0, 0.14), transparent 7%),
    linear-gradient(180deg, #ffffff 0%, #f7f7f3 100%);
  color: #070d35;
}

.implementaciones-panel__eyebrow {
  margin: 0 0 20px;
  color: #a7ba00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(30px, 3vw, 42px);
  line-height: 0.92;
  font-weight: 900;
  letter-spacing: 0;
}

.implementaciones-panel h1,
.resultados-panel h2 {
  margin: 0;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(30px, 2.72vw, 42px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0;
}

.section-mark {
  width: 110px;
  height: 6px;
  margin: 13px 0 16px;
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
  font-size: clamp(18px, 1.45vw, 25px);
  line-height: 1;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

.implementaciones-table__head > div {
  padding: 18px 20px;
}

.implementaciones-table__head > div + div,
.action-row__scope {
  border-left: 1px solid rgba(190, 208, 0, 0.4);
}

.action-row {
  min-height: 185px;
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
}

.action-row + .action-row {
  border-top: 1px solid rgba(190, 208, 0, 0.28);
}

.action-row__name {
  padding: 28px 28px;
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 26px;
  align-items: center;
}

.action-row__name span {
  width: 76px;
  height: 76px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #bed000;
  color: #ffffff;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: 43px;
  line-height: 1;
  font-weight: 900;
}

.action-row__name h2 {
  margin: 0;
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(20px, 1.48vw, 26px);
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: 0;
}

.action-row__scope {
  padding: 20px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.action-row__scope p {
  margin: 0;
  display: grid;
  grid-template-columns: 46px auto minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  color: #070d35;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(15px, 1.08vw, 19px);
  line-height: 1.2;
  font-weight: 600;
}

.action-row__scope i {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(190, 208, 0, 0.13);
  color: #a7ba00;
  font-size: 25px;
  line-height: 1;
}

.action-row__scope strong {
  color: #a7ba00;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(20px, 1.34vw, 26px);
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
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  min-width: 0;
}

.resultados-panel__block {
  min-width: 0;
}

.pending-card {
  min-height: 150px;
  padding: 22px 28px;
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 34px;
  align-items: center;
  border-radius: 12px;
  background:
    linear-gradient(90deg, rgba(190, 208, 0, 0.12), rgba(190, 208, 0, 0.05)),
    #f5f5eb;
}

.pending-card__icon {
  width: 118px;
  height: 118px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(190, 208, 0, 0.13);
  color: #a7ba00;
  font-size: 76px;
  line-height: 1;
}

.pending-card strong {
  color: #070d35;
  font-family: var(--heading, system-ui, sans-serif);
  font-size: clamp(24px, 1.9vw, 33px);
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
}

.documents-list {
  display: grid;
  gap: 12px;
}

.documents-list a {
  min-height: 76px;
  width: 100%;
  padding: 12px 22px;
  display: grid;
  grid-template-columns: 52px 1px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  border: 1px solid rgba(7, 13, 53, 0.08);
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(7, 13, 53, 0.08);
  color: #005fd3;
  font-family: var(--body, system-ui, sans-serif);
  font-size: clamp(14px, 0.98vw, 17px);
  line-height: 1.18;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.documents-list a::before {
  content: "";
  width: 1px;
  height: 34px;
  grid-column: 2;
  grid-row: 1;
  align-self: center;
  background: rgba(0, 95, 211, 0.5);
}

.documents-list i {
  color: #005fd3;
  font-size: 38px;
  line-height: 1;
}

.documents-list span {
  min-width: 0;
  grid-column: 3;
}

@media (max-width: 1180px) {
  .motociclistas-implementaciones {
    height: auto;
    min-height: 100svh;
    grid-template-columns: 1fr;
    overflow: auto;
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
    padding: 24px 18px;
  }

  .implementaciones-table__head,
  .action-row,
  .pending-card {
    grid-template-columns: 1fr;
  }

  .implementaciones-table__head > div + div,
  .action-row__scope {
    border-left: 0;
    border-top: 1px solid rgba(190, 208, 0, 0.28);
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
    grid-template-columns: 44px minmax(0, 1fr);
  }

  .documents-list a {
    grid-template-columns: 44px 1px minmax(0, 1fr);
    gap: 14px;
  }

  .documents-list a::before {
    display: none;
  }
}
</style>
