import { useHouseStore } from "../../stores/HousesStore";
import { formatUSD } from "../../utils/helpers";
import Detail from "../detail/detail";
import ControlPanel from "../filters/controlPanel";
import Grid from "../grid/grid";
import Modal from "../modal/modal";

export default function Main() {
  const status = useHouseStore((state) => state.status);
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
  const renderContent = () => {
    if (status === "grid") {
      return (
        <>
          <ControlPanel />
          <Grid />
        </>
      );
    }
    return (
      <>
        <Modal>
          <h2 className="flex justify-center items-center p-4 text-3xl text-cyan-600 font-thin">
            Saved Houses
          </h2>
          <div className=" flex flex-col gap-4">{renderSavedHouses()}</div>
        </Modal>
        <Detail />
      </>
    );
  };
  return <main className="grow ">{renderContent()}</main>;
}
