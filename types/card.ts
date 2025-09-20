import z from "zod";

export const CardSchema = z.object({
  id: z.number(),
  cardNumber: z.string(),
  expired: z.date(),
  cvv: z.string(),
  flag: z.string(),
  userId: z.number().optional(),
})

export type ICard = z.infer<typeof CardSchema>;