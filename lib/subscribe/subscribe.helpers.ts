import { SubscribeForm } from "@/types/subscribe-form";
import { UseFormReturn } from "react-hook-form";
import { stepErrors, stepRequiredFields,  } from "./subscribe.config";

export const isEmpty = (v: unknown) =>
  v == null ||
  (typeof v === "string" && v.trim() === "") ||
  (Array.isArray(v) && v.length === 0);

export async function validateStep(
  step: 1 | 2 | 3,
  methods: UseFormReturn<SubscribeForm>
) {
  const fields = stepRequiredFields[step];
  const values = methods.getValues();
  const keys = Object.values(fields) as Array<keyof typeof values>;

  for (const f of keys) {
    const val = values[f];
    if (isEmpty(val)) {
      methods.setError(f, { type: "required", message: "Obrigatório" });
      methods.setFocus(f);
      return false;
    }
  }

  stepErrors[step](methods, values);

  if (step === 1 && values.password !== values.passwordConfirmation) {
    methods.setError("passwordConfirmation", {
      type: "manual",
      message: "Senhas não conferem",
    });
    methods.setFocus("passwordConfirmation");
    return false;
  }

  return methods.trigger(fields, { shouldFocus: true });
}

export function composeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (el: T) => {
    refs.forEach((r) => {
      if (!r) return;
      if (typeof r === "function") r(el);
      else (r as any).current = el;
    });
  };
}