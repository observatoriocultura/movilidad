# Documentacion del modulo de contenidos

Este documento resume el estado inicial del modulo `src/views/2026/contenidos/`. Su objetivo es servir como guia rapida para desarrolladores y agentes automatizados que deban mantener o ampliar la experiencia interactiva de contenidos del producto **Cultura para la Movilidad**.

## Proposito del modulo

El modulo construye una interfaz web navegable tipo presentacion de diapositivas. Cada pantalla muestra una vista de contenido a la vez y el usuario puede moverse entre secciones mediante una navegacion superior de puntos.

El producto corresponde al frente de contenidos de la SCRD para el convenio con la Secretaria Distrital de Movilidad de Bogota. El tono esperado es de storytelling: pantallas directas, autoexplicativas, visualmente claras, con titulos grandes y mensajes breves.

## Archivos principales

- `ContenidosView.vue`: vista contenedora. Lee el parametro de ruta, valida la vista activa y renderiza el componente correspondiente.
- `constants.js`: listado canonico de vistas disponibles para la navegacion.
- `parts/VistasNav.vue`: navegacion superior con boton de regreso a portada y puntos para saltar entre vistas.
- `vistas/InicioVue.vue`: primera pantalla de preguntas de apertura.
- `vistas/RespuestasView.vue`: pantalla narrativa sobre el enfoque humano, cultural y conductual de la movilidad.
- `vistas/QueBuscamos1View.vue`: archivo creado pero aun sin contenido.
- `ContenidosDocs.md`: esta documentacion.

## Flujo de rutas

La ruta esta definida en `src/router/index.js`:

```js
{
  path: '/contenidos/:key?',
  name: 'contenidos',
  component: ContenidosView,
}
```

El parametro `key` es opcional. Si el usuario entra a `/contenidos`, o si usa una `key` invalida, `ContenidosView.vue` redirige a la primera vista definida en `vistasContenidos`.

La portada enlaza al modulo desde `src/views/2026/PortadaView.vue` con:

```vue
<RouterLink class="report-button" to="/contenidos">Empezar</RouterLink>
```

## Contrato de `constants.js`

`constants.js` exporta `vistasContenidos`, un arreglo de objetos con esta forma:

```js
{
  number: 1015,
  key: 'inicio',
  title: 'Inicio',
  nombre_vista: 'InicioView',
  label: 'Inicio',
}
```

Campos actuales:

- `number`: orden o identificador interno de la vista.
- `key`: identificador usado en la URL y para resolver la vista activa.
- `title`: texto usado como `title` y `aria-label` en la navegacion.
- `nombre_vista`: nombre descriptivo del componente esperado.
- `label`: etiqueta corta disponible para UI futura.

Importante: actualmente `ContenidosView.vue` no carga componentes de forma automatica desde `nombre_vista`. Para que una vista funcione no basta con agregarla a `constants.js`; tambien debe importarse y registrarse en `componentesContenido`.

## Como se resuelve la vista activa

`ContenidosView.vue` hace lo siguiente:

1. Importa `vistasContenidos`.
2. Crea `keysValidas` a partir de los valores `key`.
3. Lee `route.params.key`.
4. Si la `key` existe en `keysValidas`, la usa como `vistaActiva`.
5. Si no existe, usa la primera vista de `vistasContenidos`.
6. Con un `watch` inmediato, reemplaza la URL invalida o vacia por la ruta canonica.
7. Renderiza el componente activo con `<component :is="componenteActivo" />`.

Mapa actual de componentes:

```js
const componentesContenido = {
  inicio: InicioVue,
  respuestas: RespuestasView,
}
```

Por esta razon, la entrada `que-buscamos-1` aparece en la navegacion pero aun no renderiza contenido, porque `QueBuscamos1View.vue` esta vacio y no esta registrado en `componentesContenido`.

## Navegacion

`parts/VistasNav.vue` recibe:

```js
activeKey: String
```

Con esa propiedad marca el punto activo. La navegacion incluye:

- Un `RouterLink` a `/` con icono de casa.
- Un `RouterLink` por cada elemento de `vistasContenidos`.
- Estado activo cuando `vista.key === activeKey`.
- Etiquetas accesibles mediante `aria-label` y `title`.

