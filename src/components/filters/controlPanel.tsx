import { useHouseStore } from "../../stores/HousesStore";
import Select from "./select";

export default function ControlPanel() {
  const setBathrooms = useHouseStore((state) => state.setBathrooms);
  const setBedrooms = useHouseStore((state) => state.setBedrooms);
  const setParking = useHouseStore((state) => state.setParking);
  const setMinPrice = useHouseStore((state) => state.setMinPrice);
  const setMaxPrice = useHouseStore((state) => state.setMaxPrice);

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b-[1px] border-b-black/20">
      <Select
        name="Bedrooms"
        onChange={(event) => {
          console.log(event.currentTarget.value);
          setBedrooms(parseInt(event.currentTarget.value));
        }}
      />
      <Select
        name="Bathrooms"
        onChange={(event) => {
          console.log(event.currentTarget.value);
          setBathrooms(parseInt(event.currentTarget.value));
        }}
      />
      <Select
        name="Parking"
        onChange={(event) => {
          console.log(event.currentTarget.value);
          setParking(parseInt(event.currentTarget.value));
        }}
      />
      <div className="">
        <p>Price Range</p>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            id="priceRangeMin"
            placeholder="Min"
            className="inline-flex justify-center px-4 py-2 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onChange={(event) => setMinPrice(Number(event.currentTarget.value))}
          />

          <input
            type="number"
            id="priceRangeMax"
            placeholder="Max"
            className="inline-flex justify-center px-4 py-2 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onChange={(event) => setMaxPrice(Number(event.currentTarget.value))}
          />
        </div>
      </div>
    </section>
  );
}
