import { z } from "zod";

export const ShortenedUrlMappingZodSchema = z.object({
  target_url: z.string().url(),
  short_code: z.string(),
  expires_at: z.string().datetime().transform((dateStr) => new Date(dateStr)),
  created_at: z.string().datetime().transform((dateStr) => new Date(dateStr))
});

export type ShortenedUrlMapping = z.infer<typeof ShortenedUrlMappingZodSchema>;
