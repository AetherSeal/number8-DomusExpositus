import { useHouseStore } from "../../store/HousesStore";
import { useEffect } from "react";

export default function Grid() {
  const setHouses = useHouseStore((state) => state.setHouses);
  const houses = useHouseStore((state) => state.houses);
  const isloading = useHouseStore((state) => state.loading);
  useEffect(() => {
    setHouses();
  }, [setHouses]);
  const renderHouseList = houses.map((house) => {
    if (isloading) {
      return <div>Loading...</div>;
    }
    return <li key={house.Id}>{house.Title}</li>;
  });
  return <ul>{renderHouseList}</ul>;
}
