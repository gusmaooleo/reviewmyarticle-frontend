import { getAppState } from "@/lib/state";
import { AppState } from "@/types/states";
import ArticleSubmissionFormSection from "./components/ArticleSubmissionFormSection";
import RankingSection from "./components/RankingSection";
import SentArticlesSection from "./components/SentArticlesSection";
import { environments } from "@/environments/environments";
import { apiFetch } from "@/lib/api";
import { IUser } from "@/types/user";

export default async function ArticlePage() {
  const user: IUser = await apiFetch(`${environments.url}/users/me`);

  return (
    <div className="flex flex-col gap-8 md:flex-row h-fit md:h-full overflow-hidden">
      <ArticleSubmissionFormSection loggedUserId={user.id} />
      <SentArticlesSection />
      <RankingSection />
    </div>
  );
}
