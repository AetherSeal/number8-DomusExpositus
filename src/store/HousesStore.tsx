import { create } from "zustand";
import { z } from "zod";

export type THouse = {
  Id: number;
  DateListed: Date;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
};
type TPriceRange = [number, number];

type THouseStore = {
  houses: THouse[];
  loading: boolean;
  bathroomFilter: number;
  bedroomFilter: number;
  parkingFilter: number;
  priceRange: TPriceRange;
  setHouses: () => Promise<void>;
};

const houseSchema = z.object({
  Id: z.number(),
  DateListed: z.date(),
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
export const useHouseStore = create<THouseStore>((set) => ({
  houses: [] as THouse[],
  loading: false,
  bathroomFilter: 0,
  bedroomFilter: 0,
  parkingFilter: 0,
  priceRange: [0, 999999999999],
  // method to filter houses based on the filters
  filterHouses: () => {
    set((state: THouseStore) => {
      return {
        houses: state.houses.filter((house) => {
          return (
            house.Bathrooms >= state.bathroomFilter &&
            house.Bedrooms >= state.bedroomFilter &&
            house.Parking >= state.parkingFilter &&
            house["Sale Price"] >= state.priceRange[0] &&
            house["Sale Price"] <= state.priceRange[1]
          );
        }),
      };
    });
  },
  setHouses: async () => {
    set({ loading: true });
    try {
      const request = await fetch("/api", { mode: "no-cors" });
      const data = await request.json();
      set({ houses: data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