La navegacion usa clases CSS propias en el componente. El color de acento principal es `#bed000`, alineado con los lineamientos del proyecto.

## Como agregar una nueva vista

1. Crear un componente en `src/views/2026/contenidos/vistas/`, por ejemplo `NuevaVista.vue`.
2. Agregar la entrada correspondiente en `vistasContenidos`:

```js
{
  number: 1030,
  key: 'nueva-vista',
  title: 'Nueva vista',
  nombre_vista: 'NuevaVista',
  label: 'Nueva vista',
}
```

3. Importar el componente en `ContenidosView.vue`:

```js
import NuevaVista from './vistas/NuevaVista.vue'
```

4. Registrarlo en `componentesContenido` usando la misma `key`:

```js
const componentesContenido = {
  inicio: InicioVue,
  respuestas: RespuestasView,
  'nueva-vista': NuevaVista,
}
```

5. Verificar que `/contenidos/nueva-vista` renderice correctamente y que el punto activo cambie en la navegacion.

## Lineamientos de implementacion para nuevas pantallas

- Priorizar Bootstrap 5.3.8 y sus utilidades antes de crear CSS nuevo.
- Usar `#BED000` como color de acento principal en botones, indicadores, estados activos o detalles visuales.
- Mantener cada vista como una diapositiva: una idea central, jerarquia clara y poco texto por bloque.
- Optimizar para laptop de 1366 x 786 px, evitando scroll vertical cuando sea razonable.
- Cuidar el responsive: en movil la vista puede apilar columnas y permitir scroll si el contenido lo necesita.
- Evitar animaciones complejas; si se agregan transiciones, deben ser discretas.
- Mantener componentes simples y con nombres claros.
- No introducir librerias nuevas sin una razon concreta.

## Estado actual del contenido

### `InicioVue.vue`

Pantalla de apertura con dos preguntas grandes:

- Por que las personas cruzan la calle por donde no deben aunque conocen el riesgo.
- Que hace que un motociclista exceda la velocidad aun sabiendo el peligro.

La pantalla usa fondo `#bed000`, dos tarjetas grandes y una disposicion en dos columnas en escritorio. En pantallas menores a `900px`, las tarjetas se apilan.

### `RespuestasView.vue`

Pantalla narrativa sobre la necesidad de entender la movilidad desde factores humanos y culturales. Plantea que los problemas no se resuelven solo con senales, normas o infraestructura, sino tambien comprendiendo creencias, emociones, habitos, narrativas y normas sociales.

La pantalla usa una grilla de tres columnas en escritorio y se apila en movil a partir de `860px`.

### `QueBuscamos1View.vue`

Archivo vacio. La entrada ya existe en `constants.js`, pero falta:

- Escribir el contenido del componente.
- Importarlo en `ContenidosView.vue`.
- Registrarlo en `componentesContenido`.

## Advertencias tecnicas

- Algunos textos aparecen con problemas de codificacion o mojibake. Antes de editar contenido final, conviene normalizar los archivos a UTF-8 y corregir los textos visibles.
- El proyecto tiene Bootstrap instalado, pero las vistas actuales usan bastante CSS scoped personalizado. Para futuras pantallas, conviene acercarse mas a utilidades y componentes Bootstrap cuando sea posible.
- La navegacion muestra puntos sin texto visible. Esto es compacto y funciona como presentacion, pero si el numero de vistas crece mucho puede ser necesario agregar agrupacion, tooltips mas descriptivos o un indice alternativo.
- `nombre_vista` en `constants.js` es informativo por ahora; no existe carga dinamica basada en ese campo.

## Checklist antes de cerrar cambios

- Ejecutar `npm run build`.
- Probar `/contenidos`, `/contenidos/inicio`, `/contenidos/respuestas` y cualquier nueva ruta.
- Revisar consola del navegador.
- Verificar escritorio aproximado `1366 x 786 px`.
- Verificar responsive en ancho movil.
- Confirmar que la vista nueva esta en `constants.js` y en `componentesContenido`.
- Confirmar que los textos estan en UTF-8 y sin mojibake.
- Confirmar que el color `#BED000` se usa de forma coherente.
