import z from "zod";
import { AddressSchema } from "./address";
import { CardSchema } from "./card";
import { IArticle } from "./articles";

const RolesSchema = z.enum(["ROLE_ADMIN", "ROLE_PARTICIPANT", "ROLE_REVIEWER"]);

export const ExtenseUserSchema = z.object({
  id: z.number(),
  usernameUser: z.string(),
  login: z.email(),
  password: z.string(),
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
