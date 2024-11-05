import { useHouseStore } from "../../../stores/HousesStore";

export default function DetailsBar() {
  const selectedHouse = useHouseStore((state) => state.selectedHouse);
  if (!selectedHouse) {
    return <p>Select a house to view details</p>;
  }
  return (
    <>
      <section className="flex justify-between pt-8">
        <div>
          <DetailsBarValue>{selectedHouse.Bedrooms}</DetailsBarValue>
          <DetailsBarLabel>Room</DetailsBarLabel>
        </div>
        <div>
          <DetailsBarValue>{selectedHouse.Bathrooms}</DetailsBarValue>
          <DetailsBarLabel>Bath</DetailsBarLabel>
        </div>
        <div>
          <DetailsBarValue>{selectedHouse.Parking}</DetailsBarValue>
          <DetailsBarLabel>Parking</DetailsBarLabel>
        </div>
        <div>
          <DetailsBarValue>{selectedHouse.Sqft}</DetailsBarValue>
          <DetailsBarLabel>Sqft.</DetailsBarLabel>
        </div>
        <div>
          <DetailsBarValue>{selectedHouse.YearBuilt}</DetailsBarValue>
          <DetailsBarLabel>Year Build</DetailsBarLabel>
        </div>
      </section>
      <p className="pt-8 text-justify">{selectedHouse.Description}</p>
    </>
  );
}
const DetailsBarValue = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="justify-center flex text-3xl text-cyan-600">{children}</h3>
  );
};
const DetailsBarLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="justify-center flex text-lg text-cyan-600 font-thin">
      {children}
    </p>
  );
};
