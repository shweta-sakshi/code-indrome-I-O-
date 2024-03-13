import React from "react";
import Hydoxide from "../photos/Hydroxide.jpg";
import Sulfuric from "../photos/Sulfuric-acid.jpg";
import Default from "../photos/Default.jpg";
import Person1 from "../photos/Person1.jpg";
import Person2 from "../photos/Person2.jpg";

const card1 = (data) => {
  let imageSource;

  switch (data.name) {
    case "hydo oxide":
      imageSource = Hydoxide;
      break;
    case "sulfuric acid":
      imageSource = Sulfuric;
      break;
    default:
      imageSource = Default;
  }

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-center hover:cursor-pointer hover:shadow-2xl hover:bg-slate-200">
        <div className="flex border-0 border-b-2 border-gray-400">
          <img
            src={Person1}
            alt=""
            className="m-1 h-14 w-14 rounded-full border-2 border-white shadow-md"
          />
          <div className=" text-red-900 text-3xl text-center m-3">{data.product}</div>
        </div>
        <img src={imageSource} alt={data.name} className="w-full sm:h-96" />
        <ul className="border-0 border-t-2 border-gray-400">
          <li>
            <strong>Price:</strong> {data.price}
          </li>
          <li>
            <strong>Rating:</strong> {data.rating}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default card1;
