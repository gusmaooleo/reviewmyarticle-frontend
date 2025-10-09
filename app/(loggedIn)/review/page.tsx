"use client";

import { useEffect, useMemo, useState } from "react";
import ArticlesList from "./components/ArticlesList";
import ArticleViewer from "./components/ArticleViewer";
import ReviewForm from "./components/ReviewForm";
import { IArticle } from "@/types/articles";
import { getReviews, putReviews } from "./actions/actions";
import { toast } from "sonner";

export default function ArticlesReviewPage() {
  const [articles, setArticle] = useState<IArticle[]>([]);
  const [activeId, setActiveId] = useState<number>(0);

  useEffect(() => {
    const getArticlesToReview = async () => {
      const data = await getReviews(true);
      console.log("RAW DATA:", data);
      if (Array.isArray(data)) {
        setArticle(data);
      } else {
        console.error("getReviews retornou formato inesperado:", data);
      }
    };
    getArticlesToReview();
  }, []);

  useEffect(() => {
    if (articles.length > 0 && activeId === 0) {
      setActiveId(articles[0].id);
    }
  }, [articles]);

  const activeArticle = useMemo(() => {
    return articles.find((a) => a.id === activeId) ?? null;
  }, [articles, activeId]);

  const handleSubmit = async (payload: {
    notes: string;
    extra: string;
    score: number | null;
  }) => {
    if (!activeArticle) return;
    toast.success("Avaliação submetida com sucesso!");
    const response = await putReviews(activeArticle.id, {
      comment: payload.notes,
      score: payload.score,
    });
    console.log(response);
  };

  return (
    <div className="w-full min-h-[calc(100vh-7rem)] rounded-2xl border bg-background shadow-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {articles.length > 0 ? (
          <>
            <ArticlesList
              articles={articles}
              activeId={activeId}
              onPick={setActiveId}
            />
            {activeArticle && <ArticleViewer article={activeArticle} />}
            <ReviewForm onSubmit={handleSubmit} />
          </>
        ) : (
          <div className="w-full flex items-center justify-center p-8">
            <p className="text-muted-foreground">
              Não foram atribuidos artigos para serem revisados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
