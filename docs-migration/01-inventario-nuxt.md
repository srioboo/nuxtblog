# 01 - Inventario Nuxt actual

## Mapa rápido
- Shell global: `app.vue`.
- Config principal: `nuxt.config.ts`.
- Contenido: `content/blog/*.md` + esquema en `content.config.ts`.
- Home: `pages/index.vue` (lista posts por fecha desc).
- Post: `pages/blog/[...slug].vue` (render Markdown).
- SEO global: `data/index.ts`.

## Dependencias funcionales a replicar
- `@nuxt/content` -> Astro Content Collections.
- `@nuxtjs/seo`, `@nuxtjs/sitemap`, `@nuxtjs/robots` -> utilidades/integ. Astro equivalentes.
- Tailwind activo y mezcla con SCSS local.

## Tareas
- [ ] Confirmar rutas realmente activas (`tags`, `year-archive`, privacidad).
- [ ] Listar frontmatter real usado en posts (`title`, `date`, `image`, `ogImage`, etc.).
- [ ] Identificar componentes Vue con interactividad real (ej. `Search.vue`).
- [ ] Congelar cambios de contenido durante la migración para evitar drift.

## Riesgos
- Diferencias en slugs/permalinks.
- Campos de frontmatter incompletos tras migrar schema.
- Estilos mezclados (Tailwind + SCSS) con regresiones visuales.

