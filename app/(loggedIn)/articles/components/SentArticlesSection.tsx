import ArticleCard from "@/components/articles/ArticleCard";
import { ArticleService } from "@/lib/article/article.service";
import { getAppState } from "@/lib/state";
import { AppState } from "@/types/states";
import Image from "next/image";

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
      {articles?.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-full">
          <Image src="/empty.svg" alt="empty" height={200} width={200} />
          <h1 className="font-medium text-md text-(--lightgray)">
            Esse congresso não têm artigos submetidos
          </h1>
        </div>
      )}
      <div className="flex flex-col w-full gap-2 py-6">
        {articles?.map((a, i) => (
          <ArticleCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}
