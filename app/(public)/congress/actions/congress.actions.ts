"use server";

import type { ICongress } from "@/types/congress";
import { redirect } from "next/navigation";

export type SearchState = { q: string; results: ICongress[] };

export async function searchCongresses(
  formData: FormData
): Promise<void> {
  const q = (formData.get("q")?.toString() || "").trim();
  const qs = q ? `?q=${encodeURIComponent(q)}` : "";
  redirect(`/congress${qs}`);
}