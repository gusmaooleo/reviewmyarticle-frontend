import { IArticleRanking } from "@/types/articles";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function RankingArticleCard({
  article,
  pos,
}: {
  article?: IArticleRanking;
  pos: number;
}) {
  const color =
    {
      0: "text-(--primary-light-blue)",
      1: "text-(--default-dark)",
      2: "text-(--lightgray)",
    }[pos] ?? "text-(--lightgray)";

  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-row items-center gap-3">
        <p className={`text-lg font-semibold ${color}`}>{pos + 1}.</p>
        <div>
          <h2 className="text-lg font-medium text-(--default-dark)">
            {article?.title}
          </h2>
          <p className="text-[#737282] font-medium truncate">{article?.finalScore}/5.0</p>
        </div>
      </div>
      <Link href={`/articles/${article?.id}`}>
        <SquareArrowOutUpRight className="text-(--default-dark)" width={20} />
      </Link>
    </div>
  );
}
