// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useTheme } from "../../../DarkMode/ThemeProvider";
// import datasnaplogo from "../../assets/rsc/datasnap-logo.png";
// import { GetOneBlog, UpdateABlog } from "../../../fetching/dataSnap/post";

// function BlogEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { theme } = useTheme();

//   const [bannerImage, setBannerImage] = useState(null);
//   const [postContent, setPostContent] = useState("");
//   const [title, setTitle] = useState("");
//   const [isTrending, setIsTrending] = useState(false);
//   const [status, setStatus] = useState("draft");

//   // Load the existing blog data when the component mounts
//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await GetOneBlog(id);
//         if (response.data) {
//           const { title, content, banner_image, is_trending, status } =
//             response.data;
//           setTitle(title);
//           setPostContent(content);
//           setBannerImage(banner_image); // Use a URL if available
//           setIsTrending(is_trending);
//           setStatus(status);
//         }
//       } catch (error) {
//         console.error("Failed to load blog:", error);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   const handleSubmit = async () => {
//     try {
//       const response = await UpdateABlog(
//         id,
//         title,
//         postContent,
//         bannerImage,
//         isTrending,
//         status
//       );
//       if (response.status === 200) {
//         navigate("/datasnap/drafts"); // Navigate to drafts on success
//       }
//     } catch (error) {
//       console.error("Error updating the blog:", error);
//     }
//   };

//   return (
//     <div
//       className={`w-full ${
//         theme === "dark" ? "bg-black text-white" : "bg-gray-800 text-gray-300"
//       }`}
//     >
//       <div className="shadow-sm sticky top-0 z-50">
//         <div className="flex justify-between items-center px-4 py-4">
//           <Link to="/datasnap">
//             <img src={datasnaplogo} alt="Logo" className="h-12" />
//           </Link>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//             onClick={handleSubmit}
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>

//       <div className="p-4 md:p-8 flex flex-col lg:flex-row">
//         <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
//           <input
//             type="file"
//             onChange={(e) => setBannerImage(e.target.files[0])}
//             className="mb-4"
//             accept="image/*"
//           />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Edit post title here..."
//             className="w-full p-4 mb-4 border border-gray-300 rounded"
//           />
//           <ReactQuill
//             value={postContent}
//             onChange={setPostContent}
//             className="h-[50vh] bg-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogEdit;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useTheme } from "../../../DarkMode/ThemeProvider";
import datasnaplogo from "../../assets/rsc/datasnap-logo.png";
import { GetOneBlog, UpdateABlog } from "../../../fetching/dataSnap/post";

function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [bannerImage, setBannerImage] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [title, setTitle] = useState("");
  const [isTrending, setIsTrending] = useState(false);
  const [status, setStatus] = useState("draft");

  // Load the existing blog data when the component mounts
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await GetOneBlog(id);
        if (response.data) {
          const { title, content, banner_image, is_trending, status } =
            response.data;
          setTitle(title);
          setPostContent(content);
          setBannerPreview(banner_image); // Set preview from existing banner
          setIsTrending(is_trending);
          setStatus(status);
        }
      } catch (error) {
        console.error("Failed to load blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleAddBanner = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(file);
      setBannerPreview(imageUrl); // Set preview for newly added image
    }
  };

  const handleRemoveBanner = () => {
    setBannerImage(null);
    setBannerPreview(null); // Clear preview
  };

  const handleSubmit = async () => {
    try {
      const response = await UpdateABlog(
        id,
        title,
        postContent,
        bannerImage,
        isTrending,
        status
      );
      if (response.status === 200) {
        navigate("/datasnap/drafts"); // Navigate to drafts on success
      }
    } catch (error) {
      console.error("Error updating the blog:", error);
    }
  };

  return (
    <div
      className={`w-full ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-800 text-gray-300"
      }`}
    >
      <div className="shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-4">
          <Link to="/datasnap">
            <img src={datasnaplogo} alt="Logo" className="h-12" />
          </Link>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="p-4 md:p-8 flex flex-col lg:flex-row">
        <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
          <div
            className={`p-4 ${
              theme === "dark"
                ? "bg-black text-white"
                : "bg-gray-700 text-gray-300"
            } border border-gray-600 rounded-lg mb-4`}
          >
            {bannerPreview ? (
              <div className="flex flex-col items-center">
                <img
                  src={bannerPreview}
                  alt="Banner"
                  className="w-full md:w-1/2 h-auto rounded"
                />
                <div className="flex space-x-4 mt-2">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() =>
                      document.getElementById("bannerInput").click()
                    }
                  >
                    Change
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={handleRemoveBanner}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  id="bannerInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAddBanner}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  onClick={() => document.getElementById("bannerInput").click()}
                >
                  Add Banner Image
                </button>
                <div className="text-sm text-gray-300 mt-2">
                  Use a ratio of 1000:400 for best results.
                </div>
              </div>
            )}
          </div>

          <textarea
            className="w-full border text-black border-gray-300 p-4 rounded text-lg"
            placeholder="Edit post title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="mt-4 h-[50vh] border-none">
            <ReactQuill
              value={postContent}
              onChange={setPostContent}
              className="h-full bg-white outline-none border-none"
            />
          </div>
          {/* Status */}
          <div
            className={`p-4 ${
              theme === "dark"
                ? "bg-black text-white"
                : "bg-gray-700 text-gray-300"
            } border border-gray-600 rounded-lg mb-4`}
          >
            <h4 className="text-lg font-semibold">Status</h4>
            <div className="flex mt-2">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  name="status"
                  id="draft"
                  value="draft"
                  checked={status === "draft"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="draft" className="ml-2 text-gray-300">
                  Draft
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  id="published"
                  value="published"
                  checked={status === "published"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="published" className="ml-2 text-gray-300">
                  Published
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <button
            className="w-full bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit for review
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
