import { create } from "zustand";
import { houseSchemaArray, THouse, THouses } from "../schemas/houseSchema";
import { createJSONStorage, persist } from "zustand/middleware";

type TPriceRange = [number, number];
type TStatus = "grid" | "details";

type THouseStore = {
  houses: THouses;
  filteredHouses: THouses;
  savedHouses: THouses;
  status: TStatus;
  selectedHouse: THouse | null;
  bathroomFilter: number;
  bedroomFilter: number;
  parkingFilter: number;
  priceRange: TPriceRange;
  setHouses: () => Promise<void>;
  filterHouses: () => void;
  setStatus: (status: TStatus) => void;
  setBathrooms: (bathrooms: number) => void;
  setBedrooms: (bedrooms: number) => void;
  setParking: (parking: number) => void;
  setSelectedHouse: (house: THouse) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setSavedHouses: (house: THouse) => void;
};

export const useHouseStore = create<THouseStore>()(
  persist(
    (set, get) => ({
      houses: [],
      filteredHouses: [],
      savedHouses: [],
      status: "grid",
      bathroomFilter: 0,
      bedroomFilter: 0,
      parkingFilter: 0,
      selectedHouse: null,
      priceRange: [0, 999999999999],
      filterHouses: () => {
        set((state: THouseStore) => {
          return {
            filteredHouses: state.houses.filter((house) => {
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
        try {
          const request = await fetch("/api", { mode: "no-cors" });
          const data = await request.json();
          const validatedData = houseSchemaArray.safeParse(data as unknown);
          if (!validatedData.success) {
            console.log(validatedData.error);
          }
          set({
            houses: validatedData.data,
            filteredHouses: validatedData.data,
          });
        } catch (error) {
          console.error(error);
        }
      },
      setStatus: (status: TStatus) => {
        set({ status: status });
      },
      setBathrooms: (bathrooms: number) => {
        set({ bathroomFilter: bathrooms });
        get().filterHouses();
      },
      setBedrooms: (bedrooms: number) => {
        set({ bedroomFilter: bedrooms });
        get().filterHouses();
      },
      setParking: (parking: number) => {
        set({ parkingFilter: parking });
        get().filterHouses();
      },
      setSelectedHouse: (house: THouse) => {
        set({ selectedHouse: house });
      },
      setMinPrice: (minPrice: number) => {
        set((state: THouseStore) => {
          return {
            priceRange: [minPrice, state.priceRange[1]],
          };
        });
        get().filterHouses();
      },
      setMaxPrice: (maxPrice: number) => {
        set((state: THouseStore) => {
          return {
            priceRange: [state.priceRange[0], maxPrice],
          };
        });
        get().filterHouses();
      },
      setSavedHouses: (house: THouse) => {
        const isOnTheList = get().savedHouses.find(
          (savedHouse) => savedHouse.Id === house.Id
        );
        if (isOnTheList) {
          const newSavedHouses = get().savedHouses.filter(
            (savedHouse) => savedHouse.Id !== house.Id
          );
          return set({ savedHouses: newSavedHouses });
        }
        set({ savedHouses: [...get().savedHouses, house] });
      },
    }),
    {
      name: "house-storage",
    }
  )
);
