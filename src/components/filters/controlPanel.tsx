import { useHouseStore } from "../../store/HousesStore";
import Select from "./select";

export default function ControlPanel() {
  const setBathrooms = useHouseStore((state) => state.setBathrooms);
  const setBedrooms = useHouseStore((state) => state.setBedrooms);
  const setParking = useHouseStore((state) => state.setParking);

  return (
    <section className="flex flex-row gap-4">
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
      <div>
        <label htmlFor="priceRange">Price Range</label>
        <input type="number" id="priceRange" />
      </div>
    </section>
  );
}
