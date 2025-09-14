import { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/scn-input";
import { Label } from "../ui/label";
import { PasswordInput } from "../ui/password-input";

export default function InputLabel({
  id,
  type,
  labelText,
  placeholder = "",
}: {
  id: string;
  type: HTMLInputTypeAttribute;
  labelText: string;
  placeholder?: string;
}) {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={id}>{labelText}</Label>
      {type === "password" ? (
        <PasswordInput id={id} className="bg-white" placeholder={placeholder} />
      ) : (
        <Input
          className="bg-white"
          type={type}
          id={id}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
