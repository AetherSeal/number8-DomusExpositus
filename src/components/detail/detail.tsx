import Contact from "../contact/contact";
import DetailsBar from "./detailsBar/detailsBar";
import DetailsHero from "./detailsHero/detailsHero";

export default function Detail() {
  const renderDetails = () => {
    return (
      <section className="col-span-2 p-4">
        <DetailsHero />
        <DetailsBar />
      </section>
    );
  };
  return (
    <section className="grid grid-cols-3">
      {renderDetails()} <Contact />
    </section>
  );
}
