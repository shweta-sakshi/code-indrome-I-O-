import React, { useState } from "react";
import Sellernavbar from "./Sellernavbar";
import Sellersidebar from "./Sellersidebar";

const Sellerdashnav = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div className="w-full z-10 relative">
            <Sellernavbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
            <Sellersidebar sidebarToggle={sidebarToggle} />
        </div>
    )
}

export default Sellerdashnav