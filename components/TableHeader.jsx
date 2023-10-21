"use client";
import { colorSelector } from "@/utilites";
import { HiArrowNarrowUp } from "react-icons/hi";
import { MdOutlineExpandMore } from "react-icons/md";

export default function TableHeader({ children, item }) {
  return (
    <section className="my-12 md:my-5">
      <div>
        <div className="flex justify-between capitalize font-semibold mt-7 mb-3">
          <h5
            className={`${colorSelector(
              item.category
            )} font-semibold md:text-base lg:text-lg`}
          >
            {`${item.category} (${item.tasks.length})`}
          </h5>
          <p className="text-gray-600">4h 52m</p>
        </div>
        <hr />
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-subtitle ">
          <thead className="text-xs text-title uppercase ">
            <tr className="capitalize">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    defaultChecked={
                      item.category.toLowerCase() === "completed tasks"
                        ? true
                        : false
                    }
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    task name
                  </label>
                </div>
              </th>
              <th scope="col" className="px-4 py-3">
                task name
              </th>
              <th scope="col" className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <span>due date</span> <HiArrowNarrowUp />
                </div>
              </th>
              <th scope="col" className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <span>create on</span>
                  <MdOutlineExpandMore className="text-lg" />
                </div>
              </th>
              <th scope="col" className="px-4 py-3">
                <span>tags</span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span>timer</span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span>actions</span>
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
}
