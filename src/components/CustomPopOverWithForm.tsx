import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment} from "react";
import CustomForm from "./CustomForm";



interface CustomPopoverProps {
  title: string;
  demoButton?: boolean;
}


const CustomPopOverWithForm = ({ title, demoButton }: CustomPopoverProps) => {
 
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
                        <CustomForm />
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
