"use client";

import { getArticleBodyBase64 } from "@/app/actions/actions";
import { IArticle } from "@/types/articles";

export default function ArticleCard({ article }: { article: IArticle }) {
  const handleOpenPdf = async () => {
    if (!article?.id) return;

    try {
      const base64 = await getArticleBodyBase64(article.id);
      if (!base64) {
        alert("Não foi possível obter o PDF.");
        return;
      }

      // cria um blob binário a partir do base64
      const binary = atob(base64);
      const len = binary.length;
      const buffer = new Uint8Array(len);
      for (let i = 0; i < len; i++) buffer[i] = binary.charCodeAt(i);
      const blob = new Blob([buffer], { type: "application/pdf" });

      // cria uma URL temporária pro navegador
      const url = URL.createObjectURL(blob);

      // abre o PDF numa nova aba
      window.open(url, "_blank");
    } catch (error) {
      console.error("Erro ao abrir PDF:", error);
      alert("Não foi possível abrir o PDF.");
    }
  };

  return (
    <div
      onClick={handleOpenPdf}
      className="w-full border border-lightgray rounded-lg p-4 hover:bg-(--background-light-gray) duration-150 cursor-pointer"
    >
      <h1 className="text-(--default-dark) font-semibold">{article?.title}</h1>
      <p className="text-sm text-(--darkgray) text-ellipsis">
        {article?.description}
      </p>
    </div>
  );
}
