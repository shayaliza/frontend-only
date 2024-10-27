import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import datasnaplogo from "../../assets/rsc/datasnap-logo.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useTheme } from "../../../DarkMode/ThemeProvider";
import { CreateABlog } from "../../../fetching/dataSnap/post";
function BlogCreate() {
  const [bannerImage, setBannerImage] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [title, setTitle] = useState("");
  const [isTrending, setIsTrending] = useState(false);
  const [status, setStatus] = useState("draft");
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const titleInputRef = useRef(null);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleAddBanner = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(file); // Keep the file for the API call
    }
  };

  const handleRemoveBanner = () => {
    setBannerImage(null);
  };

  const handleChange = (value) => {
    setPostContent(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await CreateABlog(
        title,
        postContent,
        bannerImage,
        isTrending,
        status
      );

      if (response.status === 201) {
        navigate("/datasnap/drafts"); // Navigate to drafts on success
      }
    } catch (error) {
      console.error("Error creating the blog:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        titleInputRef.current &&
        !titleInputRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
        setActiveTip("publishing");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Preview
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded">
              Save as Draft
            </button>
          </div>
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
            {bannerImage ? (
              <div className="flex justify-center items-center">
                <img
                  src={URL.createObjectURL(bannerImage)}
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
            ref={titleInputRef}
            className="w-full border text-black border-gray-300 p-4 rounded text-lg"
            placeholder="New post title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="mt-4 h-[50vh] border-none">
            <ReactQuill
              value={postContent}
              onChange={handleChange}
              className="h-full bg-white outline-none border-none"
            />
          </div>
        </div>

        <div className="lg:w-1/3">
          <button
            className="w-full bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit} // Submit the blog on button click
          >
            Submit for review
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCreate;
