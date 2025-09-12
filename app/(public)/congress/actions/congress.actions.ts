"use server";

import { CongressService } from "@/lib/services/congress.service";
import type { ICongress } from "@/types/congress";

export type SearchState = { q: string; results: ICongress[] };

export async function searchCongresses(
  _prev: SearchState,
  formData: FormData
): Promise<SearchState> {
  const q = (formData.get("q")?.toString() || "").trim();
  const results = await new CongressService().getCongresses(q);
  return { q, results };
}
