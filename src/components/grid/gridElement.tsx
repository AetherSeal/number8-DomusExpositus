import { THouse } from "../../store/HousesStore";

export default function gridElement({ house }: { house: THouse }) {
  const rawPrice = house["Sale Price"];
  const price = rawPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <article className="shadow-inner p-2 rounded bg-white">
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
