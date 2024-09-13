import React from "react";

const Card = () => {
  return (
    <div className="flex flex-row overflow-hidden flex-nowrap  whitespace-nowrap items-center">
      <img
        src="https://dummyimage.com/40x40/00ff00"
        className="rounded-full mr-1"
      />
      <div className="text-semibold text-sm">Brajesh Jumar Roy</div>
      <div className="text-xs text-gray-500 mx-2">•</div>
      <div className="text-xs text-gray-500">2nd</div>
      <div className="text-xs text-gray-500 mx-2">•</div>

      <div className="text-xs text-gray-500">Full Stack Developer at Afff</div>
    </div>
  );
};

function Third() {
  return (
    <div>
      <div className="w-11/12 mx-auto flex flex-col gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Third;
