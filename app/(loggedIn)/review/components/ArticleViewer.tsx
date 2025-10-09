import { Badge } from "@/components/ui/badge";
import { IArticle } from "@/types/articles";

export default function ArticleViewer({ article }: { article: IArticle & { authors?: string[] } }) {
  return (
    <section className="flex-1 min-w-0 p-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <header className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight leading-snug">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {(article.authors ?? []).map((name) => (
              <Badge key={name} variant="secondary" className="text-xs">
                {name}
              </Badge>
            ))}
          </div>
        </header>

        {article.description && (
          <p className="text-sm text-muted-foreground max-w-prose">
            {article.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {(article.knowledgeArea ?? []).map((k) => (
            <Badge key={k} variant="outline" className="text-xs">
              {k}
            </Badge>
          ))}
        </div>

        <div className="border rounded-xl bg-muted/20 h-[62vh] overflow-hidden">
          {article.body ? (
            <iframe
              src={article.body}
              title={article.title}
              className="w-full h-full"
            />
          ) : (
            <div className="h-full grid place-items-center text-muted-foreground">
              <span>Visualizador PDF</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
