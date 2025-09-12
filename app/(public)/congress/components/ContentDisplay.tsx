"use client";

import { ICongress } from "@/types/congress";
import Results from "./Results";
import SearchPanel from "./SearchPanel";
import { useActionState, useEffect } from "react";
import {
  searchCongresses,
  type SearchState,
} from "../actions/congress.actions";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ContentDisplay({
  initialQ,
  initialResults,
}: {
  initialQ: string;
  initialResults: ICongress[];
}) {
  const [state, formAction] = useActionState<SearchState, FormData>(
    searchCongresses,
    { q: initialQ, results: initialResults }
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentQ = params.get("q") ?? "";
    if (state.q !== currentQ) {
      if (state.q) params.set("q", state.q);
      else params.delete("q");
      const next = `${window.location.pathname}${
        params.toString() ? `?${params.toString()}` : ""
      }`;
      window.history.replaceState(null, "", next);
    }
  }, [state.q]);

  return (
    <>
      <h1 className="text-xl font-bold color-black">Congressos</h1>
      <SearchPanel formAction={formAction} />
      <Results congresses={state.results} />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
