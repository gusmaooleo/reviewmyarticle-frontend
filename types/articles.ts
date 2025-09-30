import z from "zod";

export const AcceptedArticleFormats = z.enum(["PDF", "HTML", "MARKDOWN"]);

export const ArticleSchema = z.object({
  id: z.number(),
  description: z.string(),
  body: z.string(),
  title: z.string(),
  knowledgeAreas: z.array(z.string()).optional(),
  format: AcceptedArticleFormats,
  publishedAt: z.date(),
  articlesUsers: z.custom<number[]>().optional(),
  review: z.custom<number[]>().optional(),
  congressId: z.number(),
});

export const ArticleRankingSchema = z.object({
  id: z.number(),
  url: z.string(),
  congressId: z.number(),
  finalScore: z.number(),
  title: z.string(),
});

export type IArticle = z.infer<typeof ArticleSchema>;
export type IArticleRanking = z.infer<typeof ArticleRankingSchema>;
