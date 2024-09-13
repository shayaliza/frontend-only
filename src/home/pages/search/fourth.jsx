import React from "react";
import { IoMdTime } from "react-icons/io";

const Card = ({ content }) => {
  return (
    <div className="flex flex-row overflow-hidden flex-nowrap  whitespace-nowrap items-center">
      <div className="mr-4">
        <IoMdTime size={20} />
      </div>
      <div className="text-base text-black ">{content}</div>
    </div>
  );
};
function Fourth() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-2 flex flex-col gap-2">
        <Card content={"django rest framwork 2026"} />
        <Card content={"django rest framwork"} />

        <div className="py-2">Try Searching for</div>
        <Card content={"Python"} />
        <Card content={"Rest framwork"} />
        <Card content={"Best Mern Course"} />
      </div>
    </div>
  );
}

export default Fourth;
