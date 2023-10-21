"use client";
import { BiSolidRightArrow, BiTrashAlt } from "react-icons/bi";
import { FaPen } from "react-icons/fa6";
import { MdOutlineCalendarMonth, MdOutlineExpandMore } from "react-icons/md";

export default function Tableitems({ tasks }) {
  return tasks.map((task) => (
    <tr
      key={task.id}
      className="bg-white hover:bg-gray-50 font-semibold text-subtitle"
    >
      <td className="w-4 px-4 py-2">
        <div className="flex items-center gap-x-2">
          <input
            defaultChecked={task.status === "completedTask" ? true : false}
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="16" height="16" rx="2" fill="#F4F4F4" />
            <circle cx="5.5" cy="4" r="1" fill="#BCBCBC" />
            <circle cx="5.5" cy="8" r="1" fill="#BCBCBC" />
            <circle cx="5.5" cy="12" r="1" fill="#BCBCBC" />
            <circle cx="10.5" cy="4" r="1" fill="#BCBCBC" />
            <circle cx="10.5" cy="8" r="1" fill="#BCBCBC" />
            <circle cx="10.5" cy="12" r="1" fill="#BCBCBC" />
          </svg>
        </div>
      </td>
      <td className="px-4 py-2 capitalize">{task.taskName}</td>
      <td className="px-4 py-2">
        <button className="block w-fit mx-auto">
          {task.dueDate ? (
            <p
              className={
                task.dueDate === "3 day" ? "text-warning" : "text-alert"
              }
            >
              {task.dueDate}
            </p>
          ) : (
            <MdOutlineCalendarMonth className="text-xl" />
          )}
        </button>
      </td>
      <td className="px-4 py-2 capitalize min-w-[7rem]">{task.createOn}</td>
      <td className="px-4 py-2">
        <div className="flex flex-col lg:flex-row  gap-2">
          {task.tags.map((tag, index) => (
            <button
              key={index}
              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-sm capitalize "
            >
              {tag}
            </button>
          ))}
        </div>
      </td>
      <td className="px-4 py-2 min-w-[6.5rem]">
        <div className="flex items-center gap-1">
          <span>{task.timer}</span>
          <MdOutlineExpandMore className="text-lg" />
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex flex-col lg:flex-row  gap-3">
          <button>
            <BiSolidRightArrow className="text-success text-base" />
          </button>
          <button>
            <FaPen className="text-primary text-base" />
          </button>
          <button>
            <BiTrashAlt className="text-alert text-base" />
          </button>
        </div>
      </td>
    </tr>
  ));
}
