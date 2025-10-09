import { SearchIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function ArticlesDialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-row gap-2 max-[766px]:max-w-fit max-w-[200px] rounded-full bg-(--default-dark) px-3 py-1 text-white font-medium items-center cursor-pointer">
        <SearchIcon />
        <p className="truncate">Pesquisar artigo</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pesquisar artigos</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
