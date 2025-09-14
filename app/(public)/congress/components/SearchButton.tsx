"use client"

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SearchButton({ ...props }: React.ComponentProps<"button">) {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending ? "Buscando..." : "Pesquisar"}
    </Button>
  );
}