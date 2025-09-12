import z from "zod";

export const AcceptedArticleFormats = z.enum(["PDF", "HTML", "MARKDOWN"]);

export const ArticleSchema = z.object({
  id: z.number(),
  description: z.string(),
  body: z.string(),
  format: AcceptedArticleFormats,
  publishedAt: z.date(),
  articlesUsers: z.custom<number[]>().optional(),
  review: z.custom<number[]>().optional(),
});

export type IArticle = z.infer<typeof ArticleSchema>;
