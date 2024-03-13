import React from 'react'

const button = (data) => {
  return (
    <div>
      <button className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  tracking-wider cursor-pointer border border-solid border-black p-4 text-white bg-[#153462] hover:border-2 hover:shadow-2xl hover:bg-[#BAD1C2] hover:text-black ">
        {data.info}
      </button>
    </div>
  );
}

export default button
