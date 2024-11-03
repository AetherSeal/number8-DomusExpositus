import { useHouseStore } from "../../stores/HousesStore";

export default function Detail() {
  const selectedHouse = useHouseStore((state) => state.selectedHouse);
  const renderDetails = () => {
    if (!selectedHouse) {
      return <p>Select a house to view details</p>;
    }
    return (
      <>
        <h1>{selectedHouse.Title}</h1>
        <img src={selectedHouse.PictureURL} alt={selectedHouse.Title} />
        <p>{selectedHouse.Description}</p>
        <p>{selectedHouse.Location}</p>
        <p>
          {selectedHouse.Bedrooms} beds | {selectedHouse.Bathrooms} baths
        </p>
        <p>{selectedHouse["Sale Price"]}</p>
      </>
    );
  };
  return <section>{renderDetails()}</section>;
}
