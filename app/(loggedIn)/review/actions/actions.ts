"use server";

import { environments } from "@/environments/environments";
import { apiFetch } from "@/lib/api";
import { ArticleService } from "@/lib/article/article.service";
import { ReviewService } from "@/lib/review/review.service";
import { AppState } from "@/types/states";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

const reviewService = new ReviewService();

export async function getReviews(fake: boolean = false) {
  if (fake) {
    const articleService = new ArticleService();
    const token = JSON.parse(
      (await cookies()).get("app_state")!.value
    ) as AppState;
    
    return await articleService.getArticlesPerCongress(
      token.currentLoggedInCongress!
    );
  } else {
    const user: IUser = await apiFetch(`${environments.url}/users/me`);
    return ((await reviewService.getReviewsByUser(user.id!)) as any)["content"];
  }
}
