import { useState } from "react";
import { MdOutlineTask } from "react-icons/md";

function VitakTask() {
  const [active, setActive] = useState(false);

  return (
    <ul>
      <li>
        <a
          href="#"
          onClick={() => setActive(!active)} // toggle active state
          className={`flex items-center w-70 gap-3 mt-6 p-2 text-base font-normal rounded-lg 
            ${active ? "bg-white text-red-500" : "text-white"} 
          `}
        >
          <MdOutlineTask
            className={`text-2xl ${active ? "text-red-500" : "text-white"}`}
          />
          Vitak Task
        </a>
      </li>
    </ul>
  );
}

export default VitakTask;