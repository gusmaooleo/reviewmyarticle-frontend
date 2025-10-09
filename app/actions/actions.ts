"use server";

import { environments } from "@/environments/environments";
import { apiFetch } from "@/lib/api";
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
  const articleService = new ArticleService();

  const payloadData = { ...data, congressoId: token.currentLoggedInCongress };
  return await articleService.createNewArticle(
    JSON.stringify(payloadData),
    token.userToken!
  );
}

export async function getArticleBodyBase64(articleId: number): Promise<string | null> {
  try {
    const response = await apiFetch(`${environments.url}/articles/${articleId}/body`);

    const base64 = await (response as any).body;
    return base64;
  } catch (error) {
    console.error("Erro em getArticleBodyBase64:", error);
    return null;
  }
}


export async function clearAppState() {
  const cookieStore = await cookies();
  cookieStore.set("app_state", "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
