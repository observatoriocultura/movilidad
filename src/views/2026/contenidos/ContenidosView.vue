<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MainMenu from '../../../components/MainMenu.vue'
import './contenidos.css'
import { vistasContenidos } from './constants'
import InicioEstructura from './vistas/InicioEstructura.vue'
import InicioView from './vistas/InicioView.vue'
import RespuestasView from './vistas/RespuestasView.vue'
import PrimerHallazgo from './vistas/PrimerHallazgo.vue'
import SegundoHallazgo from './vistas/SegundoHallazgo.vue'
import TercerHallazgo from './vistas/TercerHallazgo.vue'
import MotociclistasView from './vistas/MotociclistasView.vue'
import MotociclistasBView from './vistas/MotociclistasViewB.vue'
import MotociclistasImplementaciones from './vistas/MotociclistasImplementaciones.vue'
import EmpatiaA from './vistas/EmpatiaA.vue'
import EmpatiaB from './vistas/EmpatiaB.vue'
import EmpatiaC from './vistas/EmpatiaC.vue'
import LaboratoriosA from './vistas/LaboratoriosA.vue'
import LaboratoriosB from './vistas/LaboratoriosB.vue'
import LaboratoriosC from './vistas/LaboratoriosC.vue'
import EscuelaMultiplicadores from './vistas/EscuelaMultiplicadores.vue'
import AprendizajesA from './vistas/AprendizajesA.vue'

const componentesContenido = {
  inicio_estructura: InicioEstructura,
  inicio: InicioView,
  respuestas: RespuestasView,
  primer_hallazgo: PrimerHallazgo,
  segundo_hallazgo: SegundoHallazgo,
  tercer_hallazgo: TercerHallazgo,
  motociclistas: MotociclistasView,
  motociclistas_b: MotociclistasBView,
  motociclistas_implementaciones: MotociclistasImplementaciones,  
  empatia_a: EmpatiaA,
  empatia_b: EmpatiaB,
  empatia_c: EmpatiaC,
  laboratorios_a: LaboratoriosA,
  laboratorios_b: LaboratoriosB,
  laboratorios_c: LaboratoriosC,
  escuela_multiplicadores: EscuelaMultiplicadores,
  aprendizajes_a: AprendizajesA,
}

const route = useRoute()
const router = useRouter()
const vistaPorDefecto = vistasContenidos[0]?.key ?? 'inicio'
const keysValidas = new Set(vistasContenidos.map((vista) => vista.key))
const vistasNavegables = vistasContenidos.filter(
  (vista) => vista.display !== false && componentesContenido[vista.key],
)

const vistaActiva = computed(() => {
  const key = route.params.key
  const keyNormalizada = Array.isArray(key) ? key[0] : key

  return keysValidas.has(keyNormalizada) ? keyNormalizada : vistaPorDefecto
})

const componenteActivo = computed(() => componentesContenido[vistaActiva.value] ?? null)

const cambiarVista = (direccion) => {
  const indiceActivo = vistasNavegables.findIndex((vista) => vista.key === vistaActiva.value)
  const indiceDestino = indiceActivo + direccion
  const vistaDestino = vistasNavegables[indiceDestino]

  if (!vistaDestino) return

  router.push({ name: 'contenidos', params: { key: vistaDestino.key } })
}

const esCampoEditable = (elemento) => {
  if (!elemento) return false

  const tagName = elemento.tagName?.toLowerCase()

  return (
    elemento.isContentEditable ||
    tagName === 'input' ||
    tagName === 'textarea' ||
    tagName === 'select'
  )
}

const hayGaleriaActiva = () => Boolean(document.querySelector('.pswp.pswp--open, .pswp[aria-modal="true"]'))

const manejarTeclas = (event) => {
  if (event.defaultPrevented || hayGaleriaActiva()) return
  if (esCampoEditable(event.target)) return

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    cambiarVista(1)
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    cambiarVista(-1)
  }
}

watch(
  () => route.params.key,
  (key) => {
    const keyNormalizada = Array.isArray(key) ? key[0] : key

    if (!keyNormalizada || !keysValidas.has(keyNormalizada)) {
      router.replace({ name: 'contenidos', params: { key: vistaPorDefecto } })
    }
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('keydown', manejarTeclas)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', manejarTeclas)
})
</script>

<template>
  <main class="contenidos-view">
    <MainMenu :active-key="vistaActiva" />

    <section class="contenidos-view__panel" aria-live="polite">
      <component :is="componenteActivo" v-if="componenteActivo" />
    </section>
  </main>
</template>

<style scoped>
.contenidos-view {
  min-height: 100svh;
  padding: 80px 0 5px;
  background: var(--contenidos-fondo);
}

.contenidos-view__panel {
  margin-top: 0px;
}

@media (max-width: 980px) {
  .contenidos-view {
    padding-top: 72px;
  }
}
</style>
