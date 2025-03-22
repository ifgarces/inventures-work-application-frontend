import { z } from "zod";

export const ShortenedUrlMappingZodSchema = z.object({
  target_url: z.string().url(), // eslint-disable-line camelcase
  short_code: z.string(), // eslint-disable-line camelcase
  expires_at: z.string().datetime().transform((dateStr) => new Date(dateStr)), // eslint-disable-line camelcase
  created_at: z.string().datetime().transform((dateStr) => new Date(dateStr)) // eslint-disable-line camelcase
});

export type ShortenedUrlMapping = z.infer<typeof ShortenedUrlMappingZodSchema>;
