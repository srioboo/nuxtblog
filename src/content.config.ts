import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    year: z.union([z.string(), z.number(), z.coerce.date()]).optional(),
    tags: z.array(z.string()).optional().default([]),
    image: z.string().optional(),
    alt: z.string().optional().default('glacier'),
    ogImage: z.string().optional(),
    author: z.object({ name: z.string() }).optional(),
    layout: z.string().optional(),
  }),
});

export const collections = { blog };
