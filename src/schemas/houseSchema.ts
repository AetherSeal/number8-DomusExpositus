import { z } from "zod";

export const houseSchema = z.object({
  Id: z.number(),
  DateListed: z.string(),
  Title: z.string().min(3),
  Description: z.string().min(3),
  "Sale Price": z.number(),
  ThumbnailURL: z.string().url(),
  PictureURL: z.string().url(),
  Location: z.string().min(3),
  Sqft: z.number(),
  Bedrooms: z.number(),
  Bathrooms: z.number(),
  Parking: z.number(),
  YearBuilt: z.number(),
});

export const houseSchemaArray = z.array(houseSchema);

export type THouse = z.infer<typeof houseSchema>;
export type THouses = z.infer<typeof houseSchemaArray>;
