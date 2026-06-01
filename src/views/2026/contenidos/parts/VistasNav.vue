<script setup>
import { computed } from 'vue'
import { vistasContenidos } from '../constants'

defineProps({
  activeKey: {
    type: String,
    required: true,
  },
})

const vistasVisibles = computed(() => vistasContenidos.filter((vista) => vista.display !== false))
</script>

<template>
  <nav class="contenidos-menu" aria-label="Vistas de contenidos">
    <RouterLink class="contenidos-menu__item contenidos-menu__home" to="/" aria-label="Ir a portada">
      <i class="bi bi-house-fill" aria-hidden="true"></i>
    </RouterLink>

    <RouterLink
      v-for="vista in vistasVisibles"
      :key="vista.key"
      class="contenidos-menu__dot"
      :class="{ 'contenidos-menu__dot--active': vista.key === activeKey }"
      :aria-label="vista.title"
      :title="vista.title"
      :to="{ name: 'contenidos', params: { key: vista.key } }"
    ></RouterLink>
  </nav>
</template>

<style scoped>
.contenidos-menu {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  padding: 8px;
  border-radius: 8px;
  /*background: #ffffff;*/
  /*box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);*/
}

.contenidos-menu__item {
  min-height: 44px;
  border: 0;
  padding: 10px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 0 0 auto;
  border-radius: 4px;
  color: #1b1c11;
  background: transparent;
  font-family: var(--body, system-ui, sans-serif);
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.contenidos-menu__item:hover,
.contenidos-menu__item:focus-visible,
.contenidos-menu__item--active {
  background: #bed000;
  color: #4e5600;
  transform: translateY(-1px);
}

.contenidos-menu__item:focus-visible {
  outline: 2px solid #5a6400;
  outline-offset: 2px;
}

.contenidos-menu__dot {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  border: 0;
  border-radius: 2px;
  padding: 0;
  background: #c7c8ad;
  cursor: pointer;
  transition:
    background 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.contenidos-menu__dot:hover,
.contenidos-menu__dot:focus-visible {
  background: #777961;
  transform: scale(1.25);
}

.contenidos-menu__dot--active {
  background: #5a6400;
  box-shadow: 0 0 0 3px rgba(190, 208, 0, 0.35);
}

.contenidos-menu__dot:focus-visible {
  outline: 2px solid #5a6400;
  outline-offset: 3px;
}

.contenidos-menu__home {
  width: 32px;
  min-height: 32px;
  padding-inline: 0;
}

.contenidos-menu__home i {
  font-size: 18px;
  line-height: 1;
}
</style>
