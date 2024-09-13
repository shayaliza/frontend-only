import React from "react";

const Card = () => {
  return (
    <div className="bg-white p-2 border border-gray-300 flex flex-col gap-4 items-center">
      <div>
        <img src="https://dummyimage.com/140x140/00ff00" />
      </div>
      <div className="text-base font-semibold mb-1">Introduction to SQL</div>
    </div>
  );
};

function Second() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Second;
