import z from "zod/v4";
import { AddressSchema } from "./address";
import { CardSchema } from "./card";
import { ExtenseUserSchema, PasswordSchema } from "./user";

export const PersonalDataSchema = ExtenseUserSchema.omit({
  id: true,
  membershipNumber: true,
  isReviewer: true,
  address: true,
  role: true,
  cardId: true,
  congressoId: true,
  userArticles: true,
})
  .extend({
    password: PasswordSchema,
    passwordConfirmation: z.string(),
    telephoneNumber: z.string({ message: "Digite o número sem espaços ou hífens." }),
    profilePic: z.base64url().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

export const AddressPaymentSchema = AddressSchema.omit({ id: true })
  .and(
    CardSchema.omit({ id: true, userId: true }).extend({
      expired: z
        .string()
        .regex(/^(?:0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido. Use mm/aa"),
    })
  );

export const SubscribeSchema = PersonalDataSchema.and(AddressPaymentSchema).and(
  z.object({ isReviewer: z.boolean() })
);

export type PersonalData = z.infer<typeof PersonalDataSchema>;
export type AddressPayment = z.infer<typeof AddressPaymentSchema>;
export type SubscribeForm = z.infer<typeof SubscribeSchema>;
