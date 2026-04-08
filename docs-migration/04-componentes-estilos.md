# 04 - Componentes Vue y estilos
## Objetivo
Reutilizar componentes Vue existentes sin bloquear SSR/SSG de Astro.
## Estrategia
- Componentes estaticos: preferir `.astro`.
- Componentes interactivos: mantener en `.vue` con `client:load` o `client:visible`.
- Evitar migrar logica innecesaria a cliente.
## Tareas
- [ ] Migrar `components/sections/BlogCard.vue` (o version Astro si es estatico).
- [ ] Revisar `components/sections/Search.vue`: mantener solo si aporta valor real.
- [ ] Adaptar `components/content/ProseCode.vue` al render de Markdown en Astro.
- [ ] Pasar estilos SCSS pendientes a utilidades Tailwind cuando sea simple.
- [ ] Mantener tokens visuales (colores/espaciado) consistentes con `assets/css/_colors.scss`.
## Criterio de cierre
- [ ] No hay errores de compilacion de estilos.
- [ ] UI principal coincide visualmente con Nuxt en paginas clave.
