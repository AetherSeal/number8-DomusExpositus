import { useHouseStore } from "../../../stores/HousesStore";
import { formatDateTime, formatUSD } from "../../../utils/helpers";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function DetailsHeader() {
  const selectedHouse = useHouseStore((state) => state.selectedHouse);
  const setStatus = useHouseStore((state) => state.setStatus);

  if (!selectedHouse) {
    return <p>Select a house to view details</p>;
  }

  return (
    <>
      <button
        className="flex flex-row items-center "
        onClick={() => {
          setStatus("grid");
        }}
      >
        <IoIosArrowRoundBack className="text-6xl" />
        <span>Back</span>
      </button>
      <section className="flex justify-between pt-4">
        <div>
          <DetailsHeaderMain>{selectedHouse.Title}</DetailsHeaderMain>
          <DetailsHeaderSub>{selectedHouse.Location}</DetailsHeaderSub>
        </div>
        <div className="text-right">
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
        className="m-auto"
      />
    </>
  );
}

const DetailsHeaderMain = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-3xl">{children}</h2>;
};
const DetailsHeaderSub = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};
