"use client";

import { forwardRef, useEffect } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";
import { Input } from "../ui/scn-input";
import { Label } from "../ui/label";
import { InputProps } from "@/types/form";
import { composeRefs } from "@/lib/subscribe/subscribe.helpers";
import { useFormContext } from "react-hook-form";
import { SubscribeForm } from "@/types/subscribe-form";

const cardImages = images as unknown as CardImages;
export const CreditCardInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      placeholder = "xxxx-xxxx-xxxx-xxxx",
      labelText,
      onChange,
      onBlur,
      ...rest
    },
    rhfRef
  ) => {
    const { meta, getCardNumberProps, getCardImageProps } = usePaymentInputs();
    const { setValue } = useFormContext<SubscribeForm>();

    useEffect(() => {
      setValue("flag", meta.cardType?.type ?? "", {
        shouldValidate: false,
        shouldDirty: true,
      });
    }, [meta.cardType?.type, setValue]);

    const numberProps = getCardNumberProps({
      onChange,
      onBlur,
    }) as React.InputHTMLAttributes<HTMLInputElement> & {
      ref?: React.Ref<HTMLInputElement>;
    };

    const libRef = (numberProps as any).ref;

    return (
      <div className="grid w-full items-center gap-3">
        <Label htmlFor={id ?? name}>{labelText}</Label>

        <div className="relative">
          <svg
            className="absolute right-3 top-3"
            {...getCardImageProps({ images: cardImages })}
          />

          <Input
            {...numberProps}
            name={name}
            id={id ?? name}
            placeholder={placeholder}
            ref={composeRefs(rhfRef, libRef)}
            className="bg-white"
            {...rest}
          />
        </div>
      </div>
    );
  }
);
CreditCardInput.displayName = "CreditCardInput";
