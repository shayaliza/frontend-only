import React from 'react';
import profileImg from '../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg';
import articleImg from '../assets/rsc/image2.png';
import { useTheme } from '../../DarkMode/ThemeProvider';

const Bookmarks = () => {
  const {theme} = useTheme();
  return (
    <div className="p-4 sm:p-8">
      <div className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl text-white font-bold mb-2">Bookmarks</h2>
          <p className="text-white text-lg">All articles you have bookmarked on Hashnode</p>
        </div>
        <div className={`p-4 sm:p-6 border border-gray-200 ${theme == 'dark' ? 'bg-black text-white' : "bg-gray-800 text-gray-300"} rounded-lg`}>
          <div className="flex flex-col sm:flex-row items-start mb-4">
            <img src={profileImg} alt="" className="w-16 h-16 object-cover rounded-full border-2 border-blue-600 mb-4 sm:mb-0 sm:mr-4" />
            <div>
              <h4 className="text-lg text-white font-medium">
                <a href="" className="hover:underline">Simon Egersand 🎈</a>
              </h4>
              <p className="text-gray-200">
                prplcode.hashnode.dev &nbsp;·&nbsp; Jul 2, 2022
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
            <div className="flex-1 pr-0 sm:pr-4">
              <h3 className="text-xl text-gray-200 font-semibold">Write Git Commit Messages That Your Colleagues Will Love</h3>
              <p className="text-gray-200 mt-2">Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit message is essential...</p>
            </div>
            <img src={articleImg} alt="" className="w-full sm:w-32 h-auto sm:h-32 object-cover rounded-lg shadow-md mt-4 sm:mt-0" />
          </div>
          <div className="text-gray-200">
            <span>Tags:</span> 
            <span className="ml-2 border border-gray-300 px-2 py-1 rounded">Javascript</span>
            <span className="ml-2 border border-gray-300 px-2 py-1 rounded">Git</span>
            <span className="ml-2 border border-gray-300 px-2 py-1 rounded">+1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
