import z from "zod";

export const CardSchema = z.object({
  id: z.number(),
  number: z.string(),
  expired: z.date(),
  cvv: z.number(),
  userId: z.number().optional(),
})

export type ICard = z.infer<typeof CardSchema>;