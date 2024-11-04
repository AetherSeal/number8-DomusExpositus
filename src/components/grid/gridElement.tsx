import { z } from "zod";
import { houseSchema } from "../../schemas/houseSchema";
import { useHouseStore } from "../../stores/HousesStore";
import { formatUSD } from "../../utils/helpers";
import GridImage from "./gridImage";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";

type GridElementProps = {
  house: z.infer<typeof houseSchema>;
};

export default function GridElement({ house }: GridElementProps) {
  const setSelectedHouse = useHouseStore((state) => state.setSelectedHouse);
  const setStatus = useHouseStore((state) => state.setStatus);

  return (
    <article
      className="shadow-lg rounded hover:scale-105 active:scale-95 transition-all overflow-hidden"
      onClick={() => {
        setSelectedHouse(house);
        setStatus("details");
      }}
    >
      <GridImage src={house.ThumbnailURL} alt={house.Title} />
      <div className="p-2">
        <h2 className="truncate">{house.Title}</h2>
        <p className="text-xs flex items-center">
          <FaMapMarkerAlt />
          {house.Location}
        </p>
        <p className="text-xs flex items-center">
          <FaBed className="mr-1" />
          {house.Bedrooms} beds | <FaBath className="mx-1" />
          {house.Bathrooms} baths
        </p>
        <p className="text-lg">{formatUSD(house["Sale Price"])}</p>
      </div>
    </article>
  );
}
