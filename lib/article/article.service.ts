import { environments } from "@/environments/environments";
import { IArticle, IArticleRanking } from "@/types/articles";
import { apiFetch } from "../api";

export class ArticleService {
  constructor() {}

  async getArticlesPerCongress(congressId: number, title = ""): Promise<IArticle[] | null> {
    try {
      return (
        (await apiFetch<{ content: IArticle[] }>(
          `${environments.url}/articles?title=${title}&congressoId=${congressId}`
        )).content
      )
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }

  async getArticlesPerRanking(
    congressId: number
  ): Promise<IArticleRanking[] | null> {
    try {
      return (
        (await apiFetch(
          `${environments.url}/articles/top20/${congressId}`
        )) as any
      )["content"];
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }

  async createNewArticle(article: any, token: string) {
    try {
      const a = await fetch(`${environments.url}/articles`, {
        method: "POST",
        body: article,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return (await a.json());
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
