# 03 - Contenido y rutas

## Objetivo
Migrar consultas de Nuxt Content (`queryCollection`) a Astro Content Collections.

## Mapeo clave
- Nuxt: `queryCollection('content').order('date','DESC').all()`
- Astro: `getCollection('blog')` + sort por fecha.

## Tareas
- [ ] Crear `src/content/config.ts` con schema (zod) equivalente a `content.config.ts`.
- [ ] Copiar markdown a `src/content/blog/` y normalizar frontmatter.
- [ ] Implementar home (`src/pages/index.astro`) listando posts por fecha desc.
- [ ] Implementar post dinámico (`src/pages/blog/[...slug].astro` o `[slug].astro`).
- [ ] Migrar páginas de tags y archivo anual si siguen activas.

## SEO por ruta
- [ ] Definir `title`, `description`, `og:url`, `og:image` por post.
- [ ] Respetar canonical con el dominio configurado por entorno.

## Validación mínima
- [ ] Los slugs antiguos resuelven.
- [ ] No hay posts huérfanos ni 404 inesperados.

