import { create } from "zustand";
import { BASE_URL } from "../utils/constants";

type THouseStore = {};
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

const useHouseStore = create((set) => ({
  houses: [] as THouse[],
  setHouses: async () => {
    const request = await fetch(BASE_URL);
    const data = await request.json();
    set({ houses: data });
  },
}));
