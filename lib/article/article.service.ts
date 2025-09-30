import { IArticle, IArticleRanking } from "@/types/articles";
import { FakeArticleRankings, FakeArticles } from "./fakeArticles";



export class ArticleService {
  constructor() {}


  async getArticlesPerCongress(congressId: number): Promise<IArticle[] | null> {
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      return FakeArticles.filter((a) => a.congressId === congressId);
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }
  
  async getArticlesPerRanking(congressId: number): Promise<IArticleRanking[] | null> {
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      return FakeArticleRankings.filter((a) => a.congressId === congressId).sort((a, b) => b.finalScore - a.finalScore);
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }
}