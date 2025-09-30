import FileUploadCompact from "@/components/file-upload/compact-upload";
import { InputLabel, TextAreaLabel } from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ArticleSubmissionFormSection() {
  return (
    <div className="w-full h-fit md:h-full">
      <h1 className="font-bold text-xl">Submissão de artigos</h1>

      <form className="flex flex-col py-6 h-full">
        <div className="flex flex-col gap-6 grow">
          <InputLabel labelText="Título do artigo" />
          <InputLabel labelText="Área de conhecimento" />

          <TextAreaLabel labelText="Descrição do artigo" className="min-h-[120px] max-h-[150px]" />

          <Label>Submeter artigo (PDF)</Label>
          <FileUploadCompact className="h-[150px]" />
          <InputLabel labelText="Adicionar contribuinte" />
        </div>
        <div className="flex w-full justify-end mb-1">
          <Button>Submeter artigo</Button>
        </div>
      </form>
    </div>
  )
}