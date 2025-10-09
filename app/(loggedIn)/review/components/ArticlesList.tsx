import { IArticle } from "@/types/articles";

export default function ArticlesList({
  articles,
  activeId,
  onPick,
}: {
  articles: IArticle[];
  activeId?: number;
  onPick: (id: number) => void;
}) {
  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0 border-r border-border/50 p-4 space-y-3 overflow-y-auto">
      <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        Artigos selecionados
      </h2>
      <div className="space-y-2">
        {articles.map((a) => {
          const active = a.id === activeId;
          return (
            <button
              key={a.id}
              onClick={() => onPick(a.id)}
              className={
                "group w-full text-left px-3 py-2 rounded-lg border transition-colors " +
                (active
                  ? "bg-primary/10 border-primary/40"
                  : "hover:bg-muted/50 border-border")
              }
            >
              <div className="flex items-center gap-2">
                <div
                  className={
                    "size-2 rounded-full " +
                    (active ? "bg-primary" : "bg-muted-foreground/40")
                  }
                />
                <span className="text-sm font-medium line-clamp-1">
                  {a.title}
                </span>
              </div>
              {a.description && (
                <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                  {a.description}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
