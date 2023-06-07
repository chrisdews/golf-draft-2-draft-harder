"use client";

import { Fragment } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setSelectedTour } from "@/store/tournamentListSlice";

import { Menu, Transition } from "@headlessui/react";
import ChevronDown from "@/icons/ChevronDown";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function TourDropdown() {
  const dispatch: AppDispatch = useDispatch();
  const selectedTour = useSelector(
    (state: RootState) => state.tournamentList.selectedTour
  );
  const tourList =
    useSelector((state: RootState) => state.tournamentList.tourList) || [];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function menuItem(tourName: string, { key }: { key: string }) {
    return (
      <Menu.Item key={key}>
        {({ active }) => (
          <span
            onClick={() => dispatch(setSelectedTour(tourName))}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {tourName}
          </span>
        )}
      </Menu.Item>
    );
  }

  return (
    <>
      <div>selected tour: {selectedTour}</div>

      <Menu as="div" className="relative inline-block text-left">
        <h3 className="text-lg leading-6 font-medium">
          Tour Selection - client side store
        </h3>
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {selectedTour || "Pick a Tour"}
            <ChevronDown
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {tourList
                .filter((tour) => tour.active)
                .map((tour, index) =>
                  menuItem(`${tour.tour_name}`, {
                    key: `${tour.tour_name + index}`,
                  })
                )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
