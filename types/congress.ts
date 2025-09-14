import z from "zod";

const Modalities = z.enum(["PRESENTIAL", "REMOTE", "SEMI-PRESENTIAL"])

export const CongressSchema = z.object({
  id: z.number(),
  imageThumbnail: z.base64().or(z.url()).optional(),
  name: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  place: z.string(),
  description: z.string(),
  descriptionTitle: z.string(),
  modality: Modalities,
  submissionDeadline: z.date(),
  reviewDeadline: z.date(),
  maxReviewsPerArticle: z.number().default(5),
  minReviewsPerArticle: z.number().default(3),
});

export type ICongress = z.infer<typeof CongressSchema>;
export type CongressModalities = z.infer<typeof Modalities>;