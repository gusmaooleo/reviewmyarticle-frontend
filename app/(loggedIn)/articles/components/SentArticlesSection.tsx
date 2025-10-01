import ArticleCard from "@/components/articles/ArticleCard";
import { ArticleService } from "@/lib/article/article.service";
import { getAppState } from "@/lib/state";
import { AppState } from "@/types/states";

export default async function SentArticlesSection() {
  const articleService = new ArticleService();
  const appState = await getAppState<AppState>("app_state");  
  let articles: any[] | null = [];
  
  if (appState.currentLoggedInCongress) {
    articles = await articleService.getArticlesPerCongress(
      appState.currentLoggedInCongress
    );
  }

  return (
    <div className="w-full h-[500px] md:h-[800px]">
      <h1 className="font-bold text-xl">Artigos enviados</h1>
      <div className="flex h-full py-6">
        <div className="flex flex-col gap-2 overflow-auto w-full pr-2">
          {articles?.map((a, i) => (
            <ArticleCard key={i} article={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
