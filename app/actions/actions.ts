"use server";

import { getAppState, setAppState } from "@/lib/state";
import { AppState } from "@/types/states";

export async function updateAppState(newPartial: Partial<AppState>) {
  const prev = await getAppState<AppState>("app_state");
  const next = { ...prev, ...newPartial };
  await setAppState<AppState>(next, "app_state");
}
