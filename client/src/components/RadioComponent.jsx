/* eslint-disable react/prop-types */

import { useState } from "react";
import toast from "react-hot-toast";

const RadioComponent = ({ text, sendDataToParent, selected }) => {
  const [data, setData] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setData(text);
    sendDataToParent(data);
    console.log(selected, text);
    // confermation
    if (data != "") toast.success(`${data} is Selected`);
  };
  return (
    <div
      className={`mt-2 border flex justify-center items-center py-1 px-4 text-nowrap rounded-md hover:bg-orange-100 cursor-pointer shadow-sm hover:-translate-y-[2%] transition-transform duration-200 ease-in-out active:ring-1 ${
        selected === text ? "bg-orange-200" : ""
      } `}
      onClick={handleClick}
    >
      <span className="text-xl">{text}</span>
    </div>
  );
};

export default RadioComponent;
