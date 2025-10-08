"use client";

import FileUploadCompact from "@/components/file-upload/compact-upload";
import { InputLabel, TextAreaLabel } from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArticleFormSchema, IArticleForm } from "@/types/articles";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { FileWithPreview } from "@/hooks/use-file-upload";
import { X } from "lucide-react";

export default function ArticleSubmissionFormSection({ loggedUserId }: { loggedUserId?: number }) {
  const methods = useForm<IArticleForm>({
    resolver: zodResolver(ArticleFormSchema),
    mode: "onTouched",
    defaultValues: {
      articlesUsers: [],
      format: "PDF",
    },
  });

  const {
    handleSubmit,
    setValue,
    register,
    getValues,
    formState: { errors },
  } = methods;

  const [fileName, setFileName] = useState<string | null>(null);
  const [knowledgeInput, setKnowledgeInput] = useState("");
  const [knowledgeAreas, setKnowledgeAreas] = useState<string[]>([]);

  const handleFileChange = async (file: FileWithPreview[]) => {
    const selectedFile = file[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setValue("body", base64);
      setFileName(selectedFile.file.name);
    };
    reader.readAsDataURL(selectedFile.file as Blob);
  };

  const handleKnowledgeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = knowledgeInput.trim();

      if (value && !knowledgeAreas.includes(value)) {
        const updated = [...knowledgeAreas, value];
        setKnowledgeAreas(updated);
        setValue("knowledgeAreas", updated);
        setKnowledgeInput("");
      }
    }
  };

  const removeKnowledgeArea = (area: string) => {
    const updated = knowledgeAreas.filter((a) => a !== area);
    setKnowledgeAreas(updated);
    setValue("knowledgeAreas", updated);
  };

  const submitForm = methods.handleSubmit(
    (data) => {
      data.articlesUsers?.push(loggedUserId!); 
      console.log("🧾 Dados do artigo:", data);
    },
    (errors) => {
      // console.error(errors);
    }
  );

  return (
    <div className="w-full h-fit md:h-full">
      <h1 className="font-bold text-xl">Submissão de artigos</h1>

      <FormProvider {...methods}>
        <form onSubmit={submitForm} className="flex flex-col py-6 h-full">
          <div className="flex flex-col gap-6 grow pb-4">
            <div className="flex flex-col gap-6 grow pb-4">
              <InputLabel
                labelText="Título do artigo"
                {...register("title")}
                error={errors.title?.message}
              />

              <div>
                <InputLabel
                  labelText="Área de conhecimento"
                  value={knowledgeInput}
                  onChange={(e) => setKnowledgeInput(e.target.value)}
                  onKeyDown={handleKnowledgeKeyDown}
                  placeholder="Digite uma área e pressione Enter"
                  error={errors.knowledgeAreas?.message}
                />

                <div className="flex flex-wrap gap-2 mt-2">
                  {knowledgeAreas.map((area) => (
                    <span
                      key={area}
                      className="flex items-center gap-1 bg-muted text-foreground px-2 py-1 rounded-full text-sm"
                    >
                      {area}
                      <button
                        type="button"
                        onClick={() => removeKnowledgeArea(area)}
                        className="text-muted-foreground hover:text-destructive cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <TextAreaLabel
                labelText="Descrição do artigo"
                className="min-h-[120px] max-h-[150px]"
                {...register("description")}
                error={errors.description?.message}
              />

              <Label>Submeter artigo (PDF)</Label>
              <FileUploadCompact
                className="h-[150px]"
                onFilesChange={handleFileChange}
              />
              {errors.body && (
                <p className="text-sm text-destructive">
                  {errors.body.message}
                </p>
              )}

              <InputLabel
                labelText="Adicionar contribuinte"
                {...register("articlesUsers")}
                error={errors.articlesUsers?.message}
              />
            </div>

            <div className="flex w-full justify-end mb-1">
              <Button type="submit">Submeter artigo</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
