import ArticleCard from "@/components/articles/ArticleCard";
import { ArticleService } from "@/lib/article/article.service";

export default async function SentArticlesSection() {
  const articleService = new ArticleService();
  let articles = await articleService.getArticlesPerCongress(3);
  articles = [...articles!, ...articles!, ...articles!]

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
  )
}