import NoImage from "@/components/shared/NoImage";
import { TranslucentBoxContainer } from "@/components/shared/TranslucentBoxContainer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CongressService } from "@/lib/congress/congress.service";
import parseISO8601Date from "@/lib/utils/formatDate";
import formatModality from "@/lib/utils/formatModality";
import Image from "next/image";
import Link from "next/link";

export default async function CongressIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const congress = await new CongressService().getCongressById(parseInt(id));

  if (!congress) {
    return (
      <TranslucentBoxContainer>
        <div className="flex flex-grow items-center justify-center">
          <h1 className="text-xl font-bold color-black">
            Não foi possível encontrar o congresso
          </h1>
        </div>
      </TranslucentBoxContainer>
    );
  }

  return (
    <TranslucentBoxContainer>
      <h1 className="text-xl font-bold color-black">Detalhes do congresso</h1>
      <div className="w-fit">
        <Label htmlFor="title">Título:</Label>
        <h1 id="title" className="text-(--default-dark) text-lg font-bold">
          {congress?.name}
        </h1>
        <div className="text-xs text-(--darkgray)">
          Revisões: max {congress.maxReviewsPerArticle} • min {congress.minReviewsPerArticle}
        </div>
      </div>

      <div className="relative aspect-video w-full max-w-[100%] max-h-[250px] overflow-hidden rounded-sm">
        {congress?.imageThumbnail ? (
          <Image
            src={congress.imageThumbnail}
            alt={`thumbnail-${congress.id}`}
            className="object-cover"
            fill
          />
        ) : <NoImage />}
      </div>

      <div className="w-fit">
        <Label htmlFor="description">Descrição:</Label>
        <div id="description">
          <h2 className="text-lg font-semibold text-(--default-dark)">
            {congress?.descriptionTitle}
          </h2>
          <p className="text-(--default-dark) text-justify">
            {congress?.description}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-between items-start">
        <div className="w-fit">
          <Label htmlFor="modality">Modalidade:</Label>
          <p id="modality" className="text-(--default-dark)">
            {formatModality(congress?.modality)}
          </p>
        </div>

        <div className="w-fit">
          <Label htmlFor="date-range">Data:</Label>
          <p id="date-range" className="text-(--default-dark)">
            De {parseISO8601Date(congress!.startDate)} até <br />
            {parseISO8601Date(congress!.endDate)}
          </p>
        </div>
      </div>

      <div className="w-fit">
        <Label htmlFor="desc">Local:</Label>
        <p id="desc" className="text-(--default-dark)">
          {congress?.place}
        </p>
      </div>

      <div className="flex flex-grow items-end justify-between">
        <Link href={"/congress"}>
          <Button variant={'outline'}>Voltar</Button>
        </Link>
        
        <Link href={"/subscribe"}>
          <Button>Inscrever -&gt;</Button>
        </Link>
      </div>
    </TranslucentBoxContainer>
  );
}
