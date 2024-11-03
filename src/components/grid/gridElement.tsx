import { z } from "zod";
import { houseSchema } from "../../schemas/houseSchema";
import { useHouseStore } from "../../stores/HousesStore";

type GridElementProps = {
  house: z.infer<typeof houseSchema>;
};

export default function GridElement({ house }: GridElementProps) {
  const setSelectedHouse = useHouseStore((state) => state.setSelectedHouse);
  const setStatus = useHouseStore((state) => state.setStatus);

  const rawPrice = house["Sale Price"];
  const price = rawPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <article
      className="shadow-inner p-2 rounded bg-white"
      onClick={() => {
        setSelectedHouse(house);
        setStatus("details");
      }}
    >
      <img
        src={house.ThumbnailURL}
        alt={house.Title}
        className="mx-auto rounded"
      />
      <h2 className="truncate">{house.Title}</h2>
      <p className="text-xs">{house.Location}</p>
      <p className="text-xs">
        {house.Bedrooms} beds | {house.Bathrooms} baths
      </p>
      <p className="text-lg">{`${price}`}</p>
    </article>
  );
}
