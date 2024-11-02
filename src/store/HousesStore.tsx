import { create } from "zustand";
import { BASE_URL } from "../utils/constants";

type THouse = {
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
type THouseStore = {
  houses: THouse[];
  loading: boolean;
  setHouses: () => Promise<void>;
};

export const useHouseStore = create<THouseStore>((set) => ({
  houses: [] as THouse[],
  loading: false,
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
