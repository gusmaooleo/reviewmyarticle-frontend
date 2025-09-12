import z from "zod";

export const CongressSchema = z.object({
  id: z.number(),
  name: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  place: z.string(),
  submissionDeadline: z.date(),
  reviewsPerArticle: z.number(),
});

export type ICongress = z.infer<typeof CongressSchema>;
