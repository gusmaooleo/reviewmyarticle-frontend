import "server-only";
import { cookies } from "next/headers";

type COOKIE_NAME = "app_state"; // | ...other types;

export async function getAppState<T>(COOKIE_NAME: COOKIE_NAME): Promise<T> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  return raw ? JSON.parse(raw) : ({} as T);
}

export async function setAppState<T>(newState: T, COOKIE_NAME: COOKIE_NAME) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(newState), {
    httpOnly: true,
    // secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
