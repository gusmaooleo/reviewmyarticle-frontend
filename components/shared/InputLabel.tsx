import { forwardRef } from "react";
import { Input } from "../ui/scn-input";
import { Label } from "../ui/label";
import { PasswordInput } from "../ui/password-input";
import { InputProps } from "@/types/form";


export const InputLabel = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, name, id, placeholder, type, ...rest }, ref) => {
    return (
      <div className="grid w-full items-center gap-3">
        <Label htmlFor={id}>{labelText}</Label>
        {type === "password" ? (
          <PasswordInput
            id={id}
            className="bg-white"
            placeholder={placeholder}
            name={name ?? id}
            ref={ref}
            {...rest}
          />
        ) : (
          <Input
            className="bg-white"
            type={type}
            id={id}
            placeholder={placeholder}
            name={name ?? id}
            ref={ref}
            {...rest}
          />
        )}
      </div>
    );
  }
);
