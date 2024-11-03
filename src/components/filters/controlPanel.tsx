export default function ControlPanel() {
  return (
    <section className="flex flex-row">
      <h2>Filters</h2>
      <div>
        <label htmlFor="bedroomFilter">Bedrooms</label>
        <input type="number" id="bedroomFilter" />
      </div>
      <div>
        <label htmlFor="bathroomFilter">Bathrooms</label>
        <input type="number" id="bathroomFilter" />
      </div>
      <div>
        <label htmlFor="parkingFilter">Parking</label>
        <input type="number" id="parkingFilter" />
      </div>
      <div>
        <label htmlFor="priceRange">Price Range</label>
        <input type="number" id="priceRange" />
      </div>
    </section>
  );
}
