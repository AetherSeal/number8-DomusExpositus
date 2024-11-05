import { useHouseStore } from "../../stores/HousesStore";
import { useModalStore } from "../../stores/ModalStore";
import { formatUSD } from "../../utils/helpers";

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const setModal = useModalStore((state) => state.setModal);
  const savedHouses = useHouseStore((state) => state.savedHouses);

  const renderSavedHouses = () => {
    return savedHouses.map((house) => {
      return (
        <div className="p-4 shadow hover:bg-cyan-600/30 transition-all hover:scale-105">
          <h2>{house.Title}</h2>
          <p>{house.Location}</p>
          <p>
            {house.Bedrooms} beds | {house.Bathrooms} baths
          </p>
          <p className="text-right text-cyan-600 text-lg">
            {formatUSD(house["Sale Price"])}
          </p>
        </div>
      );
    });
  };
  return (
    <>
      {isOpen ? (
        <section
          className="bg-black/90 fixed top-0 bottom-0 left-0 right-0"
          onClick={() => setModal(!isOpen)}
        >
          <div className="absolute top-1/2 left-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-8 max-w-[60vw] overflow-auto bg-slate-100">
            <h2 className="flex justify-center items-center p-4 text-3xl text-cyan-600 font-thin">
              Saved Houses
            </h2>
            <div className=" flex flex-col gap-4">{renderSavedHouses()}</div>
          </div>
        </section>
      ) : null}
    </>
  );
}
