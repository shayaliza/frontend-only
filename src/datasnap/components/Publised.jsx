import React, { useEffect, useState } from "react";
import trashIcon from "../assets/rsc/icons8-trash-32.png";
import { useTheme } from "../../DarkMode/ThemeProvider";
import { DeleteABlog, GetAllBlogs } from "../../fetching/dataSnap/post";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function Publised() {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [drafts, setDrafts] = useState([]);
  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const response = await GetAllBlogs();
        if (response.data && response.data.results) {
          const draftBlogs = response.data.results.filter(
            (blog) => blog.status === "published"
          );
          setDrafts(draftBlogs);
        } else {
          console.error("Unexpected data format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch drafts:", error);
      }
    };

    fetchDrafts();
  }, []);

  const handleDelete = async (draftId) => {
    try {
      await DeleteABlog(draftId).then((res) => {
        if (res.status === 204) {
          console.log("Draft deleted successfully");
          toast({ title: "Draft Deleted" });
          setDrafts((prevDrafts) =>
            prevDrafts.filter((draft) => draft.id !== draftId)
          );
        }
      });
    } catch (error) {
      console.error("Failed to delete draft:", error);
    }
  };

  return (
    <div className="flex flex-col items-center py-4 px-2 sm:px-4 min-h-screen">
      <div className="w-full max-w-3xl py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold ">Your Submission </h2>
            <p className="">All your pending drafts are here</p>
          </div>
          <Link
            to={"/ds/create"}
            className="mt-4 sm:mt-0 text-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 font-semibold border-2 border-blue-500 rounded-lg transition"
          >
            New Draft +
          </Link>
        </div>
        <div className="space-y-4">
          {drafts.map((draft) => (
            <div
              key={draft.id}
              className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-sm border ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center text-white rounded-lg mr-4 bg-gray-600">
                  <p>No Cover</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{draft.title}</h3>
                  <p className="text-gray-400 italic">
                    {draft.content ? draft.content : "Empty Draft"}
                  </p>
                  <p className="text-gray-400">
                    Last Updated:{" "}
                    <i>{new Date(draft.updated_at).toLocaleDateString()}</i>
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link
                  to={`/ds/edit/${draft.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <img
                  src={trashIcon}
                  alt="Delete"
                  className="w-6 h-6 cursor-pointer hover:opacity-75"
                  onClick={() => handleDelete(draft.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publised;
