import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SearchButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Buscando..." : "Pesquisar"}
    </Button>
  );
}