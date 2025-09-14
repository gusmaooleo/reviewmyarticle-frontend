import NoImage from "@/components/shared/NoImage";
import { Button } from "@/components/ui/button";
import { ICongress } from "@/types/congress";
import Image from "next/image";
import Link from "next/link";

export default function Results({ congresses }: { congresses: ICongress[] }) {
  return (
    <div className="flex flex-grow flex-col gap-2 overflow-auto h-[600px]">
      {congresses.length === 0 ? (
        <p className="text-(--lightgray)">Nenhum congresso encontrado.</p>
      ) : (
        congresses.map((c) => (
          <div
            key={c.id}
            className="border rounded-xl p-3 bg-transparent shadow-sm flex flex-row justify-between items-center"
          >
            <div className="flex flex-row items-center gap-3">
              <div className="w-[60px] h-[60px]">
                {c.imageThumbnail ? (
                  <div className="relative aspect-square overflow-hidden rounded-sm">
                    <Image
                      src={c.imageThumbnail}
                      alt={`thumbnail-${c.id}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                ) : (
                  <NoImage />
                )}
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="font-semibold">
                  {c.name}
                </div>
                <div className="text-sm">
                  {c.place} • {c.startDate.toLocaleDateString()}–
                  {c.endDate.toLocaleDateString()}
                </div>
                <div className="text-xs text-(--lightgray)">
                  Submissões até {c.submissionDeadline.toLocaleDateString()} •{" "}
                  reviews/artigo: {c.minReviewsPerArticle}
                </div>
              </div>
            </div>
            <Link href={`/congress/${c.id}`}>
              <Button variant={"outline"}>Ver mais -&gt;</Button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
