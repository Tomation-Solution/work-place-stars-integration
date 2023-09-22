import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment} from "react";
// import Select from "react-select";

// const options = [
//   { value: "Org360", label: "Org360" },
//   { value: "E-metric Suite", label: "E-metric Suite" },
//   { value: "Sequential Jobs", label: "Sequential Jobs" },
// ];

interface CustomPopoverProps {
  title: string;
  demoButton?: boolean;
}

const CustomPopOverWithForm: React.FC<CustomPopoverProps> = ({
  title,
  demoButton,
}) => {
  // const [selectedService, setSelectedService] = useState(null);

  // const handleChange = (newValue: string, actionMeta: any) => {
  //   setSelectedService(newValue);
  // };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
      ${open ? "" : "text-opacity-90"}
      ${
        demoButton
          ? " w-[150px]  mr-3 text-primary border bg-white  border-primary  px-3 py-[6px] rounded-md group inline-flex items-center  text-[15px] font-normal  hover:text-opacity-100"
          : "group inline-flex items-center rounded-mdpx-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      }
     

      `}
          >
            {demoButton ? (
              <li className="text-center  w-full h-full border-b-primary">
                Request Demo{" "}
              </li>
            ) : (
              <li className="navlink flex items-center capitalize">{title}</li>
            )}
            {demoButton ? (
              ""
            ) : (
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
        ml-[2px] h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute shadow-2xl left-1/2 z-10 mt-3 w-[420px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm">
              <div className="overflow-hidden rounded-lg shadow-lg border-gray-300 ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-4 bg-opacity-[0.97]">
                  {/* Form section for big screens */}
                  <div className="hidden lg:grid font-normal">
                    {/* This form will only be displayed on screens with a width of 1024px or larger */}
                    <form className="mt-4">
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
                      <div className="mb-4">
                        <label
                          htmlFor="solution"
                          className="block text-sm font-normal text-gray-700"
                        >
                          Solution
                        </label>

                        {/* <Select
                          isMulti
                          defaultValue={selectedService}
                          onChange={handleChange}
                          options={options}
                        /> */}

                        <select
                          id="solution"
                          name="solution"
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-sm"
                          // Add your solution dropdown handling logic here
                        >
                          <option value="Org360">Org360</option>
                          <option value="E-metric Suite">E-metric Suite</option>
                          <option value="Sequential Jobs">
                            Sequential Jobs
                          </option>
                        </select>
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
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CustomPopOverWithForm;
