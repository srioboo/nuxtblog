# Tailwind CSS migration todo

Tabla de auditoría de los `.vue` del proyecto respecto a la preferencia de Tailwind CSS.

| archivo | estado | prioridad | qué falta |
|---|---|---:|---|
| `pages/index.vue` | casi migrado | media | ya usa mucho Tailwind; solo faltan restos de markup/estilo si decides endurecer la consistencia. |
| `pages/blog/[...slug].vue` | mezcla | alta | aún conserva `style lang="scss"` con tipografía, tablas y code blocks. |
| `pages/politica-privacidad/_slug.vue` | mezcla | media | usa Tailwind en layout, pero mantiene CSS local mínimo para `h2`. |
| `pages/tags/_slug.vue` | mezcla / legacy | alta | mezcla Tailwind con patrones antiguos; conviene reescribir o retirar. |
| `pages/year-archive/[...slug].vue` | mezcla / legacy | alta | conserva mucho SCSS local y lógica heredada. |
| `components/sections/BlogCard.vue` | mezcla | alta | tarjeta con Tailwind en template pero SCSS local para sombras/lazy image. |
| `components/content/ProseCode.vue` | mezcla funcional | alta | CSS local imprescindible para el render de código; migración parcial posible, no total. |
| `components/sections/Header.vue` | migrado a Tailwind | baja | ya está en utilidades Tailwind; no requiere más trabajo inmediato. |
| `components/sections/Footer.vue` | migrado a Tailwind | baja | usa Tailwind en el layout principal; se puede dejar así. |
| `components/sections/Search.vue` | migrado a Tailwind | baja | ya no tiene `<style>` local; quedó en utilidades Tailwind. |
| `components/Logo.vue` | no necesario migrar | baja | SVG simple con animación CSS mínima; no aporta valor forzarlo a Tailwind. |
| `app.vue` | mezcla aceptable | baja | shell global con Tailwind en contenedor y transiciones globales en `<style>`. |
| `layouts/default.vue` | sin deuda | ninguna | solo `<slot />`; no necesita migración. |
| `layouts/error.vue` | no migrado | baja | pantalla de error con CSS clásico; solo migrar si quieres homogeneidad total. |
| `error.vue` | no migrado | baja | vista de error mínima; puede quedarse así. |

## Recomendación de orden
1. `pages/blog/[...slug].vue`
2. `components/sections/BlogCard.vue`
3. `pages/year-archive/[...slug].vue`
4. `pages/tags/_slug.vue`
5. `components/content/ProseCode.vue`
6. `layouts/error.vue` y `error.vue`

## Checklist operativa

### Alta prioridad
- [ ] `pages/blog/[...slug].vue` — eliminar SCSS local y mover la tipografía/tablas/code blocks a Tailwind o a utilidades compartidas.
- [ ] `components/sections/BlogCard.vue` — reescribir la tarjeta y quitar el SCSS de sombras/lazy image.
- [ ] `pages/year-archive/[...slug].vue` — sustituir el SCSS heredado y revisar si la ruta sigue siendo necesaria.
- [ ] `pages/tags/_slug.vue` — reescribir la vista legacy o retirarla si ya no se usa.
- [ ] `components/content/ProseCode.vue` — decidir qué partes del estilo funcional pueden pasar a Tailwind y qué parte debe quedarse como excepción.

### Media prioridad
- [ ] `pages/index.vue` — revisar si queda algún ajuste de consistencia para dejarla 100% en utilidades.
- [ ] `pages/politica-privacidad/_slug.vue` — mover el pequeño resto de tipografía a Tailwind si merece la pena homogeneizar.

### Baja prioridad
- [ ] `layouts/error.vue` — migrar la pantalla de error solo si quieres homogeneidad total.
- [ ] `error.vue` — migrar la vista mínima de error solo si vas a unificar todos los shells.

### No prioritario
- [ ] `components/Logo.vue` — dejar como SVG con CSS mínimo; no aporta valor forzarlo a Tailwind.
- [ ] `app.vue` — tocar solo si quieres eliminar también el CSS global de transiciones.
- [ ] `layouts/default.vue` — no necesita migración.

## No prioritario
- `components/Logo.vue`
- `layouts/default.vue`
- `app.vue` salvo que quieras eliminar por completo el CSS global de transiciones


