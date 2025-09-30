import RankingArticleCard from "@/components/articles/RankingArticleCard";
import { ArticleService } from "@/lib/article/article.service";

export default async function RankingSection() {
  const articleService = new ArticleService();
  let articles = await articleService.getArticlesPerRanking(3);

  
  return (
    <div className="w-full h-[500px] md:h-full">
      <h1 className="font-bold text-xl">Ranking</h1>
      <div className="flex flex-col w-full gap-2 py-6">
        {articles?.map((a, i) => (
          <RankingArticleCard key={i} pos={i} article={a} />
        ))}
      </div>
    </div>
  )
}