import { AppState } from "@/types/states";
import { getAppState } from "./state";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiOptions extends RequestInit {
  token?: string;
}

export async function apiFetch<T>(
  url: string,
  options: ApiOptions = {}
): Promise<T> {
  const storedToken = (await getAppState<AppState>("app_state"))["userToken"];

  if (!storedToken) {
    return { error: "Token não especificado no corpo da requisição" } as unknown as Promise<T>
  }

  const headers = new Headers(options.headers || {});

  if (options.token || storedToken) {
    headers.set("Authorization", `Bearer ${options.token ?? storedToken}`);
  }

  const res = await fetch(url, {
    ...options,
    method: (options.method ?? "GET") as HttpMethod,
    headers,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
