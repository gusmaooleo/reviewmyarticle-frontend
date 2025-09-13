"use client";


import { IconInput } from "@/components/ui/icon-input";
import { SearchButton } from "./SearchButton";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchPanel({
  formAction,
}: {
  formAction: (formData: FormData) => void;
}) {
  const sp = useSearchParams();
  const q = sp.get("q") ?? "";

  return (
    <form className="flex flex-row w-full gap-3" action={formAction}>
      <IconInput
        name="q"
        defaultValue={q}
        icon={<Search className="w-4 text-(--lightgray)" />}
        placeholder="Pesquisar por título"
      />
      <SearchButton />
    </form>
  );
}
