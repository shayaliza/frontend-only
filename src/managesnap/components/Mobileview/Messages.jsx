import React, { useState, useEffect, useMemo, useCallback } from "react";
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import img3 from "../../assets/man3.jpg";
import img4 from "../../assets/women1.jpg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../DarkMode/ThemeProvider";

const contacts = [
  {
    id: 1,
    name: "Vignesh",
    src: img1,
    isActive: true,
    lastMessage: "this message is redirected from user",
    lastSeen: "1m",
  },
  {
    id: 2,
    name: "John",
    src: img2,
    isActive: false,
    lastMessage: "Hey, how are you?",
    lastSeen: "5m",
  },
  {
    id: 3,
    name: "Alice",
    src: img3,
    isActive: true,
    lastMessage: "Can we reschedule our meeting?",
    lastSeen: "10m",
  },
  {
    id: 4,
    name: "Bob",
    src: img4,
    isActive: true,
    lastMessage: "Just sent you the files.",
    lastSeen: "15m",
  },
  {
    id: 5,
    name: "Charlie",
    src: img1,
    isActive: false,
    lastMessage: "Thanks for your help!",
    lastSeen: "20m",
  },
  {
    id: 6,
    name: "David",
    src: img2,
    isActive: true,
    lastMessage: "Let's catch up soon.",
    lastSeen: "25m",
  },
  {
    id: 7,
    name: "Eva",
    src: img1,
    isActive: true,
    lastMessage: "Did you get my email?",
    lastSeen: "30m",
  },
  {
    id: 8,
    name: "Frank",
    src: img3,
    isActive: false,
    lastMessage: "Looking forward to our next project.",
    lastSeen: "35m",
  },
  {
    id: 9,
    name: "Grace",
    src: img1,
    isActive: true,
    lastMessage: "Great job on the presentation!",
    lastSeen: "40m",
  },
  {
    id: 10,
    name: "Hank",
    src: img2,
    isActive: false,
    lastMessage: "I'm running late, see you soon.",
    lastSeen: "45m",
  },
  {
    id: 11,
    name: "Ivy",
    src: img4,
    isActive: true,
    lastMessage: "Let me know if you need anything.",
    lastSeen: "50m",
  },
  {
    id: 12,
    name: "Jack",
    src: img2,
    isActive: true,
    lastMessage: "Have a nice weekend!",
    lastSeen: "55m",
  },
  {
    id: 13,
    name: "Kara",
    src: img1,
    isActive: false,
    lastMessage: "Can you review this document?",
    lastSeen: "1h",
  },
  {
    id: 14,
    name: "Leo",
    src: img4,
    isActive: true,
    lastMessage: "I'll call you later.",
    lastSeen: "1h",
  },
  {
    id: 15,
    name: "Mona",
    src: img3,
    isActive: true,
    lastMessage: "Don't forget the meeting at 3 PM.",
    lastSeen: "1h 5m",
  },
  {
    id: 16,
    name: "Nina",
    src: img2,
    isActive: false,
    lastMessage: "Good luck with your exam!",
    lastSeen: "1h 10m",
  },
  {
    id: 17,
    name: "Oscar",
    src: img4,
    isActive: true,
    lastMessage: "Thanks for the update.",
    lastSeen: "1h 15m",
  },
  {
    id: 18,
    name: "Paul",
    src: img2,
    isActive: true,
    lastMessage: "Can you send me the details?",
    lastSeen: "1h 20m",
  },
  {
    id: 19,
    name: "Quinn",
    src: img3,
    isActive: false,
    lastMessage: "Let's schedule a call.",
    lastSeen: "1h 25m",
  },
  {
    id: 20,
    name: "Rita",
    src: img2,
    isActive: true,
    lastMessage: "I'll get back to you soon.",
    lastSeen: "1h 30m",
  },
];

function DirectMessages() {
  const navigate = useNavigate();
  const [lastOpenedDM, setLastOpenedDM] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const storedLastOpenedDM = localStorage.getItem("lastOpenedDM");
    if (storedLastOpenedDM) {
      setLastOpenedDM(Number(storedLastOpenedDM));
    }
    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      setScrollPosition(Number(storedScrollPosition));
    }
  }, []);

  const memoizedContacts = useMemo(() => contacts, []);

  const handleContactClick = useCallback(
    (contact) => {
      setLastOpenedDM(contact.id);
      localStorage.setItem("lastOpenedDM", contact.id);
      setScrollPosition(window.scrollY);
      localStorage.setItem("scrollPosition", window.scrollY);
      navigate(`/managesnap/chat/dm/${contact.id}`, {
        state: {
          img: contact.src,
          name: contact.name,
          lastMessage: contact.lastMessage,
          chatId: contact.id,
          chatType: "dm",
        },
      });
    },
    [navigate]
  );

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  return (
    <div className={`flex ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
      <div className="p-2 flex flex-col space-y-1 overflow-x-auto">
        <h1 className="text-xl font-bold my-1 pl-3">Direct Messages</h1>
        <div className="overflow-x-auto p-2">
          <div className="flex space-x-4">
            {memoizedContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex-shrink-0 w-20 h-20 shadow-lg rounded-lg flex flex-col justify-center items-center border border-gray-500"
              >
                <div className="relative">
                  <img
                    src={contact.src}
                    alt={contact.name}
                    className="w-12 h-12 object-cover rounded-full border border-gray-500"
                  />
                  <span
                    className={`absolute bottom-0 right-2 w-3 h-3 rounded-full ${
                      contact.isActive ? "bg-green-500" : "bg-red-600"
                    }`}
                  />
                </div>
                <span className="text-xs mt-1 text-center">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-y-auto">
          {memoizedContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-start space-x-4 p-2 rounded-lg cursor-pointer ${
                contact.id === lastOpenedDM ? "bg-zinc-600 text-gray-100" : ""
              }`}
              onClick={() => handleContactClick(contact)}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={contact.src}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                    contact.isActive ? "bg-green-500" : "bg-red-600"
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between space-x-2">
                  <span className="font-semibold">{contact.name}</span>
                  <span className="text-xs">{contact.lastSeen}</span>
                </div>
                <div className="mt-1">{contact.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DirectMessages;
