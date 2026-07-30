<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { vistasContenidos } from '../views/2026/contenidos/constants'

const props = defineProps({
  activeKey: {
    type: String,
    default: '',
  },
})

const route = useRoute()
const menuAbierto = ref(false)
const grupoAbierto = ref(null)

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

const abrirGrupo = (key) => {
  grupoAbierto.value = key
}

const cerrarGrupo = () => {
  grupoAbierto.value = null
}

const cerrarGrupoSiSale = (event) => {
  if (event.currentTarget.contains(event.relatedTarget)) return
  cerrarGrupo()
}

const cerrarTodo = () => {
  menuAbierto.value = false
  grupoAbierto.value = null
}

watch(
  () => route.fullPath,
  () => {
    cerrarTodo()
  },
)
</script>

<template>
  <header class="topbar">
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
              {{ vista.title }}
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

.main-menu__group:hover .main-menu__section,
.main-menu__group:focus-within .main-menu__section,
.main-menu__group--active .main-menu__section,
.main-menu__group--open .main-menu__section {
  background: rgba(190, 208, 0, 0.14);
  color: var(--primary);
  transform: translateY(-1px);
}

.main-menu__group:hover .main-menu__section i,
.main-menu__group:focus-within .main-menu__section i,
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

.main-menu__group:hover .main-menu__dropdown,
.main-menu__group:focus-within .main-menu__dropdown,
.main-menu__group--open .main-menu__dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
  visibility: visible;
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

  .main-menu__section {
    padding-inline: 8px;
  }
}

@media (max-width: 760px) {
  .topbar__inner {
    min-height: 64px;
    padding: 10px 16px;
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 8px 10px;
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
    width: 100%;
    max-height: 0;
    grid-column: 1 / -1;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition:
      max-height 220ms ease,
      opacity 160ms ease;
  }

  .navlinks--open {
    max-height: 80vh;
    overflow-y: auto;
    opacity: 1;
    pointer-events: auto;
  }

  .main-menu__group {
    min-width: 0;
  }

  .main-menu__section {
    width: 100%;
    min-height: 42px;
    padding: 10px 12px;
    border: 1px solid rgba(199, 200, 173, 0.6);
    background: rgba(255, 255, 255, 0.48);
    text-align: center;
    white-space: normal;
  }

  .main-menu__dropdown {
    min-width: 0;
    max-height: 0;
    position: static;
    margin-top: 0;
    padding: 0 6px;
    gap: 4px;
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

  .main-menu__group--open .main-menu__dropdown,
  .main-menu__group:focus-within .main-menu__dropdown {
    max-height: 260px;
    margin-top: 6px;
    pointer-events: auto;
  }

  .main-menu__dropdown-link {
    min-height: 36px;
    justify-content: center;
    background: rgba(255, 255, 255, 0.78);
    text-align: center;
    white-space: normal;
  }
}

@media (max-width: 420px) {
  .navlinks {
    grid-template-columns: 1fr;
  }
}
</style>
