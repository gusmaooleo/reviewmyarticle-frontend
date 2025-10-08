import z from "zod";

export const AcceptedArticleFormats = z.enum(["PDF", "HTML", "MARKDOWN"]);

export const ArticleSchema = z.object({
  id: z.number(),
  description: z.string().optional(),
  body: z.string({ message: "Envie um artigo antes de submeter." }),
  title: z.string().min(6, "O título deve ter ao menos 6 ou mais caracteres.").max(96),
  knowledgeAreas: z.array(z.string()).optional(),
  format: AcceptedArticleFormats,
  publishedAt: z.date(),
  articlesUsers: z.custom<number[]>().optional(),
  review: z.custom<number[]>().optional(),
  congressId: z.number(),
});

export const ArticleFormSchema = ArticleSchema.pick({
  title: true,
  knowledgeAreas: true,
  description: true,
  body: true,
  articlesUsers: true,
  format: true,
});

export const ArticleRankingSchema = z.object({
  id: z.number(),
  url: z.string(),
  congressId: z.number(),
  finalScore: z.number(),
  title: z.string(),
});

export type IArticle = z.infer<typeof ArticleSchema>;
export type IArticleForm = z.infer<typeof ArticleFormSchema>;
export type IArticleRanking = z.infer<typeof ArticleRankingSchema>;
