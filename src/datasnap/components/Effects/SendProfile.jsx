import React, { useState } from "react";
import img from "../../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import { FaTimes } from "react-icons/fa";

const users = [
  { id: 1, photo: img, name: "Soniya Pise", title: "Senior Engineer at Zeitview" },
  { id: 2, photo: img, name: "Devansh Dubey", title: "Software Engineer @Zeitview" },
  { id: 3, photo: img, name: "Charan Guggulla", title: "M.Tech CS @ IIT Bombay | ISRO-2019" },
  { id: 4, photo: img, name: "Anusheel", title: "Software Engineer II @Walmart Global" },
  { id: 5, photo: img, name: "Paduni G", title: "HR Data Analytics | Data Administration" },
  { id: 6, photo: img, name: "Tripti Kariwal", title: "10k+ Followers | Passionate HR Professional" },
  { id: 7, photo: img, name: "Akshay P", title: "Frontend Developer | UI/UX | Python" },
  { id: 8, photo: img, name: "Dhanush Chowdary", title: "--" },
  { id: 9, photo: img, name: "Dhanush Chowdary Nathani", title: "Student at VIT" },
  { id: 10, photo: img, name: "Shanmukha Reddy Vasa", title: "--" },
  { id: 11, photo: img, name: "Rutvik", title: "--" },
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

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-50 dark:bg-black overflow-auto min-h-screen z-50">
          <div className="sticky top-0 bg-gray-50 dark:bg-black px-4 py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold">Send as Message</h1>
              <button className="" onClick={onClose}>
                <FaTimes/>
              </button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type a name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 bg-transparent"
                value={search}
                onChange={handleSearch}
              />
            </div>
            <h2 className="font-medium mt-6 mb-2">Suggested</h2>
          </div>
          <div className="px-4">
            <ul className="space-y-4 mt-2">
              {filteredUsers.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-lg shadow"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.photo}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm ">{user.title}</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
          {checkedUsers.length > 0 && (
            <div className="sticky bottom-4 left-0 right-0 shadow p-4 z-10">
              <button className="w-full bg-blue-600 py-2 rounded-lg">
                Send to {" "} {checkedUsers.length}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserList;
