// import React from "react";
// import myImage from "../../assets/mard-removebg-preview.png";
// import Dashboard from "./Dashboard"
// import VitakTask from "./VitakTask"
// import TaskCategories from "./TaskCategories"
// import Setting from "./Setting"
// import Help from "./Help"

// // ✅ fixed path

// function Sidebar() {
//   return (
//     <div className="fixed h-screen mt-40 w-90 bg-red-400 rounded-md flex flex-col items-center">
//       <img
//         src={myImage}
//         alt="Profile"
//         className="h-30 w-30 rounded-full"
//       />
    

//       <p className="font-extrabold text-2xl mt-2 text-white">मर्द</p>
//       <p className=" text-white text-sm">amitabh_bachchan@gamil.com</p>
//       <Dashboard/>
//       <VitakTask/>
//       <TaskCategories/>
//       <Setting/>
//       <Help/>
//     </div>
    
//   );
// }

// export default Sidebar;
import { NavLink } from "react-router-dom";
import { LayoutDashboard, AlertTriangle, ListCheck, Folder, Settings, HelpCircle, LogOut } from "lucide-react";
import profilePic from "../../assets/mard-removebg-preview.png";



export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Vital Task", path: "/vital", icon: <AlertTriangle size={20} /> },
    { name: "My Task", path: "/tasks", icon: <ListCheck size={20} /> },
    { name: "Task Categories", path: "/categories", icon: <Folder size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
    { name: "Help", path: "/help", icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="fixed h-screen w-74 bg-red-400 rounded-md mt-37 flex flex-col items-center p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img 
          src={profilePic}  
          alt="profile" 
          className="h-24 w-24 rounded-full -mt-19  "
        />
        <div className="text-center mt-2">
          <h2 className="font-bold text-2xl text-white">MARD</h2>
          <p className="text-sm text-white">sundargurung360@gmail.com</p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="mt-8 w-full flex flex-col gap-2">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-white text-red-500 font-semibold"
                  : "text-white hover:bg-red-500"
              }`
            }
          >
            <span className="">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <button className="mt-40 flex items-center mb-20 gap-2 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-200 transition">
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
}


