import ArticleSubmissionFormSection from "./components/ArticleSubmissionFormSection";
import RankingSection from "./components/RankingSection";
import SentArticlesSection from "./components/SentArticlesSection";

export default function ArticlePage() {
  return (
    <div className="flex flex-col gap-8 md:flex-row h-fit md:h-full overflow-hidden">
      <ArticleSubmissionFormSection />
      <SentArticlesSection />
      <RankingSection />
    </div>
  );
}
