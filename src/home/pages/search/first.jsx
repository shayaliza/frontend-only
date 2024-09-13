import React from "react";

const Card = () => {
  return (
    <div className="bg-white p-2 border border-gray-300 flex gap-4">
      <div>
        <img src="https://dummyimage.com/50x50/00ff00" />
      </div>
      <div className="flex flex-col">
        <div className="text-base font-semibold mb-1">Introduction to SQL</div>
        <span className="text-xs py-1 bg-gray-300 w-min px-2">Practice</span>
      </div>
    </div>
  );
};

function First() {
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default First;
