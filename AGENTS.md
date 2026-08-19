# AGENTS.md

> Nota: `CLAUDE.md` apunta a este archivo. Toda la guía para agentes vive aquí; mantén este documento como fuente única al actualizar contexto del proyecto.

## Panorama rápido
- Este repo es un blog personal en **Astro 7** (migrado desde Nuxt 4 + Nuxt Content 3 — ver `docs-migration/` para el histórico de la migración).
- `src/layouts/Layout.astro` es el shell base: head/meta/favicons/`<ClientRouter />` (view transitions) y las clases de fondo/dark-mode en `<body>`.
- `astro.config.mjs` centraliza integraciones (`@astrojs/vue`, `@astrojs/sitemap`), Tailwind v4 (`@tailwindcss/vite`, CSS-first config vía `src/styles/global.css`) y el highlighting de código (Shiki, temas `github-light`/`github-dark`).
- `src/data/site.ts` concentra SEO/meta globales (`seoData`, `iconsLinks`) y config de sitio derivada de env vars (`PUBLIC_SITE_URL`, `PUBLIC_SITE_NAME`, etc. — ver `.env.example`). `src/utils/seo.ts` construye las meta tags por página.

## Flujo de contenido
- Los posts viven en `src/content/blog/*.md` y usan frontmatter: `title`, `description`, `date`, `year` (opcional), `tags`, `image`, `alt`, `ogImage` (opcional), `author`/`layout` (opcionales, no usados aún en render).
- La colección se define en `src/content.config.ts` como `blog`, vía el loader `glob()` de `astro/loaders`, con esquema `zod`. La mayoría de campos son opcionales con defaults — el contenido real tiene frontmatter incompleto en varios posts.
- El slug/URL de cada post se deriva del nombre de archivo (`src/content/blog/mi-post.md` → `/blog/mi-post`) — mantén los nombres de archivo estables, son URLs indexadas.
- Si añades o cambias campos del frontmatter, actualiza también el esquema en `content.config.ts` y los consumidores (`src/pages/index.astro`, `src/pages/blog/[...slug].astro`, `src/pages/tags/index.astro`, `src/pages/year-archive/index.astro`, `src/pages/search-index.json.ts`).

## Páginas y datos
- `src/pages/index.astro` lista el contenido con `getCollection('blog')` ordenado por fecha y renderiza `<BlogCard />`.
- `src/pages/blog/[...slug].astro` usa `getStaticPaths()` + `render(entry)` para pintar el markdown de cada post.
- `src/pages/tags/index.astro` agrupa posts por tag; `src/pages/year-archive/index.astro` agrupa por año (usa `src/utils/normalizeYear.ts` para tolerar `year` mal formado en el frontmatter).
- `src/pages/search-index.json.ts` sirve un índice JSON estático que `Search.vue` consume por `fetch()` en cliente (no hay acceso a `getCollection()` desde un componente hidratado).

## Convenciones de implementación
- Componente estático → `.astro`. Componente con interactividad real → Vue, montado como isla con una directiva `client:*`. Hoy el único caso es `src/components/Search.vue` (`client:visible` en `Header.astro`) — antes de añadir otro Vue island, confirma que la interactividad lo justifica.
- Reutiliza `src/utils/formatDate.ts` y `src/utils/transformImg.ts` en lugar de reescribir helpers de fecha o Cloudinary. `transformImg()` sustituye el literal `{{trans}}` de cada `image`/`ogImage` del frontmatter — no cambies esa convención sin actualizar todo el contenido.
- Para metadatos de página, pasa `title`/`description`/`ogImage`/`path` a `<Layout>`; `buildMeta()` en `src/utils/seo.ts` genera el resto (OG, Twitter, robots).
- El resaltado de código usa Shiki nativo de Astro (no hay componente tipo `ProseCode`); el botón de copiar y el badge de lenguaje se añaden vía `src/scripts/codeBlocks.ts` (JS plano, no Vue) buscando `pre.astro-code` tras el render.
- Tailwind v4 es el enfoque principal (config CSS-first en `src/styles/global.css`, sin `tailwind.config.js`). El CSS a medida que queda (`src/styles/article.css`) es el que es genuinamente posicional/funcional (overlay de tags, chrome de bloques de código) — no lo conviertas a utilidades sin necesidad.

## Puntos delicados
- El filtro del sitemap en `astro.config.mjs` excluye `/politica-privacidad/*`; `/tags` sí debe aparecer (es una página real, no rutas dinámicas por tag).
- `public/_redirects` (formato Netlify) mantiene viva la URL antigua `/blog/gitflow-apuntes-y-notas-para-control-de-versiones` → `/blog/gitflow`. Solo funciona en Netlify, no en `astro preview` local.
- `PUBLIC_SITE_URL`, `PUBLIC_SITE_NAME`, `PUBLIC_GOOGLE_SITE_VERIFICATION`, `PUBLIC_TWITTER_HANDLE` dependen de variables de entorno (ver `.env.example`); no hardcodees valores de producción.
- Los favicons están reducidos a `public/favicon.ico` a propósito — el set completo (apple-touch/android-chrome) del sitio Nuxt original apuntaba a archivos que nunca existieron. Generar un set real desde un logo fuente sigue pendiente (ver backlog en `docs-migration/`).
- `src/content/blog/git.md` y `gitflow.md` son una reconstrucción deliberada de tres posts solapados que existían en el Nuxt original (`git.md`, `git-y-gitflow.md`, `gitflow-apuntes-y-notas-para-control-de-versiones.md`) — no los vuelvas a fusionar ni a duplicar sin revisar `docs-migration/`.

## Flujo de trabajo local
- Bun es el gestor preferido: usa `bun install` y `bun run dev|build|preview|lint|lintfix` para trabajar día a día.
- También existen `bun run commitlint` y `bun run release` para el flujo de commits/releases.
- Si necesitas una referencia mínima en npm, los scripts equivalentes están en `package.json` (`npm run dev`, `npm run build`, etc.).

## Antes de editar
- Lee `astro.config.mjs`, `src/content.config.ts`, `src/data/site.ts` y `src/pages/index.astro`/`src/pages/blog/[...slug].astro` cuando el cambio afecte contenido, SEO o rutas.
- Revisa un post real de `src/content/blog/*.md` para mantener el frontmatter consistente con el resto del sitio.
