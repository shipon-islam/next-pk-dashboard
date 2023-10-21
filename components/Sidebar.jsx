"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineFolder,
  AiOutlineFolderAdd,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { IoArrowRedo } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { MdOutlineExpandMore, MdOutlineMailOutline } from "react-icons/md";
import { TbCalendarStats } from "react-icons/tb";
import { TiFlashOutline } from "react-icons/ti";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isSidebar, setIsSidebar] = useState(false);

  function handleWindowClick(event) {
    if (event.target.closest(".navbar") === null) {
      setIsSidebar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  return (
    <nav
      className={`navbar w-[15.5rem] fixed lg:static bg-neutral-100 py-5 border-r-[3px] lg:border-r-0 border-primary text-sm text-title px-6 md:px-4 z-10 top-0 transition-all duration-400   h-[120vh]  lg:block  ${
        isSidebar ? "left-0" : "left-[-15.1rem]"
      }`}
    >
      <button
        onClick={() => setIsSidebar((prev) => !prev)}
        className="bg-primary absolute top-14 px-3 py-3 rounded-r-full -right-[3.2rem] text-white border border-primary border-l-0 -z-10 lg:hidden"
      >
        <IoArrowRedo className="text-2xl" />
      </button>
      <div className="flex gap-2 capitalize font-semibold ">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src="/man3.png"
          alt="user"
        />
        <div className="flex items-center gap-2 text-gray-600">
          <span>john doe</span>
          <MdOutlineExpandMore className="text-xl" />
        </div>
      </div>
      <div>
        <button className="flex items-center gap-2 bg-primary text-white font-semibold capitalize w-full py-2 px-4 rounded-lg my-4">
          <AiOutlinePlus className="text-xl" />
          <span>new task</span>
        </button>
        <button className="flex items-center gap-2 border-2 border-primary text-primary font-semibold capitalize w-full py-2 px-4 rounded-lg mb-4">
          <TiFlashOutline className="text-lg" />
          <span>new task</span>
        </button>
      </div>
      <form className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LuSearch className="text-xl text-gray-500" />
          </div>
          <input
            type="text"
            id="search"
            className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 font-semibold"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="mt-6">
        <SidebarItem
          icon={TbCalendarStats}
          color="text-title"
          title="all tasks"
          path="/alltasks"
        />
        <SidebarItem
          icon={MdOutlineMailOutline}
          color="text-title"
          title="inbox"
          path="/inbox"
        />

        <ul className="font-semibold capitalize  ml-7  space-y-2 mt-4">
          <li>
            <Link href="/today">today</Link>
          </li>
          <li>
            <Link href="/nextday">next day</Link>
          </li>
          <li>
            <Link href="someday">someday</Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center font-semibold">
          <span>Category</span>
          <AiOutlineFolderAdd className="text-xl text-primary" />
        </div>
        <div>
          <SidebarItem
            icon={AiOutlineFolder}
            color="text-primary"
            title="personal"
            path="/personal"
          />
          <SidebarItem
            icon={AiOutlineFolder}
            color="text-success"
            title="work"
            path="work"
          />
          <SidebarItem
            icon={AiOutlineFolder}
            color="text-warning"
            title="travel"
            path="travel"
          />
          <SidebarItem
            icon={AiOutlineFolder}
            color="text-purple-cs"
            title="events"
            path="events"
          />
          <SidebarItem
            icon={AiOutlineFolder}
            color="text-[#27AAC7]"
            title="finances"
            path="finances"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-4 text-[0.75rem] text-primary ml-8 mt-4">
        <span>View all categories</span>
        <MdOutlineExpandMore className="text-lg" />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center font-semibold capitalize">
          <span>more</span>
        </div>
        <div>
          <SidebarItem
            icon={BiTrashAlt}
            color="text-alert"
            title="trash"
            path="/trash"
          />
        </div>
      </div>
    </nav>
  );
}
