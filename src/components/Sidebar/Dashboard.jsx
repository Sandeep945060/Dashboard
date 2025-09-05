import { useState, useEffect, useRef } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";

function Dashboard() {
  const [active, setActive] = useState(false);
  const linkRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // agar click Dashboard link ke bahar hua to active false ho jaye
      if (linkRef.current && !linkRef.current.contains(event.target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul>
      <li>
        <a
          ref={linkRef}
          href="#"
          onClick={() => setActive(!active)} // toggle active state
          className={`flex items-center w-70 gap-3 mt-6 p-2 text-base font-normal rounded-lg 
            ${active ? "bg-white text-red-500" : "text-white"} 
          `}
        >
          <TbLayoutDashboardFilled
            className={`text-2xl ${active ? "text-red-500" : "text-white"}`}
          />
          Dashboard
        </a>
      </li>
    </ul>
  );
}

export default Dashboard;
