# 05 - Backlog de migracion (tareas)

## Fase 0 - Preparacion
- [X] Crear rama `migration/astro`.
- [X] Definir freeze de contenido (fecha y alcance).
- [X] Capturar baseline: URLs activas + capturas visuales.

## Fase 1 - Base tecnica
- [ ] Inicializar Astro + Vue + Tailwind.
- [ ] Replicar config de entorno (`SITE_URL`, verificacion, etc.).
- [ ] Crear layout base y metadatos globales.

## Fase 2 - Contenido
- [ ] Crear coleccion `blog` en Astro con schema zod.
- [ ] Migrar markdown y validar frontmatter obligatorio.
- [ ] Implementar listado home y detalle de post.

## Fase 3 - Funcionalidad
- [ ] Migrar tags y archivo anual (si activos).
- [ ] Migrar busqueda solo si sigue en uso real.
- [ ] Revisar links internos, imagenes y og:image.

## Fase 4 - Calidad y release
- [ ] Comprobar `dev/build/preview` sin errores.
- [ ] Revisar sitemap y robots en entorno final.
- [ ] Hacer smoke test SEO (title/meta/canonical/OG).
- [ ] Plan de rollback: mantener Nuxt deployable hasta corte.

## Definicion de hecho
- [ ] Paridad funcional en rutas activas.
- [ ] Rendimiento igual o mejor en Home/Post.
- [ ] Cero errores 500/404 no esperados en rutas migradas.

