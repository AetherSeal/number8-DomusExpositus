import { useHouseStore } from "../../stores/HousesStore";
import { Suspense, useEffect } from "react";
import GridElement from "./gridElement";

export default function Grid() {
  const setHouses = useHouseStore((state) => state.setHouses);
  const houses = useHouseStore((state) => state.filteredHouses);

  useEffect(() => {
    setHouses();
  }, [setHouses]);

  const renderHouseList = houses.map((house) => {
    return (
      <li key={house.Id}>
        <GridElement house={house} />
      </li>
    );
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul className="grid grid-cols-4 gap-4 p-4 bg-slate-100/75">
        {renderHouseList}
      </ul>
    </Suspense>
  );
}
