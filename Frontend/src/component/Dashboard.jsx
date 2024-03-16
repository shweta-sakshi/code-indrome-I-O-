import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="w-full">
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Sidebar sidebarToggle={sidebarToggle} />
    </div>
  );
};

export default Dashboard;
