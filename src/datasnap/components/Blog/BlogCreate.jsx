import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import datasnaplogo from "../../assets/rsc/datasnap-logo.png";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const suggestedTags = ["JavaScript", "CSS", "HTML", "React", "Vue", "Angular", "Node.js", "Python", "Ruby on Rails", "Django"];

function BlogCreate() {
  const [bannerImage, setBannerImage] = useState(null);
  const [postContent, setPostContent] = useState('');
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeTip, setActiveTip] = useState('publishing');
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const titleInputRef = useRef(null);
  const navigate = useNavigate();

  const handleAddBanner = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  const handleRemoveBanner = () => {
    setBannerImage(null);
  };

  const handleChange = (value) => {
    setPostContent(value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDropdownVisible(true);
  };

  const handleTagClick = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputValue('');
      setDropdownVisible(false);
    }
  };

  const handleDropdownClick = () => {
    setDropdownVisible(true);
  };

  const handleTitleFocus = () => {
    setActiveTip('title');
  };

  const handleTitleBlur = () => {
    setActiveTip('publishing');
  };

  const handleTagInputFocus = () => {
    setActiveTip('tags');
  };

  const handleTagInputBlur = () => {
    setActiveTip('publishing');
  };

  const filteredTags = suggestedTags.filter(tag =>
    tag.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current && !inputRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        titleInputRef.current && !titleInputRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
        setActiveTip('publishing');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="p-2 bg-gray-800">
        <div className="hidden shadow-sm lg:block sticky top-0 bg-gray-800 z-50">
          <div className="flex flex-col md:flex-row justify-between items-center border-b px-4 md:px-8 py-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-blue-600 hover:underline">
                Guidelines to improve
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Guidelines to write
              </a>
            </div>
            <div className="flex justify-center mb-4 md:mb-0">
              <Link to="/datasnap"><img src={datasnaplogo} alt="Logo" className="h-12" /></Link>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Preview
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                Save as Draft
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden shadow-sm sticky top-0 bg-gray-800 z-50">
          <div className="flex flex-col md:flex-row justify-between items-center border-b px-4 md:px-8 py-4">
            <div className="flex justify-between w-full">
          <div className="flex justify-center mb-4 md:mb-0">
              <Link to="/datasnap"><img src={datasnaplogo} alt="Logo" className="h-12" /></Link>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-blue-600 hover:underline">
                Guidelines to improve
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Guidelines to write
              </a>
            </div>
            </div>
            
            <div className="flex justify-end space-x-4 w-full">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Preview
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                Save as Draft
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 flex flex-col lg:flex-row">
          <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
            <div className="p-4 bg-gray-700 rounded-lg mb-4">
              {bannerImage ? (
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                  <img
                    src={bannerImage}
                    alt="Banner Image"
                    className="w-full md:w-1/2 h-auto rounded"
                  />
                  <div className="flex p-4 space-x-4 mt-2">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      onClick={() => document.getElementById("bannerInput").click()}
                    >
                      Change
                    </button>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={handleRemoveBanner}
                    >
                      <strong>Remove</strong>
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
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => document.getElementById("bannerInput").click()}
                  >
                    Add Banner Image
                  </button>
                  <div className="text-sm text-gray-500 mt-2 text-center">
                    Use a ratio of 1000:400 for the best results.
                  </div>
                </div>
              )}
            </div>

            <textarea
              ref={titleInputRef}
              className="w-full border text-black border-gray-300 p-4 rounded text-lg focus:none focus:outline-none"
              placeholder="New post title here..."
              onFocus={handleTitleFocus}
              onBlur={handleTitleBlur}
            ></textarea>

            <div className="flex flex-col space-y-10 mt-4">
              <div className="relative">
                <div
                  className="flex items-center rounded border border-gray-300 p-4 bg-white shadow-sm"
                  ref={inputRef}
                >
                  <input
                    type="text"
                    className="flex-1 outline-none bg-transparent text-gray-800"
                    placeholder="Add up to 4 tags..."
                    aria-label="Tag Input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => {
                      handleDropdownClick();
                      handleTagInputFocus();
                    }}
                    onBlur={handleTagInputBlur}
                  />
                  <button
                    className="absolute right-2 text-white bg-blue-600 hover:bg-blue-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Request Tag"
                  >
                    Req Tag
                  </button>
                </div>
                {dropdownVisible && (
                  <div
                    className="absolute bg-white shadow-md rounded w-full mt-2 border-gray-300 z-10"
                    ref={dropdownRef}
                  >
                    {filteredTags.length > 0 ? (
                      <div className="flex flex-wrap p-2">
                        {filteredTags.map((tag) => (
                          <button
                            key={tag}
                            className="m-1 px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                            onClick={() => handleTagClick(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-2 text-gray-600">No matching tags</div>
                    )}
                  </div>
                )}
                <div className="mt-2 space-y-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded m-1">
                      {tag}
                    </span>
                  ))}
                  {inputValue && !tags.includes(inputValue) && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded m-1">
                      {inputValue}
                    </span>
                  )}
                </div>
              </div>

              <div className="h-[50vh] border-none w-full">
                <ReactQuill
                  value={postContent}
                  onChange={handleChange}
                  className="h-full bg-white outline-none border-none pb-20 lg:pb-11"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-gray-100 p-4 rounded text-black">
              <h2 className="text-lg font-semibold">Categories</h2>
              <p className="text-sm text-gray-600">
                Please select a category. Choosing at least one category will
                expedite the reviewing process.
              </p>
              <div className="mt-4">
                <select
                  id="categorySelect"
                  className="w-full border border-gray-300 p-2 rounded outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="css">CSS</option>
                  <option value="html">HTML</option>
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                  <option value="angular">Angular</option>
                  <option value="nodejs">Node.js</option>
                  <option value="python">Python</option>
                  <option value="ruby-on-rails">Ruby on Rails</option>
                  <option value="django">Django</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Submit for review
              </button>
            </div>

            <div className="mt-8 space-y-4 text-gray-200">
              {activeTip === 'publishing' && (
                <div>
                  <h1 className="text-lg font-semibold">Publishing Tips</h1>
                  <ul className="list-disc list-inside">
                    <li>
                      Ensure your post has a cover image set to make the most of the
                      home feed and social media platforms.
                    </li>
                    <li>
                      Share your post on social media platforms or with your
                      coworkers or local community.
                    </li>
                    <li>
                      Promote your content through various channels such as social
                      media, newsletters, and collaborations.
                    </li>
                  </ul>
                </div>
              )}

              {activeTip === 'title' && (
                <div>
                  <h1 className="text-lg font-semibold">
                    Writing a Great Post Title
                  </h1>
                  <ul className="list-disc list-inside">
                    <li>
                      Ensure your post has a cover image set to make the most of the
                      home feed and social media platforms.
                    </li>
                    <li>
                      Use keywords where appropriate to help ensure people can find
                      your post by search.
                    </li>
                  </ul>
                </div>
              )}

              {activeTip === 'tags' && (
                <div>
                  <h1 className="text-lg font-semibold">Tagging Guidelines</h1>
                  <ul className="list-disc list-inside">
                    <li>
                      Tags help people find your post - think of them as the topics
                      or categories that best describe your post.
                    </li>
                    <li>
                      Add up to four comma-separated tags per post. Use existing
                      tags whenever possible.
                    </li>
                    <li>
                      Some tags have special posting guidelines - double check to
                      make sure your post complies with them.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCreate;
