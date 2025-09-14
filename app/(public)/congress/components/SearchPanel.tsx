"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { IconInput } from "@/components/ui/icon-input";
import { Search } from "lucide-react";
import { SearchButton } from "./SearchButton";

export default function SearchPanel() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const qFromUrl = params.get("q") ?? "";
  const [search, setSearch] = useState(qFromUrl);
  const [_, startTransition] = useTransition();

  const makeHref = () => {
    const sp = new URLSearchParams(params);
    const q = search.trim();

    if (q) {
      sp.set("q", q);
      sp.set("page", "1");
    } else {
      sp.delete("q");
      sp.set("page", "1");
    }

    const href = `${pathname}${sp.size ? `?${sp}` : ""}`;
    startTransition(() => router.replace(href, { scroll: false }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    makeHref();
  };

  return (
    <form className="flex flex-row w-full gap-3" onSubmit={onSubmit}>
      <IconInput
        name="q"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<Search className="w-4 text-(--lightgray)" />}
        placeholder="Pesquisar por título"
      />
      <SearchButton />
    </form>
  );
}
