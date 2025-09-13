import { TranslucentBoxContainer } from "@/components/shared/TranslucentBoxContainer";
import { Label } from "@/components/ui/label";
import { CongressService } from "@/lib/congress/congress.service";

export default async function CongressIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const congress = await new CongressService().getCongressById(parseInt(id));
  return (
    <TranslucentBoxContainer>
      <h1 className="text-xl font-bold color-black">Detalhes do congresso</h1>
      <div>
        <Label htmlFor="title">Título</Label>
        <h1 id="title" className="text-(--default-dark) text-lg font-bold">{congress?.name}</h1>
      </div>
      
      <div>
        <Label htmlFor="desc">Data</Label>
        <p id="desc" className="text-(--default-dark)">de {congress?.startDate.toDateString()} até {congress?.endDate.toDateString()}</p>
      </div>
      
      <div>
        <Label htmlFor="desc">Local</Label>
        <p id="desc" className="text-(--default-dark)">{congress?.place}</p>
      </div>
    </TranslucentBoxContainer>
  );
}
