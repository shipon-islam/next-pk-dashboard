"use client";
import { alltasks } from "@/api";
import Sidebar from "@/components/Sidebar";
import TableHeader from "@/components/TableHeader";
import Tableitems from "@/components/Tableitems";
import { textControler } from "@/utilites";
import { useRef, useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";

export default function Home() {
  const [filterTasks, setFilterTasks] = useState(alltasks);
  const listContainerRef = useRef(null);

  const handleChange = ({ target }) => {
    const parentElement = target.parentElement;
    const thisElementValue = textControler(target.innerText);
    const nodelist = listContainerRef.current.children;

    for (let list of nodelist) {
      list.classList.remove("before:h-[2px]");
    }
    if (thisElementValue === "all tasks") {
      setFilterTasks(alltasks);
      parentElement.classList.add("before:h-[2px]");
    } else {
      setFilterTasks(
        alltasks.filter(
          (tasks) => thisElementValue === tasks.category.toLowerCase()
        )
      );
    }
    parentElement.classList.add("before:h-[2px]");
  };
  return (
    <main className="bg-neutral-100 min-h-screen font-manrofe">
      <div className="max-w-[1440px] px-5 md:px-8 mx-auto flex">
        <Sidebar />
        <div className="bg-white min-h-screen w-full my-3 rounded-md py-5 px-4 text-title text-sm">
          <section>
            <div className="flex justify-between capitalize font-semibold">
              <p>wed aug 30 2023</p>
              <p className="text-gray-500">
                total time today: <span className="text-title">18h 52m</span>
              </p>
            </div>
            <hr className="mt-5" />
          </section>
          <section className="mt-8 overflow-x-auto">
            <ul
              ref={listContainerRef}
              className="flex gap-x-4 font-semibold border-b-2 w-fit py-1 md:text-base lg:text-lg"
            >
              <li className="common-li text-primary before:h-[2px] before:bg-primary ">
                <button onClick={handleChange}>All tasks (3)</button>
              </li>
              <li className="common-li text-purple-cs before:bg-purple-cs">
                <button onClick={handleChange}>Ongoing tasks (3)</button>
              </li>
              <li
                onClick={handleChange}
                className="common-li text-warning before:bg-warning"
              >
                <button>Upcoming tasks (2)</button>
              </li>
              <li className="common-li text-purple-500 before:bg-purple-500">
                <button onClick={handleChange}>Feature tasks (2)</button>
              </li>
              <li className="common-li text-success before:bg-success">
                <button onClick={handleChange}>Completed tasks (2)</button>
              </li>
            </ul>
          </section>
          {filterTasks.map((item) => {
            return (
              <TableHeader key={item.id} item={item}>
                <Tableitems tasks={item.tasks} />
              </TableHeader>
            );
          })}
          <div className="flex items-center gap-1 justify-center my-10 font-bold">
            <span>Show more</span> <MdOutlineExpandMore className="text-lg" />
          </div>
        </div>
      </div>
    </main>
  );
}
