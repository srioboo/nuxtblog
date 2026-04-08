# Migración a Astro (manteniendo Vue)

## Objetivo
Migrar el blog de Nuxt 4 + Nuxt Content 3 a Astro, conservando componentes Vue donde aporte valor (islas interactivas).

## Alcance
- Rutas públicas actuales: `/`, `/blog/[...slug]`, tags y archivo anual.
- Contenido Markdown en `content/blog/*.md`.
- SEO base (meta, Open Graph, sitemap, robots).

## Estrategia recomendada
1. Preparar Astro + Vue en paralelo.
2. Migrar primero contenido y rutas de lectura.
3. Migrar componentes y estilos.
4. Ajustar SEO/feeds/sitemap y validar build.

## Estructura de esta carpeta
- `01-inventario-nuxt.md`: qué existe hoy y qué se migra.
- `02-bootstrap-astro-vue.md`: arranque del proyecto Astro.
- `03-contenido-rutas.md`: migración de Nuxt Content a Astro Content Collections.
- `04-componentes-estilos.md`: migración de Vue + Tailwind/SCSS.
- `05-backlog-tareas.md`: tareas ejecutables por fases.

## Criterio de cierre global
- Build y preview sin errores.
- Todas las rutas actuales responden.
- Posts renderizan con metadatos y navegación equivalentes.
- SEO mínimo (title/description/og:url/og:image) activo.

