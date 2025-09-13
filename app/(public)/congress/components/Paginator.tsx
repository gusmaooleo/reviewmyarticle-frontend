"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
  total: number;
  itemsPerPage: number;
};

export default function Paginator({ total, itemsPerPage }: Props) {
  const qName = "page";
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const currentPage = parseInt(params.get(qName) ?? "1");
  const totalPages = Math.max(1, Math.ceil(total / itemsPerPage));

  const makeHref = useCallback(
    (name: string, page: number) => {
      const routerParams = new URLSearchParams(params.toString());
      if (page) routerParams.set(name, page.toString());
      return routerParams.toString();
    },
    [params]
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              router.push(
                pathname + "?" + makeHref(qName, Math.max(1, currentPage - 1))
              );
            }}
          />
        </PaginationItem>

        {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => {
                  router.push(pathname + "?" + makeHref(qName, page));
                }}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {totalPages > 3 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  router.push(pathname + "?" + makeHref(qName, totalPages));
                }}
                isActive={currentPage === totalPages}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              router.push(
                pathname +
                  "?" +
                  makeHref(qName, Math.min(totalPages, currentPage + 1))
              );
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
