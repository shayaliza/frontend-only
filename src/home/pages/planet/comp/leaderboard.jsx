import React from "react";

const Leaderboard = () => {
  const data = [
    {
      rank: 1,
      participant: "utsav2011",
      avatar: "👤",
      score: "99.5736",
      time: "07/03/23 10:46 pm",
    },
    {
      rank: 2,
      participant: "jegge2003",
      avatar: "👤",
      score: "99.4314",
      time: "25/02/23 05:26 pm",
    },
    {
      rank: 2,
      participant: "_Beluga_",
      avatar: "👤",
      score: "99.4314",
      time: "02/04/23 01:38 pm",
    },
    {
      rank: 3,
      participant: "gauravdutta.dds18@iiitb.net",
      avatar: "👤",
      score: "99.3603",
      time: "27/02/23 12:54 pm",
    },
    {
      rank: 3,
      participant: "pranshuc",
      avatar: "👤",
      score: "99.3602",
      time: "20/04/23 05:41 pm",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-4 flex">
          <button className="border-b-2 border-gray-800 font-semibold">
            Practice
          </button>
          <button className="border-b-2 border-transparent">Private</button>
          <button className="border-b-2 border-transparent">Public</button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg p-2"
        />
      </div>

      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm uppercase tracking-wider">
            <th className="p-4">Rank</th>
            <th className="p-4">Participant/team</th>
            <th className="p-4">Score</th>
            <th className="p-4">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 text-sm">{row.rank}</td>
              <td className="p-4 flex items-center space-x-2">
                <span className=" w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  {row.avatar}
                </span>
                <span>{row.participant}</span>
              </td>
              <td className="p-4 text-sm">{row.score}</td>
              <td className="p-4 text-sm">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
