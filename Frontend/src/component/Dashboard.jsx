import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// This is the main component that will render the Navbar and Sidebar component.
const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="w-full z-10 relative">
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Sidebar sidebarToggle={sidebarToggle} />
    </div>
  );
};

export default Dashboard;
