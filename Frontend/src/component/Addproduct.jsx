import { useState } from "react";
import Itemlist from "./ItemList";
import Bill from "./Bill";
import { useCartproductdata } from "./contexProvider/Cartcontext";

function App() {

  const [cartdata, setcartdata] = useCartproductdata();

  // it is the main component that will render the Itemlist and Bill component.
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
