import z from "zod";

export const AddressSchema = z.object({
  id: z.number(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

export type IAddress = z.infer<typeof AddressSchema>;
