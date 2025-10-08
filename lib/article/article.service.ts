import { environments } from "@/environments/environments";
import { IArticle, IArticleRanking } from "@/types/articles";
import { apiFetch } from "../api";

export class ArticleService {
  constructor() {}

  async getArticlesPerCongress(congressId: number): Promise<IArticle[] | null> {
    try {
      return []
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }

  async getArticlesPerRanking(
    congressId: number
  ): Promise<IArticleRanking[] | null> {
    try {
      return ((await apiFetch(`${environments.url}/articles/top20/${congressId}`)) as any)["content"]
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }
}
