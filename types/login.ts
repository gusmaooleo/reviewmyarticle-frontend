import z from "zod/v4";

export const LoginSchema = z.object({
  login: z.email({ message: "Endereço de e-mail inválido" }),
  password: z
    .string({ message: "Senha inválida" })
    .min(8, "Senha inválida (menor que 8 caracteres)")
    .max(32, "Senha inválida (maior que 32 caracteres)"),
});

export type ILoginForm = z.infer<typeof LoginSchema>;
