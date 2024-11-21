import React, { useState, useMemo, memo } from "react";
import { FaTimes, FaSearch, FaCheck, FaPaperclip } from "react-icons/fa";
import image1 from "../../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";

const ProfileImage = memo(({ src, name, isPinned = false }) => (
  <div className={`relative inline-block ${isPinned ? 'border-2 border-blue-500 rounded-full' : ''}`}>
    <img
      src={src}
      alt={name}
      className="w-16 h-16 object-cover rounded-full shadow-md"
      loading="lazy"
    />
    {isPinned && (
      <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
        <FaPaperclip className="w-3 h-3" />
      </div>
    )}
  </div>
));

const users = [
  { id: 1, photo: image1, name: "Soniya Pise", title: "Senior Engineer at Zeitview", isPinned: true },
  { id: 2, photo: image2, name: "Devansh Dubey", title: "Software Engineer @Zeitview", isPinned: true },
  { id: 3, photo: image3, name: "Charan Guggulla", title: "M.Tech CS @ IIT Bombay | ISRO-2019",isPinned: true },
  { id: 4, photo: image4, name: "Anusheel", title: "Software Engineer II @Walmart Global",isPinned: true },
  { id: 5, photo: image2, name: "Paduni G", title: "HR Data Analytics | Data Administration",isPinned: true },
  { id: 6, photo: image3, name: "Tripti Kariwal", title: "10k+ Followers | Passionate HR Professional" },
  { id: 7, photo: image1, name: "Akshay P", title: "Frontend Developer | UI/UX | Python" },
  { id: 8, photo: image4, name: "Dhanush Chowdary", title: "--" },
  { id: 9, photo: image3, name: "Dhanush Chowdary Nathani", title: "Student at VIT" },
  { id: 10, photo: image1, name: "Shanmukha Reddy Vasa", title: "--" },
  { id: 11, photo: image4, name: "Rutvik", title: "--" },
];

const UserList = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [checkedUsers, setCheckedUsers] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = (id) => {
    setCheckedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.title.toLowerCase().includes(search.toLowerCase())
  );

  const pinnedUsers = users.filter(user => user.isPinned);
  const nonPinnedUsers = users.filter(user => !user.isPinned);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 bg-gray-50 dark:bg-black flex flex-col">
          <div className="sticky top-0 z-40 bg-gray-50 dark:bg-black shadow-sm">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-xl font-semibold tracking-tight">Send as Message</h1>
              <button onClick={onClose} className="p-2">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="relative px-4 pb-4">
              <FaSearch className="absolute left-8 top-6 transform -translate-y-1/2 pointer-events-none " />
              <input
                type="text"
                placeholder="Search users by name or title"
                className="w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 transition-all bg-transparent border rounded-full"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">

            {pinnedUsers.length > 0 && (
              <div className="px-4 py-2 bg-gray-100 dark:bg-black">
                <h2 className="text-lg font-semibold mb-2">Pinned Chats</h2>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {pinnedUsers.map((user) => (
                    <div key={user.id} className="flex flex-col items-center space-y-2 flex-shrink-0">
                      <ProfileImage src={user.photo} name={user.name} isPinned={true} />
                      <span className="text-xs truncate max-w-16">{user.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="px-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between py-3 space-x-4 group"
                  onClick={() => handleCheckboxChange(user.id)}
                >
                  <div className="flex items-center space-x-4 flex-grow">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow min-w-0">
                      <p className="font-medium truncate">{user.name}</p>
                      <p className="text-sm truncate">{user.title}</p>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all border ${
                      checkedUsers.includes(user.id)
                        ? "bg-opacity-100"
                        : "bg-opacity-0"
                    }`}
                  >
                    {checkedUsers.includes(user.id) && <FaCheck className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {checkedUsers.length > 0 && (
            <div className="p-4 sticky bottom-0 bg-gray-50 dark:bg-black shadow-lg">
              <button className="w-full py-3 rounded-lg focus:outline-none focus:ring-2 transition-all border">
                Send to {checkedUsers.length} User{checkedUsers.length !== 1 ? "s" : ""}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserList;