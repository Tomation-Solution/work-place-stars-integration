import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface DropDownData{
  headerText: string;
  aboutHeaderText?: string;
  url?: string;
}

interface CustomPopoverProps {
  data:DropDownData[];
  title: string;
  loginButton?:boolean;
  // className: string;
}
const CustomPopover: React.FC<CustomPopoverProps> = ({ data, title,loginButton }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
      ${open ? "" : "text-opacity-90"} 
      ${loginButton ? `
      w-[130px]  text-white border bg-primary  px-3 py-[6px] rounded-md group inline-flex items-center  text-[15px] font-normal  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
      ` : "group inline-flex items-center rounded-md py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"}
      
      `}
          >
            {loginButton ? 
          <li className="text-center  w-full h-full">Login </li>:  
            <li className="navlink flex items-center capitalize">{title}</li>
          }
            {loginButton ? "":
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
        ml-[1px] h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />}
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
            <Popover.Panel className={`absolute shadow-2xl left-1/2 z-10 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0  ${loginButton ? "-translate-x-2/3  w-[250px]": "lg:max-w-sm w-[420px]" }`}>
              <div className="overflow-hidden rounded-lg shadow-lg border-gray-300 ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-4 bg-opacity-[0.97]">
                  {data?.map((item,index) => (
                    <a
                      key={index}
                      href={item?.url}

                      target={`${item.url ? "_blank" : ""}`}
                      className=" hover:cursor-pointer -m-3 border-b flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-[#415373]">
                          {item.headerText}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.aboutHeaderText}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CustomPopover;
