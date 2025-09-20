import z from "zod";
import { AddressSchema } from "./address";
import { CardSchema } from "./card";
import { IArticle } from "./articles";

const RolesSchema = z.enum(["ROLE_ADMIN", "ROLE_PARTICIPANT", "ROLE_REVIEWER"]);

export const PasswordSchema = z
  .string({ message: "Valor inváldo" })
  .min(8, "A senha deve ter 8 ou mais caracteres.")
  .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
  .regex(/\d/, "A senha deve conter pelo menos um número.")
  .regex(/[^A-Za-z0-9]/, "A senha deve conter pelo menos um caractere especial.");

export const ExtenseUserSchema = z.object({
  id: z.number(),
  usernameUser: z.string({ message: "Escolha um nome para o usuário" }),
  login: z.email({ message: "Endereço de e-mail inválido" }),
  password: z.string({ message: "Digite uma senha válida" }),
  workPlace: z.string(),
  membershipNumber: z.string(),
  isReviewer: z.boolean(),
  address: z.number().or(AddressSchema).optional(),
  profileImage: z.custom<ArrayBuffer>(),
  cardId: z.number().or(CardSchema).optional(),
  congressoId: z.number(),
  role: RolesSchema,
  userArticles: z.custom<number[]>().or(z.custom<IArticle>()).optional(),
});

export const UserSchema = ExtenseUserSchema.pick({
  id: true,
  usernameUser: true,
  login: true,
  workPlace: true,
  membershipNumber: true,
  isReviewer: true,
  profileImage: true,
  congressoId: true,
}).extend({
  address: z.number(),
  cardId: z.number(),
});

export const LightUserSchema = UserSchema.pick({
  id: true,
  usernameUser: true,
  login: true,
  workPlace: true,
  membershipNumber: true,
  isReviewer: true,
  congressoId: true,
});

export const LoginTypeFormSchema = ExtenseUserSchema.pick({
  login: true,
  password: true,
})

export type UserRoles = z.infer<typeof RolesSchema>;
export type IExtenseUser = z.infer<typeof ExtenseUserSchema>;
export type IUser = z.infer<typeof UserSchema>;
export type ILightUser = z.infer<typeof LightUserSchema>;
export type ILoginTypeFormUser = z.infer<typeof LoginTypeFormSchema>;
