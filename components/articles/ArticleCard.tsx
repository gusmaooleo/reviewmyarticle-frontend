import { IArticle } from "@/types/articles";



export default function ArticleCard({ article }: { article?: IArticle }) {
  return (
    <div className="w-full border border border-lightgray rounded-lg p-4 hover:bg-(--background-light-gray) duration-150 cursor-pointer">
      <h1 className="text-(--default-dark) font-semibold">{article?.title}</h1>
      <p className="text-sm text-(--darkgray) text-ellipsis">{article?.description}</p>
    </div>
  )
}