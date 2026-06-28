import { defineCollection, z } from 'astro:content';

// One markdown file per game session. Body = the full write-up.
const sessions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sessionNumber: z.number(),
    date: z.coerce.date(),
    chapter: z.string().optional(),
    blurb: z.string(),                 // one-line teaser for listings
    heroImage: z.string().optional(),  // /images/... shown at top
  }),
});

// One markdown file per quest OR lore entry. Body = the description.
const quests = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    kind: z.enum(['quest', 'lore']).default('quest'),
    status: z.enum(['active', 'completed', 'failed', 'unknown']).default('active'),
    order: z.number().default(0),
  }),
});

// One markdown file per character (player character, ally/NPC, or villain).
const characters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    kind: z.enum(['pc', 'npc', 'villain']),
    race: z.string().optional(),
    role: z.string().optional(),       // class for PCs, title/role for others
    status: z.enum(['alive', 'dead', 'unknown']).default('alive'),
    image: z.string().optional(),      // /images/...
    sharedImageNote: z.string().optional(), // e.g. "Pictured with ..." for group art
    order: z.number().default(0),
  }),
});

// One markdown file per location.
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    status: z.enum(['visited', 'mentioned']).default('visited'),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { sessions, quests, characters, locations };
