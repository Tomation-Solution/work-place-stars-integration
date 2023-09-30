import { useState } from "react";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

const serviceOptions = [
  { value: "Performance Mangement", label: "Performance Mangement" },
  {
    value: "Process Improvement and Automation",
    label: "Process Improvement and Automation",
  },
  { value: "Corporate Strategy", label: "Corporate Strategy" },
  { value: "International Market Entry", label: "International Market Entry" },
];
const solutionOptions = [
  { value: "Org360", label: "Org360" },
  { value: "E-metric Suite", label: "E-metric Suite" },
  { value: "Sequential Jobs", label: "Sequential Jobs" },
];

const CustomForm = () => {
  const [selectedServices, setSelectedServiceOptions] = useState<
    Option[] | null
  >(null);
  const [selectedSolutions, setSelectedSolutionsOptions] = useState<
    Option[] | null
  >(null);

  const handleSelectServiceChange = (newValue: Option[] | null) => {
    setSelectedServiceOptions(newValue);
  };

  const handleSelectSolutionChange = (newValue: Option[] | null) => {
    setSelectedSolutionsOptions(newValue);
  };

  return (
    <form className="mt-4 h-[460px] text-left">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-normal text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your name input handling logic here
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-normal text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your phone number input handling logic here
        />
      </div>

      {/* Soluitons multi dropdown */}
      <div className="mb-4">
        <label
          htmlFor="solution"
          className="block text-sm font-normal text-gray-700"
        >
          Solution
        </label>
        {/* <CustomListBox /> */}
        <Select
          isMulti={true}
          defaultValue={selectedSolutions}
          // onChange={setSelectedOption}
          options={solutionOptions}
          onChange={handleSelectSolutionChange as any}
        />
      </div>

      {/* Services multi dropdown */}
      <div className="mb-4">
        <label
          htmlFor="services"
          className="block text-sm font-normal text-gray-700"
        >
          Services
        </label>
        {/* <CustomListBox /> */}
        <Select
          isMulti={true}
          defaultValue={selectedServices}
          // onChange={setSelectedOption}
          options={serviceOptions}
          // minMenuHeight={800}
          onChange={handleSelectServiceChange as any}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="company"
          className="block text-sm font-normal text-gray-700"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your company input handling logic here
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          // Add your form submission logic here
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
