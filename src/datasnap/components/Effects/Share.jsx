import React, { useMemo, memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UserList from "./SendProfile";
import {
  Ban,
  Share2,
  BookmarkPlus,
  Plus,
  Flag,
  BookOpenCheck,
  ShareIcon,
  Share2Icon,
  MessageCircle,
} from "lucide-react";
import { BiCopy, BiLogoGmail, BiLogoWhatsapp, BiRepost } from "react-icons/bi";
import image1 from "../../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";

const baseImages = [image1, image2, image3, image4];

const ProfileImage = memo(({ src, index }) => (
  <img
    src={src}
    alt={`Profile ${index}`}
    className="inline-block w-16 h-16 object-cover rounded-full border-4 border-blue-600 shadow-md mr-2"
    loading="lazy"
  />
));

const Share = ({ isOpen, onClose }) => {
  const images = useMemo(() => {
    return baseImages.reduce(
      (acc, img) => [...acc, ...Array(10).fill(img)],
      []
    );
  }, []);


  const [isSendProfileOpen, setIsSendProfileOpen] = useState(false);

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black rounded-t-3xl z-30"
            style={{height:"75vh"}}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="p-4">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
              <div className="flex flex-col w-full px-2 mb-4">
                <button className="flex items-center w-full p-3 rounded-lg bg-gray-300 hover:bg-gray-400 mb-2 transition text-black">
                  <BiRepost className="w-5 h-5 mr-3" />
                  <span>Repost</span>
                </button>

                <button className="flex items-center w-full p-3 rounded-lg bg-gray-300 hover:bg-gray-400 mb-2 transition text-black">
                  <BookOpenCheck className="w-5 h-5 mr-3" />
                  <span>Repost with your thoughts</span>
                </button>
              </div>
              <div className="flex flex-col space-y-4 mb-6">
                <h1 className="text-lg font-semibold">Send as Message</h1>
                <div
                  id="search"
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full p-2"
                  onClick={()=>setIsSendProfileOpen(true)}
                >
                  Search here...
                </div>
                <div className="w-full flex flex-col">
                  <div className="flex overflow-x-auto whitespace-nowrap ds-scrollbar space-x-2">
                    {images.map((src, index) => (
                      <div key={index} className="flex flex-col flex-shrink-0 items-center">
                        <ProfileImage src={src} index={index} />
                        <span className="text-sm mt-2 mr-2">User</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t overflow-x- py-4 text-black dark:text-white">
                <div className="flex flex-col items-center ">
                  <button className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-black mb-2 transition">
                    <Share2Icon className="w-5 h-5" />
                  </button>
                  <span>Repost</span>
                </div>
                <div className="flex flex-col items-center ">
                  <button className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-black mb-2 transition">
                    <BiCopy className="w-5 h-5" />
                  </button>
                  <span>Copy link</span>
                </div>
                <div className="flex flex-col items-center ">
                  <button className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-black mb-2 transition">
                    <BiLogoWhatsapp className="w-5 h-5" />
                  </button>
                  <span>Whatsapp</span>
                </div>
                <div className="flex flex-col items-center ">
                  <button className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-black mb-2 transition">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <span>Messages</span>
                </div>
                <div className="flex flex-col items-center ">
                  <button className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-black mb-2 transition">
                    <BiLogoGmail className="w-5 h-5" />
                  </button>
                  <span>Mail</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    {isSendProfileOpen && (
  <UserList isOpen={isSendProfileOpen} onClose={() => setIsSendProfileOpen(false)} />
)}

    </>
  );
};

export default Share;
