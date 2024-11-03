type SelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
};
export default function Select({ onChange, name }: SelectProps) {
  return (
    <label htmlFor="parkingFilter">
      {name}
      <select
        onChange={onChange}
        name={name}
        id={name}
        className="inline-flex  justify-center px-4 py-2 rounded-md bg-white  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5+</option>
      </select>
    </label>
  );
}
