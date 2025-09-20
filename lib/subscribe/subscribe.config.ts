import { SubscribeForm } from "@/types/subscribe-form";
import { FieldPath, UseFormReturn } from "react-hook-form";


export const stepErrors = {
  1: (methods: UseFormReturn<SubscribeForm>, values: SubscribeForm) => {
    if (values.password !== values.passwordConfirmation) {
      methods.setError("passwordConfirmation", {
        type: "manual",
        message: "As senhas não coincidem",
      });
      methods.setFocus("passwordConfirmation");
      return false;
    }
  },
  2: (methods: UseFormReturn<SubscribeForm>, values: SubscribeForm) => {},
  3: (methods: UseFormReturn<SubscribeForm>, values: SubscribeForm) => {},
} as const;

export const stepRequiredFields: Record<1 | 2 | 3, FieldPath<SubscribeForm>[]> = {
  1: [
    "usernameUser",
    "login",
    "telephoneNumber",
    "password",
    "passwordConfirmation",
  ],
  2: [
    "cardNumber",
    "street",
    "city",
    "state",
    "complement",
    "zipCode",
    "expired",
    "cvv",
  ],
  3: ["isReviewer"],
} as const;