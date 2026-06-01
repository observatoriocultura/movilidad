<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { vistasContenidos } from './constants'
import VistasNav from './parts/VistasNav.vue'
import InicioVue from './vistas/InicioVue.vue'
import RespuestasView from './vistas/RespuestasView.vue'
import PrimerHallazgo from './vistas/PrimerHallazgo.vue'
import SegundoHallazgo from './vistas/SegundoHallazgo.vue'

const componentesContenido = {
  inicio: InicioVue,
  respuestas: RespuestasView,
  primer_hallazgo: PrimerHallazgo,
  segundo_hallazgo: SegundoHallazgo,
}

const route = useRoute()
const router = useRouter()
const vistaPorDefecto = vistasContenidos[0]?.key ?? 'inicio'
const keysValidas = new Set(vistasContenidos.map((vista) => vista.key))

const vistaActiva = computed(() => {
  const key = route.params.key
  const keyNormalizada = Array.isArray(key) ? key[0] : key

  return keysValidas.has(keyNormalizada) ? keyNormalizada : vistaPorDefecto
})

const componenteActivo = computed(() => componentesContenido[vistaActiva.value] ?? null)

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
</script>

<template>
  <main class="contenidos-view">
    <VistasNav :active-key="vistaActiva" />

    <section class="contenidos-view__panel" aria-live="polite">
      <component :is="componenteActivo" v-if="componenteActivo" />
    </section>
  </main>
</template>

<style scoped>
.contenidos-view {
  min-height: 100svh;
  padding: 5px 0px;
  background: #FAFAFA;
}

.contenidos-view__panel {
  margin-top: 0px;
}
</style>
