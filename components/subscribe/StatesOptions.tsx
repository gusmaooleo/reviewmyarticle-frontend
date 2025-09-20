import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

export type UFState = { uf: string; name: string; flag_url_rounded: string };

export const StatesOptions = ({
  states,
  name,
  labelText,
  onValueChange,
  value,
}: {
  states: UFState[];
  name: string;
  labelText: string;
  onValueChange: (v: string) => void
  value?: string
}) => {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={name}>{labelText}</Label>
      <Select name={name} onValueChange={(v) => onValueChange(v)} value={value}>
        <SelectTrigger className="bg-white w-full">
          <SelectValue placeholder="Selecione um estado" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px]">
          {states.map((s) => (
            <SelectItem value={s.uf} key={s.uf}>
              <Image
                src={s.flag_url_rounded}
                alt={`flag-${s.uf}`}
                width={20}
                height={10}
              />
              <span>{s.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
