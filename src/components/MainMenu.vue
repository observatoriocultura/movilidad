<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { vistasContenidos } from '../views/2026/contenidos/constants'

const props = defineProps({
  activeKey: {
    type: String,
    default: '',
  },
})

const route = useRoute()
const menuRef = ref(null)
const menuAbierto = ref(false)
const grupoAbierto = ref(null)

const titulosBotonera = {
  primer_hallazgo: 'Hallazgos en Motociclistas',
  segundo_hallazgo: 'Hallazgos en Empatía',
  tercer_hallazgo: 'Hallazgos en Mal Parqueo',
  motociclistas: 'Contexto de Motociclistas',
  motociclistas_b: 'La Estrategia',
  motociclistas_implementaciones: 'Implementación de la Estrategia',
  empatia_a: 'Contexto de Empatía',
  empatia_b: 'La Estrategia',
  empatia_c: 'Implementación de la Estrategia',
  laboratorios_a: 'Contexto Laboratorios',
  laboratorios_b: 'De la solución en la vía a la conversación en el barrio',
  laboratorios_c: 'Laboratorios Implementados',
  laboratorios_videos: 'Memoria social',
  escuela_multiplicadores: 'Escuela de Multiplicadores',
  aprendizajes_a: 'Aprendizajes',
}

const seccionesBase = [
  {
    key: 'hallazgos',
    label: 'Hallazgos',
    capitulos: ['Hallazgos'],
  },
  {
    key: 'motociclistas',
    label: 'Motociclistas',
    capitulos: ['Motociclistas'],
  },
  {
    key: 'empatia',
    label: 'Empatía',
    capitulos: ['Empatía'],
  },
  {
    key: 'laboratorios',
    label: 'Laboratorios y Escuela',
    capitulos: ['Laboratorios', 'Escuela de Multiplicadores', 'Aprendizajes'],
  },
]

const keyDesdeRuta = computed(() => {
  const key = route.params.key
  return Array.isArray(key) ? key[0] : key
})

const keyActiva = computed(() => props.activeKey || keyDesdeRuta.value || '')

const vistasVisibles = computed(() => vistasContenidos.filter((vista) => vista.display !== false))

const secciones = computed(() =>
  seccionesBase.map((seccion) => {
    const vistas = vistasVisibles.value.filter((vista) => seccion.capitulos.includes(vista.capitulo))

    return {
      ...seccion,
      vistas,
      activa: vistas.some((vista) => vista.key === keyActiva.value),
    }
  }),
)

const alternarMenu = () => {
  menuAbierto.value = !menuAbierto.value
  grupoAbierto.value = null
}

const alternarGrupo = (key) => {
  grupoAbierto.value = grupoAbierto.value === key ? null : key
}

const permiteHover = () => window.matchMedia('(min-width: 992px) and (hover: hover)').matches

const abrirGrupo = (key) => {
  if (!permiteHover()) return

  grupoAbierto.value = key
}

const cerrarGrupo = () => {
  if (!permiteHover()) return

  grupoAbierto.value = null
}

const cerrarGrupoSiSale = (event) => {
  if (!permiteHover()) return
  if (event.currentTarget.contains(event.relatedTarget)) return

  cerrarGrupo()
}

const cerrarTodo = () => {
  menuAbierto.value = false
  grupoAbierto.value = null
}

const cerrarConEscape = (event) => {
  if (event.key !== 'Escape') return

  cerrarTodo()
}

const cerrarAlHacerClickFuera = (event) => {
  if (!menuAbierto.value || menuRef.value?.contains(event.target)) return

  cerrarTodo()
}

const cerrarAlCambiarAEscritorio = () => {
  if (window.innerWidth >= 992) cerrarTodo()
}

watch(
  () => route.fullPath,
  () => {
    cerrarTodo()
  },
)

onMounted(() => {
  document.addEventListener('pointerdown', cerrarAlHacerClickFuera)
  document.addEventListener('keydown', cerrarConEscape)
  window.addEventListener('resize', cerrarAlCambiarAEscritorio)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', cerrarAlHacerClickFuera)
  document.removeEventListener('keydown', cerrarConEscape)
  window.removeEventListener('resize', cerrarAlCambiarAEscritorio)
})
</script>

