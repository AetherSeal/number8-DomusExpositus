import { OPTIONS } from "../../utils/constants";

type SelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
};
export default function Select({ onChange, name }: SelectProps) {
  const renderOptions = () => {
    return OPTIONS.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
  };
  return (
    <label htmlFor="parkingFilter">
      {name}
      <select
        onChange={onChange}
        name={name}
        id={name}
        className="inline-flex  justify-center px-4 py-2 rounded-md bg-white  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {renderOptions()}
      </select>
    </label>
  );
}
