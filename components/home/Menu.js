import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import { useState, Fragment } from "react";

export default function Menu({ items }) {
  const [popoverStates, setPopoverStates] = useState({});

  function togglePopover(navlink, show = true) {
    setPopoverStates((prevState) => ({
      ...prevState,
      [navlink]: show,
    }));
  }

  let parentWithChild;
  let parentWithOutChild;

  return (
    <Popover className="relative flex bg-white justify-center items-center group ">
      <div className="flex text-sm font-semibold gap-10 justify-center items-center  ">
        {items &&
          items.map((item) => {
            parentWithChild =
              item &&
              item.child_items &&
              item.child_items.map(
                (childItems) =>
                  childItems.child_items &&
                  childItems.child_items.length > 1 &&
                  childItems.child_items
              );

            parentWithOutChild =
              item &&
              item.child_items &&
              item.child_items.find(
                (childItems) =>
                  childItems.child_items && childItems.child_items.length === 0
              );

            console.log(parentWithChild, "parentWithChild");

            return (
              <Fragment key={item.id}>
                <PopoverButton
                  className="text-black text-sm uppercase font-bold cursor-pointer py-4 hover:underline underline-offset-[18px] decoration-2 delay-300 duration-300  md:block "
                  onMouseEnter={() => togglePopover(item.title, true)}
                  onMouseLeave={() => togglePopover(item.title, false)}
                >
                  {item.title}
                </PopoverButton>

                <Transition
                  as={Fragment}
                  show={popoverStates[item.title]}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute left-1/2 transform -translate-x-1/2 top-full  w-[60%] opacity-100 z-[999]">
                    <div className="h-px bg-gray-400 w-full "></div>
                    <div
                      className="overflow-hidden bg-white w-full shadow-lg ring-1 ring-black/5 flex group-hover:block"
                      onMouseEnter={() => togglePopover(item.title, true)}
                      onMouseLeave={() => togglePopover(item.title, false)}
                    >
                      <div className="w-[80%] mx-auto ">
                        <div className="grid grid-cols-4  items-start justify-center">
                          {item.child_items.map((data) => (
                            <div key={data.id} className="p-10 space-y-3">
                              <div className="text-black py-3 text-base font-bold capitalize">
                                {data.child_items.length > 0 ? (
                                  <h1>{data.title}</h1>
                                ) : (
                                  <Link href={data.link}>{data.title}</Link>
                                )}
                              </div>

                              <div className="space-y-2">
                                {data?.child_items?.map((subItem) => (
                                  <div
                                    key={subItem.id}
                                    className="text-gray-600 text-sm capitalize hover:text-black "
                                  >
                                    <Link href={subItem.link}>
                                      {subItem.title}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Transition>
              </Fragment>
            );
          })}
      </div>
    </Popover>
  );
}
