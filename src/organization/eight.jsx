import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChannelId } from "../features/organization/workspaceSlice";
import { createChannel } from "../fetching/organization/channel";

function Eight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [is_private, setIsPrivate] = useState(false);
  const workspaceId = useSelector((state) => state.workspace.workSpaceId);

  const handleClick = async () => {
    alert(name, description);

    const res = await createChannel(name, workspaceId, description, is_private);
    if (res.data) {
      console.log(res.data);
      dispatch(setChannelId(res.data.id));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left section */}
      <div className="lg:w-1/2 w-full flex flex-col px-8 lg:px-24 h-full justify-between">
        <div>
          {/* Logo Section */}
          <div className="mb-8 mt-8">
            <div>Techsnap org logo</div>
          </div>

          {/* Heading Section */}
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
            What is your Channel name?
          </h1>
          <div className="text-gray-600 ">
            Give it a name. You can change it later.
          </div>
          <div>
            <input
              type="text"
              placeholder="Channel name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-8"
            />
            <input
              type="text"
              placeholder="Channel description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-8"
            />
            <input
              type="checkbox"
              checked={is_private}
              onChange={(e) => setIsPrivate(e.target.checked)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-8"
            />
            <label htmlFor="is_private" className="text-gray-600 font-medium">
              Private
            </label>
          </div>
        </div>

        {/* Continue Button Section */}
        <div className="w-full mb-8">
          <div className="flex justify-end">
            <button
              // onClick={() => {
              //   navigate("/managesnap/channels");
              // }}
              onClick={handleClick}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className=" hidden lg:w-1/2 w-full bg-gradient-to-r from-white to-blue-200 md:flex items-center justify-center lg:min-h-full">
        <div className="relative">
          <img
            src="https://dummyimage.com/400x400/00ff00"
            alt="Illustration"
            className="w-64 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Eight;
