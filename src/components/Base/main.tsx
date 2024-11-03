import { useHouseStore } from "../../stores/HousesStore";
import Detail from "../detail/detail";
import ControlPanel from "../filters/controlPanel";
import Grid from "../grid/grid";

export default function Main() {
  const status = useHouseStore((state) => state.status);
  const renderContent = () => {
    if (status === "grid") {
      return (
        <>
          <ControlPanel />
          <Grid />
        </>
      );
    }
    return <Detail />;
  };
  return <section>{renderContent()}</section>;
}
