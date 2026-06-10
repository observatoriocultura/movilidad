# Documentación del módulo de contenidos

Este documento resume el estado actual del módulo `src/views/2026/contenidos/`. Sirve como guía rápida para mantener o ampliar la experiencia interactiva de contenidos del producto **Cultura para la Movilidad**.

## Propósito del módulo

El módulo construye una interfaz web navegable tipo presentación de diapositivas. Cada pantalla muestra una vista de contenido a la vez y el usuario puede moverse entre secciones mediante la navegación superior de puntos o con las flechas del teclado.

El producto corresponde al frente de contenidos de la Secretaría Distrital de Cultura, Recreación y Deporte para el convenio con la Secretaría Distrital de Movilidad de Bogotá. El tono esperado es de storytelling: pantallas directas, autoexplicativas, visualmente claras, con títulos grandes y mensajes breves.

## Archivos principales

- `ContenidosView.vue`: vista contenedora. Lee el parámetro de ruta, valida la vista activa, registra componentes y renderiza la pantalla correspondiente.
- `constants.js`: listado canónico de vistas disponibles para navegación y orden.
- `contenidos.css`: variables de color y capa común de clases reutilizables para las vistas.
- `parts/VistasNav.vue`: navegación superior con botón de regreso a portada y puntos para saltar entre vistas.
- `vistas/`: carpeta de componentes de contenido, cada uno tratado como una diapositiva.
- `ContenidosDocs.md`: esta documentación.

## Flujo de rutas

La ruta está definida en `src/router/index.js`:

```js
{
  path: '/contenidos/:key?',
  name: 'contenidos',
  component: ContenidosView,
}
```

El parámetro `key` es opcional. Si el usuario entra a `/contenidos`, o si usa una `key` inválida, `ContenidosView.vue` redirige a la primera vista definida en `vistasContenidos`.

La vista activa también puede cambiar con el teclado:

- `ArrowRight`: avanza a la siguiente vista navegable.
- `ArrowLeft`: vuelve a la vista navegable anterior.

La navegación por teclado se ignora cuando hay una galería PhotoSwipe abierta o cuando el foco está en un campo editable.

## Contrato de `constants.js`

`constants.js` exporta `vistasContenidos`, un arreglo de objetos con esta forma:

```js
{
  number: 1015,
  key: 'inicio',
  title: 'Inicio',
  nombre_vista: 'InicioView',
  label: 'Inicio',
  display: true,
}
```

Campos actuales:

- `number`: orden o identificador interno de la vista.
- `key`: identificador usado en la URL y en el mapa `componentesContenido`.
- `title`: texto usado como `title` y `aria-label` en la navegación.
- `nombre_vista`: nombre descriptivo del componente esperado.
- `label`: etiqueta corta disponible para UI futura.
- `display`: cuando es `false`, la vista no aparece en la navegación de puntos.

Importante: `nombre_vista` es informativo. `ContenidosView.vue` no carga componentes automáticamente desde ese campo. Para que una vista funcione debe existir en `constants.js`, importarse en `ContenidosView.vue` y registrarse en `componentesContenido`.

## Vistas registradas

Mapa actual de componentes en `ContenidosView.vue`:

```js
const componentesContenido = {
  inicio: InicioVue,
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
```

`que_buscamos_1` existe en `constants.js` con `display: false`, pero actualmente no está registrada en `componentesContenido`.

## Navegación

`parts/VistasNav.vue` recibe:

```js
activeKey: String
```

Con esa propiedad marca el punto activo. La navegación incluye:

- Un `RouterLink` a `/` con icono de casa.
- Un `RouterLink` por cada elemento visible de `vistasContenidos`.
- Estado activo cuando `vista.key === activeKey`.
- Etiquetas accesibles mediante `aria-label` y `title`.

Los colores de navegación usan variables de `contenidos.css`, especialmente `--contenidos-color-principal`, `--contenidos-acento-oscuro` y `--contenidos-acento-texto`.

## Capa común de estilos

`contenidos.css` define la paleta y utilidades visuales compartidas. Las vistas recientes ya usan esta capa para reducir duplicación y mantener coherencia.

Clases principales:

- `contenido-slide`: base de diapositiva con alto, fondo, color y comportamiento responsive.
- `contenido-slide--blue`: variante de fondo con apoyo celeste.
- `contenido-slide--radial`: variante con detalle radial sutil.
- `contenido-panel`: panel/tarjeta común con borde, fondo y sombra.
- `contenido-panel--soft`: variante de panel con fondo más suave.
- `contenido-panel--left`, `contenido-panel--left-sm`: acento lateral.
- `contenido-panel--top`, `contenido-panel--top-sm`: acento superior.
- `contenido-eyebrow`: etiqueta superior en mayúsculas.
- `contenido-title`: título principal de diapositiva o bloque.
- `contenido-heading`: subtítulo destacado.
- `contenido-text`: texto base con tipografía del cuerpo.
- `contenido-icon`: base para iconos circulares.
- `contenido-icon--brand`, `contenido-icon--brand-soft`, `contenido-icon--blue`, `contenido-icon--pink`: variantes cromáticas de iconos.
- `contenido-icon--sm`, `contenido-icon--md`, `contenido-icon--lg`: tamaños de iconos.
- `contenido-number`: número grande decorativo o secuencial.
- `contenido-tag`: chip o etiqueta resaltada.
- `contenido-key-list`: lista compacta de frases clave con check.
- `contenido-icon-list`: lista con iconos de apoyo por ítem.

