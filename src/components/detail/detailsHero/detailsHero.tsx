import { useHouseStore } from "../../../stores/HousesStore";
import { useModalStore } from "../../../stores/ModalStore";
import { formatDateTime, formatUSD } from "../../../utils/helpers";
import {
  IoIosArrowRoundBack,
  IoIosHeartEmpty,
  IoIosHeart,
} from "react-icons/io";

export default function DetailsHeader() {
  const selectedHouse = useHouseStore((state) => state.selectedHouse);
  const setStatus = useHouseStore((state) => state.setStatus);
  const savedHouses = useHouseStore((state) => state.savedHouses);
  const setSavedHouses = useHouseStore((state) => state.setSavedHouses);
  const isOpen = useModalStore((state) => state.isOpen);
  const setModal = useModalStore((state) => state.setModal);

  if (!selectedHouse) {
    return <p>Select a house to view details</p>;
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <button
          className="flex flex-row items-center text-cyan-600 hover:text-cyan-500 hover:scale-105 transition-all"
          onClick={() => {
            setStatus("grid");
          }}
        >
          <IoIosArrowRoundBack className="text-6xl" />
          <span>Back</span>
        </button>
        <button
          className="flex flex-row items-center text-cyan-600 hover:text-cyan-500 hover:scale-105 transition-all"
          onClick={() => {
            setSavedHouses(selectedHouse);
            setModal(!isOpen);
          }}
        >
          {savedHouses.find((house) => house.Id === selectedHouse.Id) ? (
            <IoIosHeart className="text-4xl" />
          ) : (
            <IoIosHeartEmpty className="text-4xl" />
          )}
        </button>
      </div>
      <section className="flex flex-col md:flex-row justify-between pt-4">
        <div className="text-center md:text-left">
          <DetailsHeaderMain>{selectedHouse.Title}</DetailsHeaderMain>
          <DetailsHeaderSub>{selectedHouse.Location}</DetailsHeaderSub>
        </div>
        <div className="text-center md:text-right">
          <DetailsHeaderMain>
            {formatUSD(selectedHouse["Sale Price"])}
          </DetailsHeaderMain>
          <DetailsHeaderSub>
            Date Listed: {formatDateTime(selectedHouse.DateListed)}
          </DetailsHeaderSub>
        </div>
      </section>
      <img
        src={selectedHouse.PictureURL}
        alt={selectedHouse.Title}
        className="mt-8 md:mt-0 m-auto"
      />
    </>
  );
}

const DetailsHeaderMain = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl md:text-3xl  text-cyan-600">{children}</h2>;
};
const DetailsHeaderSub = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};
