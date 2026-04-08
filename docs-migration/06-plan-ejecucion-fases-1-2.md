# 01 - Plan de ejecucion (Fases 1 y 2)

## Checklist
- [ ] Ejecutar Fase 1: Base tecnica.
- [ ] Ejecutar Fase 2: Contenido.
- [ ] Validar criterios de salida por fase.

## Fase 1 - Base técnica

### 1) Inicializar Astro + Vue + Tailwind
- [X] Crear proyecto Astro base en la rama actual (`migration/astro`) dentro de un nuevo directorio de trabajo (por ejemplo `astro/`) o como reemplazo planificado del root.
- [X] Instalar integraciones necesarias: `@astrojs/vue` y Tailwind para Astro.
- [X] Definir estructura inicial equivalente al proyecto actual: `src/pages`, `src/components`, `src/layouts`, `src/content`, `src/data`.
- [X] Migrar una primera ruta de prueba (`/`) con layout minimo para validar SSR/SSG.
- [X] Confirmar flujo local de desarrollo y build sin errores antes de migrar contenido real.

### 2) Replicar config de entorno (`SITE_URL`, verificacion, etc.)
- Inventariar variables usadas hoy en `nuxt.config.ts` y sus consumidores (por ejemplo `SITE_URL`, `GOOGLE_SITE_VERIFICATION`).
- Definir `.env.example` para Astro con nombres homogeneos y documentacion breve.
- Crear capa de acceso centralizada a variables (por ejemplo `src/data/site.ts`) para no leer `import.meta.env` en multiples sitios.
- Ajustar generacion de URLs absolutas (canonical/`og:url`/sitemap) para depender de `SITE_URL`.
- Probar comportamiento en local sin variables opcionales y validar fallback seguro.

### 3) Crear layout base y metadatos globales
- Crear `src/layouts/BaseLayout.astro` con estructura global (`html`/`head`/`body`, header/footer).
- Migrar metadatos globales desde `data/index.ts` a una fuente central en Astro (por ejemplo `src/data/seo.ts`).
- Implementar props del layout para `title`, `description`, `ogImage`, `canonical`, con defaults globales.
- Anadir tags base de SEO/OG/Twitter y `lang="es"` en el layout.
- Validar que una pagina de prueba hereda metadatos y puede sobreescribirlos.

### Criterio de salida Fase 1
- `dev/build/preview` operativos.
- Layout global funcionando.
- Variables de entorno resueltas y documentadas.
- SEO base inyectado desde una unica fuente.

## Fase 2 - Contenido

### 1) Crear coleccion `blog` en Astro con schema zod
- Crear `src/content/config.ts` con coleccion `blog` y schema zod equivalente a `content.config.ts`.
- Incluir campos de frontmatter usados: `id`, `title`, `description`, `date`, `year`, `tags`, `image`, `alt`, `ogImage`, `published`, `author`, `layout`.
- Definir validaciones minimas (tipos, opcionales, defaults cuando aplique).
- Alinear schema con consumidores esperados en listado y detalle para evitar campos huerfanos.
- Ejecutar validacion de coleccion para detectar markdown invalido cuanto antes.

### 2) Migrar markdown y validar frontmatter obligatorio
- Copiar contenido desde `content/blog/*.md` a `src/content/blog/` preservando slugs.
- Normalizar frontmatter inconsistente (fechas, arrays de tags, campos vacios, nombres de claves).
- Resolver rutas de imagen para que funcionen en Astro (publica o assets, segun estrategia elegida).
- Excluir o marcar entradas no publicables (`published: false`) en consultas.
- Generar reporte corto de posts con errores de schema y corregirlos antes de continuar.

### 3) Implementar listado home y detalle de post
- Home (`src/pages/index.astro`): consultar coleccion `blog`, filtrar publicados y ordenar por fecha descendente.
- Detalle (`src/pages/blog/[...slug].astro` o `[slug].astro`): generar rutas estaticas y render del markdown.
- Anadir metadatos por post (`title`, `description`, `og:image`, `canonical`).
- Reusar componentes Vue solo donde haya interactividad real; contenido estatico preferentemente en Astro.
- Validar enlaces entre listado y detalle, y comportamiento ante slug inexistente (404 correcto).

### Criterio de salida Fase 2
- Todos los posts publicados renderizan.
- Home y detalle funcionales con orden correcto por fecha.
- Frontmatter validado por schema sin errores criticos.
- SEO por post activo y consistente.