<template>
  <header ref="menuRef" class="topbar">
    <nav class="topbar__inner main-menu" aria-label="Navegacion principal">
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuAbierto"
        aria-controls="main-menu-links"
        :aria-label="menuAbierto ? 'Cerrar menu principal' : 'Abrir menu principal'"
        @click="alternarMenu"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          {{ menuAbierto ? 'close' : 'menu' }}
        </span>
      </button>

      <span class="main-menu__mobile-title">Menú de contenidos</span>

      <RouterLink class="main-menu__home" to="/" aria-label="Ir a portada" @click="cerrarTodo">
        <i class="bi bi-house-fill" aria-hidden="true"></i>
      </RouterLink>

      <div
        id="main-menu-links"
        class="navlinks main-menu__links"
        :class="{ 'navlinks--open': menuAbierto }"
        aria-label="Secciones principales"
      >
        <div
          v-for="seccion in secciones"
          :key="seccion.key"
          class="main-menu__group"
          :class="{
            'main-menu__group--open': grupoAbierto === seccion.key,
            'main-menu__group--active': seccion.activa,
          }"
          @mouseenter="abrirGrupo(seccion.key)"
          @mouseleave="cerrarGrupo"
          @focusout="cerrarGrupoSiSale"
        >
          <button
            class="main-menu__section"
            type="button"
            :aria-expanded="grupoAbierto === seccion.key"
            :aria-controls="`main-menu-${seccion.key}`"
            @click="alternarGrupo(seccion.key)"
          >
            {{ seccion.label }}
            <i class="bi bi-chevron-down" aria-hidden="true"></i>
          </button>

          <div
            :id="`main-menu-${seccion.key}`"
            class="main-menu__dropdown"
            :aria-label="`Vistas de ${seccion.label}`"
          >
            <RouterLink
              v-for="vista in seccion.vistas"
              :key="vista.key"
              class="main-menu__dropdown-link"
              :class="{ 'main-menu__dropdown-link--active': vista.key === keyActiva }"
              :to="{ name: 'contenidos', params: { key: vista.key } }"
              @click="cerrarTodo"
            >
              {{ titulosBotonera[vista.key] || vista.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.main-menu {
  position: relative;
}

.menu-toggle {
  display: none;
}

.main-menu__mobile-title {
  display: none;
}

.main-menu__home {
  width: 40px;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 4px;
  color: var(--primary);
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.main-menu__home:hover,
.main-menu__home:focus-visible {
  background: rgba(190, 208, 0, 0.14);
  color: var(--primary);
  transform: translateY(-1px);
}

.main-menu__home:focus-visible,
.main-menu__section:focus-visible,
.main-menu__dropdown-link:focus-visible {
  outline: 2px solid var(--primary-bright);
  outline-offset: 2px;
}

.main-menu__links {
  overflow: visible;
}

.main-menu__group {
  position: relative;
}

.main-menu__section {
  min-height: 40px;
  border: 0;
  border-radius: 4px;
  padding: 10px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  cursor: pointer;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.main-menu__section i {
  font-size: 10px;
  transition: transform 180ms ease;
}

.main-menu__group--active .main-menu__section,
.main-menu__group--open .main-menu__section {
  background: rgba(190, 208, 0, 0.14);
  color: var(--primary);
  transform: translateY(-1px);
}

.main-menu__group--open .main-menu__section i {
  transform: rotate(180deg);
}

.main-menu__dropdown {
  min-width: 240px;
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 30;
  padding: 8px;
  display: grid;
  gap: 4px;
  border: 1px solid rgba(199, 200, 173, 0.65);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 14px 34px rgba(27, 28, 17, 0.12);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -4px);
  visibility: hidden;
  transition:
    opacity 160ms ease,
    transform 160ms ease,
    visibility 160ms ease;
}

.main-menu__dropdown::before {
  position: absolute;
  right: 0;
  bottom: 100%;
  left: 0;
  height: 8px;
  content: '';
}

.main-menu__group--open .main-menu__dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
  visibility: visible;
}

@media (min-width: 992px) {
  .main-menu__group:hover .main-menu__section,
  .main-menu__group:focus-within .main-menu__section {
    background: rgba(190, 208, 0, 0.14);
    color: var(--primary);
    transform: translateY(-1px);
  }

  .main-menu__group:hover .main-menu__section i,
  .main-menu__group:focus-within .main-menu__section i {
    transform: rotate(180deg);
  }

  .main-menu__group:hover .main-menu__dropdown,
  .main-menu__group:focus-within .main-menu__dropdown {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, 0);
    visibility: visible;
  }
}

.main-menu__dropdown-link {
  min-height: 38px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: var(--text-muted);
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: 0;
  text-align: left;
  text-transform: none;
  white-space: nowrap;
}

.main-menu__dropdown-link:hover,
.main-menu__dropdown-link:focus-visible,
.main-menu__dropdown-link--active {
  background: var(--primary-bright);
  color: #4e5600;
  transform: none;
}

@media (max-width: 1120px) {
  .topbar__inner {
    gap: 12px;
  }

  .navlinks {
    gap: 6px;
    font-size: 11px;
  }

  .main-menu__group {
    position: static;
  }

  .main-menu__section {
    padding-inline: 8px;
  }

  .main-menu__dropdown {
    width: min(320px, calc(100vw - 32px));
    left: 50%;
  }

  .main-menu__dropdown-link {
    justify-content: center;
    text-align: center;
    white-space: normal;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 991.98px) {
  .topbar__inner {
    min-height: 64px;
    padding: 10px 16px;
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr) 44px;
    gap: 10px;
  }

  .menu-toggle {
    width: 44px;
    height: 44px;
    padding: 0;
    display: inline-grid;
    place-items: center;
    border: 1px solid rgba(90, 100, 0, 0.18);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.64);
    color: var(--primary);
    cursor: pointer;
  }

  .main-menu__mobile-title {
    min-width: 0;
    display: block;
    color: var(--primary);
    font-family: var(--heading);
    font-size: 13px;
    line-height: 18px;
    font-weight: 700;
    text-align: center;
  }

  .menu-toggle:focus-visible {
    outline: 2px solid var(--primary-bright);
    outline-offset: 2px;
  }

  .menu-toggle .material-symbols-outlined {
    font-size: 28px;
    line-height: 1;
  }

  .main-menu__home {
    width: 44px;
    min-height: 44px;
    border: 1px solid rgba(90, 100, 0, 0.18);
    background: rgba(255, 255, 255, 0.64);
  }

  .navlinks {
    width: auto;
    max-height: calc(100svh - 64px);
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 40;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 14px 16px 18px;
    border-top: 1px solid rgba(199, 200, 173, 0.45);
    border-bottom: 1px solid rgba(199, 200, 173, 0.7);
    background: rgba(251, 250, 231, 0.98);
    box-shadow: 0 14px 28px rgba(27, 28, 17, 0.14);
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    visibility: hidden;
    transition:
      opacity 160ms ease,
      transform 180ms ease,
      visibility 180ms ease;
  }

  .navlinks--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  }

  .main-menu__group {
    min-width: 0;
    width: 100%;
    position: static;
  }

  .main-menu__section {
    width: 100%;
    min-height: 46px;
    padding: 11px 16px;
    border: 1px solid rgba(199, 200, 173, 0.6);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    white-space: normal;
  }

  .main-menu__group--open .main-menu__section {
    border-color: rgba(90, 100, 0, 0.28);
    background: rgba(190, 208, 0, 0.18);
  }

  .main-menu__dropdown {
    width: 100%;
    min-width: 0;
    max-height: 0;
    position: static;
    margin-top: 0;
    left: auto;
    padding: 0 8px;
    gap: 6px;
    border: 0;
    background: transparent;
    box-shadow: none;
    opacity: 1;
    overflow: hidden;
    pointer-events: none;
    transform: none;
    visibility: visible;
    transition:
      max-height 180ms ease,
      margin-top 180ms ease;
  }

  .main-menu__dropdown::before {
    display: none;
  }

  .main-menu__group--open .main-menu__dropdown {
    max-height: 560px;
    margin-top: 8px;
    pointer-events: auto;
    transform: none;
  }

  .main-menu__dropdown-link {
    width: 100%;
    min-width: 0;
    min-height: 42px;
    padding: 10px 14px;
    justify-content: center;
    border: 1px solid rgba(199, 200, 173, 0.45);
    border-radius: 7px;
    background: #fff;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    white-space: normal;
    overflow-wrap: break-word;
    word-break: normal;
  }

  .main-menu__dropdown-link:hover,
  .main-menu__dropdown-link:focus-visible,
  .main-menu__dropdown-link--active {
    background: var(--primary-bright);
    color: #4e5600;
  }
}

@media (max-width: 359.98px) {
  .topbar__inner {
    padding-inline: 10px;
    grid-template-columns: 42px minmax(0, 1fr) 42px;
    gap: 6px;
  }

  .menu-toggle,
  .main-menu__home {
    width: 42px;
  }

  .navlinks {
    padding-inline: 10px;
  }
}
</style>
