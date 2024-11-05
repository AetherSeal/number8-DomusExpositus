import Contact from "../contact/contact";
import DetailsBar from "./detailsBar/detailsBar";
import DetailsHero from "./detailsHero/detailsHero";

export default function Detail() {
  const renderDetails = () => {
    return (
      <section className="col-span-3 lg:col-span-2 py-8 px-6 md:px-12">
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
