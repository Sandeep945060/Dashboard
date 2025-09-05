import { useState } from "react";
import { MdOutlineHelp } from "react-icons/md";

function Dashboard() {
  const [active, setActive] = useState(false);

  return (
    <ul onClick={() => setActive(false)}>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.stopPropagation(); // bahar click se effect na ho
            setActive(!active);
          }}
          className={`flex items-center w-70 gap-3 mt-6 p-2 text-base font-normal rounded-lg 
            ${active ? "bg-white text-red-500" : "text-white"} 
          `}
        >
          <MdOutlineHelp
            className={`text-2xl ${active ? "text-red-500" : "text-white"}`}
          />
          Help
        </a>
      </li>
    </ul>
  );
}

export default Dashboard;
