import { useState } from "react";
import Itemlist from "./ItemList";
// import Cart from "./Cart";
import Bill from "./Bill";
import { useCartproductdata } from "./contexProvider/Productcontext";
import Dashboard from "./Dashboard";

function App() {

  const [cartdata, setcartdata] = useCartproductdata();

  return (
    <div className="flex items-start justify-center space-x-4">
      <div className="w-1/2">
        <Itemlist
          items={cartdata}
        />
      </div>
      <div className="w-1/2">
        <Bill items={cartdata} />
      </div>
    </div>
  );
}

export default App;
