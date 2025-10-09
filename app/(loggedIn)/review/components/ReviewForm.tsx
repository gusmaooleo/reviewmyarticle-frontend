import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/scn-input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ReviewForm({
  onSubmit,
}: {
  onSubmit: (payload: {
    notes: string;
    extra: string;
    score: number | null;
  }) => void;
}) {
  const [notes, setNotes] = useState("");
  const [extra, setExtra] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const handleSubmit = () => onSubmit({ notes, extra, score });

  return (
    <aside className="w-full lg:w-[380px] shrink-0 border-l border-border/50 p-4 space-y-4">
      <h2 className="text-base font-semibold">Formulário de revisão</h2>

      <div className="space-y-2">
        <label className="text-sm font-medium">Notas da revisão</label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Escreva suas observações, pontos fortes, gaps, etc."
          className="min-h-[220px]"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Informações extra*</label>
        <Input
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          placeholder="Ex.: conflito de interesse, plágio, dados faltantes"
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">Pontuação final</label>
        <div className="flex items-center gap-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setScore(n)}
              className={
                "size-9 rounded-full grid place-items-center border transition " +
                (score === n
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-muted/60 border-border text-foreground")
              }
              aria-label={`Escolher nota ${n}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <Button className="w-full" onClick={handleSubmit}>
        Submeter avaliação
      </Button>
    </aside>
  );
}