Cuando una vista requiera layout propio, debe mantener clases scoped semánticas para grillas, filas, imágenes o relaciones específicas, y usar la capa común solo para elementos visuales repetidos.

## Estado actual del contenido

### `InicioVue.vue`

Pantalla de apertura con dos preguntas grandes sobre comportamientos viales de riesgo. Usa fondo de acento y dos tarjetas grandes.

### `RespuestasView.vue`

Pantalla narrativa sobre la necesidad de entender la movilidad desde factores humanos, culturales y conductuales.

### `PrimerHallazgo.vue`, `SegundoHallazgo.vue`, `TercerHallazgo.vue`

Pantallas de hallazgos con composición visual propia y galerías PhotoSwipe para ampliar imágenes del proceso.

### `MotociclistasView.vue`, `MotociclistasViewB.vue`, `MotociclistasImplementaciones.vue`

Bloque de contenidos sobre motociclistas, métricas, estrategias, imágenes y resultados/implementaciones. Algunas vistas usan PhotoSwipe.

### `EmpatiaA.vue`, `EmpatiaB.vue`, `EmpatiaC.vue`

Bloque de contenidos sobre empatía, estrategias e implementaciones. Algunas vistas usan imágenes ampliables con PhotoSwipe.

### `LaboratoriosA.vue`

Introduce los Laboratorios de Transformación Cultural Situada: qué son, quiénes participan, cómo se trabaja y fases del proceso. Mantiene un layout específico, pero usa parcialmente la capa común de paneles e iconos.

### `LaboratoriosB.vue`

Explica por qué los laboratorios son importantes. Organiza tres razones en columnas: personas que dinamizan, comunidades protagonistas y participación innovadora. Usa la capa común de `contenido-slide`, paneles, iconos, número y tags.

### `LaboratoriosC.vue`

Presenta la propuesta para los laboratorios Las Delicias y Minuto de Dios. Usa dos columnas de laboratorios, una propuesta central y paneles de información espejo.

### `EscuelaMultiplicadores.vue`

Pantalla sobre la Escuela de Multiplicadores de Cultura Ciudadana para la Movilidad. Separa en dos columnas qué se priorizó y qué se hizo, con listas iconográficas y frases resaltadas.

### `AprendizajesA.vue`

Pantalla de cierre/reflexión con síntesis de aprendizajes y tres columnas estratégicas: lenguaje común, negociación entre rigor y operación, y continuidad del cambio comportamental.

## Cómo agregar una nueva vista

1. Crear un componente en `src/views/2026/contenidos/vistas/`, por ejemplo `NuevaVista.vue`.
2. Agregar la entrada correspondiente en `vistasContenidos`:

```js
{
  number: 1100,
  key: 'nueva_vista',
  title: 'Nueva vista',
  nombre_vista: 'NuevaVista',
  label: 'Nueva vista',
  display: true,
}
```

3. Importar el componente en `ContenidosView.vue`:

```js
import NuevaVista from './vistas/NuevaVista.vue'
```

4. Registrarlo en `componentesContenido` usando la misma `key`:

```js
const componentesContenido = {
  // ...
  nueva_vista: NuevaVista,
}
```

5. Verificar que `/contenidos/nueva_vista` renderice correctamente y que el punto activo cambie en la navegación.

## Lineamientos de implementación para nuevas pantallas

- Priorizar Bootstrap 5.3.8 y sus utilidades antes de crear CSS nuevo.
- Usar la capa común de `contenidos.css` para paneles, iconos, títulos, tags y listas recurrentes.
- Mantener cada vista como una diapositiva: una idea central, jerarquía clara y poco texto por bloque.
- Optimizar para laptop de `1366 x 786 px`, evitando scroll vertical cuando sea razonable.
- Cuidar responsive: en móvil la vista puede apilar columnas y permitir scroll si el contenido lo necesita.
- Evitar animaciones complejas; si se agregan transiciones, deben ser discretas.
- Mantener componentes simples, con datos estructurados cuando haya listas repetibles.
- No introducir librerías nuevas sin una razón concreta.
- No mover lógica específica de galerías o layouts complejos a CSS global si no se repite claramente.

## Advertencias técnicas

- Algunos archivos históricos pueden mostrar mojibake si se leen con una consola que no use UTF-8. Antes de editar textos visibles, conviene confirmar y normalizar el contenido final.
- `nombre_vista` sigue siendo informativo; no existe carga dinámica basada en ese campo.
- La navegación por puntos es compacta y funciona como presentación, pero si el número de vistas crece mucho puede ser necesario agregar agrupación, tooltips más descriptivos o un índice alternativo.
- Las vistas con PhotoSwipe deben probarse después de cualquier cambio visual, porque dependen de selectores de imagen y del estado `.pswp`.

## Checklist antes de cerrar cambios

- Ejecutar `npm run build`.
- Probar `/contenidos`, `/contenidos/inicio` y cualquier ruta nueva o modificada.
- Probar rutas con galerías si se tocó una vista con PhotoSwipe.
- Revisar consola del navegador.
- Verificar escritorio aproximado `1366 x 786 px`.
- Verificar responsive en ancho móvil.
- Confirmar que la vista nueva está en `constants.js` y en `componentesContenido`.
- Confirmar que `display` está configurado según deba aparecer o no en la navegación.
- Confirmar que los textos visibles están en UTF-8 y sin mojibake.
- Confirmar que la paleta de `contenidos.css` se usa de forma coherente.
