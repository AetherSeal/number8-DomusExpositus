import { useHouseStore } from "../../store/HousesStore";
import { Suspense, useEffect } from "react";
import gridElement from "./gridElement";

export default function Grid() {
  const setHouses = useHouseStore((state) => state.setHouses);
  const houses = useHouseStore((state) => state.houses);
  const isloading = useHouseStore((state) => state.loading);
  useEffect(() => {
    setHouses();
  }, [setHouses]);
  const renderHouseList = houses.map((house) => {
    return <li key={house.Id}>{gridElement({ house })}</li>;
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul className="grid grid-cols-4 gap-4 bg-slate-500 p-4">
        {renderHouseList}
      </ul>
    </Suspense>
  );
}
