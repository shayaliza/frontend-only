import React, { useState } from "react";

function FirstPost() {
  const [showMore, setShowMore] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [activeReplyId, setActiveReplyId] = useState(null); // State for active reply

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleReplyClick = (id) => {
    setActiveReplyId(activeReplyId === id ? null : id);
  };

  return (
    <div>
      <div
        className="post_box p-4 shadow-lg my-8 rounded w-[555px] min-[1400px]:w-[650px] max-[500px]:w-full mx-auto"
        style={{ fontFamily: "Nunito" }}
      >
        <div className="avater_section flex items-center justify-between">
          <div className="profile flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="/src/assets/profile.png"
              alt="profile"
            />
            <div className="name">
              <p className="font-bold">Alan Biju</p>
              <span className="text-gray-600 text-xs">TechSnap DevOps</span>
            </div>
          </div>
          <div className="more cursor-pointer text-4xl">...</div>
        </div>
        <div className="para mt-5 text-sm">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            reprehenderit minima dolorem deleniti consequatur quas, alias quis.
            Quam quo harum inventore, hic rerum ab. Laudantium numquam inventore
            iste provident labore!
          </p>
          <button
            className="text-blue-500 cursor-pointer"
            onClick={handleSeeMoreClick}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
        <div className="relative">
          <div className="photo cursor-pointer mt-5 swiper mySwiper">
            <div className="swiper-wrapper min-h-[400px]">
              <img
                className="w-full h-auto swiper-slide object-contain bg-[#e1e1e1]"
                src="/src/assets/banner.png"
                alt="banner"
              />
            </div>
          </div>
        </div>
        <div className="post_tages pl-0 flex items-center justify-between p-4">
          <div className="tags_box flex">
            <div className="tags bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
              React Js
            </div>
            <div className="tags bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              React Js
            </div>
          </div>
          <div className="time text-sm">
            <p className="text-gray-600">posted 3 Jan</p>
          </div>
        </div>
        <div className="post_icon_conatiner p-4 max-[500px]:p-0">
          <div className="post_icons justify-between flex items-center">
            <div className="icon flex items-center mr-4 cursor-pointer">
              <span id="heart" className="mr-2">
                <i className="fa fa-heart-o text-xl"></i>
              </span>
              <span className="text-gray-600 max-[500px]:hidden">Like</span>
            </div>
            <div
              className="icon comment_icon flex items-center mr-4 cursor-pointer"
              onClick={handleCommentClick}
            >
              <img
                className="w-6 h-6 mr-2"
                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"
                alt="comment icon"
              />
              <span className="text-gray-600 max-[500px]:hidden">Comment</span>
            </div>
            <div className="icon flex items-center mr-4 cursor-pointer">
              <span className="mr-2"> </span>
              <span id="bookmark" className="mr-2">
                <i className="fa fa-bookmark-o text-xl"></i>
              </span>
              <span className="text-gray-600 max-[500px]:hidden">Bookmark</span>
            </div>
            <div className="icon flex items-center cursor-pointer">
              <img
                className="w-6 h-6 mr-2"
                src="https://cdn-icons-png.flaticon.com/512/25/25419.png"
                alt="share icon"
              />
              <span className="text-gray-600 max-[500px]:hidden">Share</span>
            </div>
          </div>
        </div>
        {showComments && (
          <div className="comment_section p-4 max-[900px]:p-0">
            <div className="comment_input1 flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/src/assets/profile.jpg"
                alt="profile"
              />
              <input
                className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300"
                type="text"
                name="comment"
                placeholder="Write a comment..."
              />
            </div>

            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]">
              Submit
            </button>

            <div className="comments_box w-full max-[900px]:px-[5px] mt-4">
              <div className="comment mb-4">
                <div className="main_comment flex flex-col overflow-hidden">
                  <div className="main_info flex-1 flex">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="/src/assets/profile.jpg"
                      alt="profile"
                    />
                    <div className="flex flex-col">
                      <div className="comment_info max-[900px]:text-sm bg-gray-200 p-[10px] rounded-lg">
                        <div className="comment_name flex items-center mb-2">
                          <p className="font-bold mr-2 text-sm">Alan Biju</p>
                          <span className="text-gray-600 text-xs">
                            Developer
                          </span>
                        </div>
                        <div className="para mb-2 text-sm">
                          <p className="text-gray-700">
                            Thank you Nuseir Yassin for taking us this through
                            this amazing Odyssey 💕👌😊, surreal experience and
                            Dubai has done it again a giant time
                            capsule.........Yet again millenials will throng the
                            Booking counters eager to catch a
                          </p>
                        </div>
                      </div>
                      <div className="likes flex items-center mb-4 text-xs">
                        <span className="mr-2">Like . 51 ||</span>
                        <span
                          className="comment_reply_btn text-blue-500 cursor-pointer"
                          onClick={() => handleReplyClick(1)}
                        >
                          Reply
                        </span>
                      </div>
                      {activeReplyId === 1 && (
                        <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                          <img
                            className="w-8 h-8 rounded-full mr-4"
                            src="/src/assets/profile.jpg"
                            alt="profile"
                          />
                          <input
                            className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Write a reply..."
                          />
                          <button
                            id="submit_comment"
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sub_comment max-[900px]:text-sm ml-[50px] max-[900px]:ml-[30px] max-[900px]:w-full flex mb-4">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="/src/assets/profile.jpg"
                      alt="profile"
                    />
                    <div className="flex flex-col bg-white">
                      <div className="main_info flex-1 bg-gray-200 p-2 rounded-lg">
                        <div className="comment_info">
                          <div className="comment_name flex flex-col justify-center mb-2">
                            <div className="flex">
                              <p className="font-bold mr-2 text-sm">
                                Alan Biju
                              </p>
                              <span className="text-gray-600 text-xs">
                                Developer
                              </span>
                            </div>
                            <span className="text-gray-600 text-xs">
                              Replying to @lorem
                            </span>
                          </div>
                          <div className="para mb-2 text-sm">
                            <p className="text-gray-700">
                              Thank you Nuseir Yassin for taking us this through
                              this amazing Odyssey 💕👌😊, surreal experience
                              and Dubai has done it again a giant time
                              capsule.........Yet again millenials will throng
                              the Booking counters eager to catch a
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="likes flex items-center mb-4 text-xs">
                        <span className="mr-2">Like . 51 ||</span>
                        <span
                          className="comment_reply_btn text-blue-500 cursor-pointer"
                          onClick={() => handleReplyClick(2)} // Unique ID for the comment
                        >
                          Reply
                        </span>
                      </div>
                      {activeReplyId === 2 && ( // Show input only if activeReplyId matches
                        <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                          <img
                            className="w-8 h-8 rounded-full mr-4"
                            src="/src/assets/profile.jpg"
                            alt="profile"
                          />
                          <input
                            className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Write a reply..."
                          />
                          <button
                            id="submit_comment"
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sub_sub_comment max-[900px]:text-sm ml-[95px] max-[900px]:ml-[70px] max-[900px]:w-full flex mb-4">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="/src/assets/profile.jpg"
                      alt="profile"
                    />
                    <div className="flex flex-col bg-white">
                      <div className="main_info flex-1 bg-gray-200 p-2 rounded-lg">
                        <div className="comment_info">
                          <div className="comment_name flex flex-col justify-center mb-2">
                            <div className="flex">
                              <p className="font-bold mr-2 text-sm">
                                Alan Biju
                              </p>
                              <span className="text-gray-600 text-xs">
                                Developer
                              </span>
                            </div>
                            <span className="text-gray-600 text-xs">
                              Replying to @lorem
                            </span>
                          </div>
                          <div className="para mb-2 text-sm">
                            <p className="text-gray-700">Thank You</p>
                          </div>
                        </div>
                      </div>
                      <div className="likes flex items-center mb-4 text-xs">
                        <span className="mr-2">Like . 51 ||</span>
                        <span
                          className="comment_reply_btn text-blue-500 cursor-pointer"
                          onClick={() => handleReplyClick(3)} // Unique ID for the comment
                        >
                          Reply
                        </span>
                      </div>
                      {activeReplyId === 3 && ( // Show input only if activeReplyId matches
                        <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                          <img
                            className="w-8 h-8 rounded-full mr-4"
                            src="/src/assets/profile.jpg"
                            alt="profile"
                          />
                          <input
                            className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Write a reply..."
                          />
                          <button
                            id="submit_comment"
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment mb-4">
                <div className="main_comment flex flex-col overflow-hidden"></div>
              </div>
              <div className="comment mb-4">
                <div className="main_comment flex flex-col overflow-hidden">
                  {show1 && (
                    <div className="main_info flex-1 flex">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="/src/assets/profile.jpg"
                        alt="profile"
                      />
                      <div className="flex flex-col">
                        <div className="comment_info max-[900px]:text-sm bg-gray-200 p-[10px] rounded-lg">
                          <div className="comment_name flex items-center mb-2">
                            <p className="font-bold mr-2 text-sm">Alan Biju</p>
                            <span className="text-gray-600 text-xs">
                              Developer
                            </span>
                          </div>
                          <div className="para mb-2 text-sm">
                            <p className="text-gray-700">Ur right bro</p>
                          </div>
                        </div>
                        <div className="likes flex items-center mb-4 text-xs">
                          <span className="mr-2">Like . 51 ||</span>
                          <span
                            className="comment_reply_btn text-blue-500 cursor-pointer"
                            onClick={() => handleReplyClick(5)} // Unique ID for the comment
                          >
                            Reply
                          </span>
                        </div>
                        {activeReplyId === 5 && ( // Show input only if activeReplyId matches
                          <div className="comment_input max-[900px]:text-sm reply flex items-center mb-4">
                            <img
                              className="w-8 h-8 rounded-full mr-4"
                              src="/src/assets/profile.jpg"
                              alt="profile"
                            />
                            <input
                              className="flex-1 bg-white rounded-full px-4 py-2 border border-gray-300 max-[900px]:w-[50%]"
                              type="text"
                              name="comment"
                              id="comment"
                              placeholder="Write a reply..."
                            />
                            <button
                              id="submit_comment"
                              className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-[10%]"
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setShow1(!show1)}
                    class="mt-2 text-blue-500 w-full m-auto "
                  >
                    {show1 ? "Show Less" : "Show More"}
                  </button>
                </div>
                <button class="loadMorebutton bg-blue-500 text-white px-2 py-1 rounded-lg">
                  Load More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FirstPost;
