import z from "zod";

export const ReviewSchema = z.object({
  id: z.number(),
  comment: z.string(),
  score: z.number().int().min(1).max(10),
  articleId: z.number(),
  userId: z.number(),
  evaluationId: z.number(),
});

export type IReview = z.infer<typeof ReviewSchema>;
