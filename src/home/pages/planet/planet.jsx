import React from "react";
import Navbar from "./comp/navbar";
import EventCard from "./comp/banner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import OverView from "./comp/overview";
import { FiThumbsUp, FiEye } from "react-icons/fi";
import Leaderboard from "./comp/leaderboard";
const notebooks = [
  {
    title: "Meteorite Threat Identification",
    user: "pranshuc",
    tags: ["python", "machine-learning"],
    views: 118,
    likes: 1,
    timeAgo: "1 year ago",
  },
  {
    title: "Meteor hazard detector",
    user: "28prakharbhattacharya",
    tags: ["machine-learning", "classification", "beginner"],
    views: 131,
    likes: 1,
    timeAgo: "1 year ago",
  },
  {
    title: "Hazardous prediction",
    user: "gayathri_k_20",
    tags: ["python", "regression", "data-sprint", "deep-learning"],
    views: 91,
    likes: 0,
    timeAgo: "1 year ago",
  },
  {
    title: "Data Sprint 106 - Meteorite Threat Identification",
    user: "jegae2003",
    tags: ["machine-learning", "classification"],
    views: 70,
    likes: 0,
    timeAgo: "1 year ago",
  },
];

function Planet() {
  return (
    <div className="final">
      {/* <Navbar /> */}
      <EventCard />
      <div className="w-full">
        <Tabs defaultValue="overview" className="w-full">
          <div className="md:w-9/12 mx-auto mb-4 mt-4 flex flex-wrap overflow-x-scroll md:overflow-hidden">
            <TabsList className="">
              <TabsTrigger value="overview" className="text-xl">
                Overview
              </TabsTrigger>
              <TabsTrigger value="data" className="text-xl">
                Data
              </TabsTrigger>
              <TabsTrigger value="notebook" className="text-xl">
                Notebook
              </TabsTrigger>
              {/* <TabsTrigger value="discussion" className="text-xl">
                Discussion
              </TabsTrigger> */}
              <TabsTrigger value="leaderboard" className="text-xl">
                Leaderboard
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="w-full">
            <OverView />
          </TabsContent>
          <TabsContent value="data">
            <div className="container mx-auto ">
              {/* Resources Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Resources</h2>
                <div className="flex space-x-4">
                  <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md font-semibold shadow-md">
                    <span role="img" aria-label="train">
                      📥
                    </span>{" "}
                    Train Dataset
                  </button>
                  <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md font-semibold shadow-md">
                    <span role="img" aria-label="test">
                      📥
                    </span>{" "}
                    Test Dataset
                  </button>
                </div>
              </div>

              {/* Data Description Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Data description</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Neo Reference ID:</strong> This feature denotes the
                    reference ID assigned to an asteroid.
                  </li>
                  <li>
                    <strong>Name:</strong> This feature denotes the name given
                    to an asteroid.
                  </li>
                  <li>
                    <strong>Absolute Magnitude:</strong> denotes the{" "}
                    <strong>absolute magnitude</strong> of an asteroid.
                  </li>
                  <li>
                    <strong>Est Dia in KM(min):</strong> estimated diameter of
                    the asteroid in kilometres (KM).
                  </li>
                  <li>
                    <strong>Relative Velocity km per sec:</strong> This feature
                    denotes the relative velocity of the asteroid in kilometre
                    per sec.
                  </li>
                  <li>
                    <strong>Orbiting Body:</strong> This feature denotes the
                    planet around which the asteroid is revolving.
                  </li>
                  <li>
                    <strong>Eccentricity:</strong> denotes the value of
                    eccentricity of the asteroid’s orbit.
                  </li>
                  <li>
                    <strong>Semi Major Axis:</strong> denotes the value of the{" "}
                    <strong>Semi Major Axis</strong> of the asteroid's orbit.
                  </li>
                  <li>
                    <strong>Orbital Period:</strong> refers to the time taken by
                    the asteroid to make one full revolution around its orbiting
                    body.
                  </li>
                  <li>
                    <strong>Perihelion Distance:</strong> denotes the point of
                    least distance for a body orbiting the Sun.
                  </li>
                  <li>
                    <strong>Aphelion Dist:</strong> denotes the point of
                    greatest distance for a body orbiting the Sun.
                  </li>
                  <li>
                    <strong>Hazardous:</strong> helps us identify whether a
                    meteorite is hazardous or not.
                  </li>
                </ul>
                <div className="mt-6">
                  <h3 className="font-bold text-lg">Submission file format:</h3>
                  <p className="text-gray-600">
                    The prediction submission file must contain column names:{" "}
                    <strong>Hazardous</strong>. Else, it will give an error.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notebook" className="w-full">
            <div className="container mx-auto p-6">
              {/* Search and Sort Bar */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">All Notebooks</h2>
                <div className="flex space-x-4 items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-lg p-2"
                  />
                  <select className="border border-gray-300 rounded-lg p-2">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Most Viewed</option>
                  </select>
                </div>
              </div>

              {/* Notebook List */}
              <div>
                {notebooks.map((notebook, index) => (
                  <NotebookCard
                    key={index}
                    title={notebook.title}
                    user={notebook.user}
                    tags={notebook.tags}
                    views={notebook.views}
                    likes={notebook.likes}
                    timeAgo={notebook.timeAgo}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="leaderboard" className="w-full">
            <Leaderboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Planet;

const NotebookCard = ({ title, user, tags, views, likes, timeAgo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center space-x-4">
      {/* Avatar */}
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        {/* Placeholder for avatar */}
        <span className="text-3xl text-purple-500">👤</span>
      </div>

      {/* Notebook Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{user}</p>
        <p className="text-sm text-gray-400">
          Tags: {tags.map((tag) => `#${tag} `)}
        </p>
      </div>

      {/* Notebook Stats */}
      <div className="flex space-x-6 items-center text-gray-500">
        <div className="flex items-center space-x-1">
          <FiEye />
          <span>{views}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiThumbsUp />
          <span>{likes}</span>
        </div>
        <p className="text-sm">{timeAgo}</p>
      </div>
    </div>
  );
};
