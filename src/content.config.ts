import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0),
    heroImage: z.string().optional(),
  }),
});

const words = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/words" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().url(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { work, words };
