import { InputProps, TextAreaProps } from "@/types/form";
import { forwardRef } from "react";
import { Label } from "../ui/label";
import { PasswordInput } from "../ui/password-input";
import { Input } from "../ui/scn-input";
import { Textarea } from "../ui/textarea";

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

export const TextAreaLabel = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ labelText, name, id, placeholder, ...props }, ref) => {
    return (
      <div className="grid w-full items-center gap-3">
        <Label htmlFor={id}>{labelText}</Label>
        <Textarea
          id={id}
          className="bg-white"
          placeholder={placeholder}
          name={name ?? id}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
