"use server";

import { ArticleService } from "@/lib/article/article.service";
import { getAppState, setAppState } from "@/lib/state";
import { AppState } from "@/types/states";
import { cookies } from "next/headers";

export async function updateAppState(newPartial: Partial<AppState>) {
  const prev = await getAppState<AppState>("app_state");
  const next = { ...prev, ...newPartial };
  await setAppState<AppState>(next, "app_state");
}

export async function createArticleAction(data: any) {
  const token = JSON.parse(
    (await cookies()).get("app_state")!.value
  ) as AppState;
  const prev = await getAppState<AppState>("app_state");
  const articleService = new ArticleService();

  const payloadData = { ...data, congressoId: prev.currentLoggedInCongress };
  return await articleService.createNewArticle(
    JSON.stringify(payloadData),
    token.userToken!
  );
}
