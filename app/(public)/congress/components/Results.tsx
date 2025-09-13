import { Button } from "@/components/ui/button";
import { ICongress } from "@/types/congress";
import Link from "next/link";

export default function Results({ congresses }: { congresses: ICongress[] }) {
  return (
    <div className="flex flex-grow flex-col gap-2 overflow-auto">
      {congresses.length === 0 ? (
        <p className="text-(--lightgray)">Nenhum congresso encontrado.</p>
      ) : (
        congresses.map((c) => (
          <div
            key={c.id}
            className="border rounded-xl p-3 bg-transparent shadow-sm flex flex-row justify-between items-center"
          >
            <div className="flex flex-col">
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm">
                {c.place} • {c.startDate.toLocaleDateString()}–
                {c.endDate.toLocaleDateString()}
              </div>
              <div className="text-xs text-(--lightgray)">
                Submissões até {c.submissionDeadline.toLocaleDateString()} •{" "}
                {c.reviewsPerArticle} reviews/artigo
              </div>
            </div>
            <Link href={`/congress/${c.id}`}>
              <Button variant={'outline'}>Ver mais -&gt;</Button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
