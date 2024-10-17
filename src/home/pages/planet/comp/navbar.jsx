// import React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../../../../../src/components/ui/dropdown-menu";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img
//           src="https://dummyimage.com/50x50" // Replace with the path to your logo
//           alt="AI Planet Logo"
//           className="h-8 mr-2"
//         />
//         <span className="text-lg font-bold text-green-600">
//           ai <span className="text-black">planet</span>
//         </span>
//         <span className="text-sm text-gray-500 ml-2">(formerly DPhi)</span>
//       </div>

//       {/* Links */}
//       <div className="hidden md:flex items-center space-x-4">
//         <a href="#" className="text-gray-700 hover:text-green-600">
//           AI Models
//         </a>

//         {/* Industry Dropdown */}
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <button className="text-gray-700 hover:text-green-600 focus:outline-none">
//               Industry
//             </button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2">
//             <DropdownMenuItem className="hover:bg-gray-100">
//               Healthcare
//             </DropdownMenuItem>
//             <DropdownMenuItem className="hover:bg-gray-100">
//               Finance
//             </DropdownMenuItem>
//             <DropdownMenuItem className="hover:bg-gray-100">
//               Retail
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         {/* Community Dropdown */}
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <button className="text-gray-700 hover:text-green-600 focus:outline-none">
//               Community
//             </button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2">
//             <DropdownMenuItem className="hover:bg-gray-100">
//               Blog
//             </DropdownMenuItem>
//             <DropdownMenuItem className="hover:bg-gray-100">
//               Forums
//             </DropdownMenuItem>
//             <DropdownMenuItem className="hover:bg-gray-100">
//               Events
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <a href="#" className="text-gray-700 hover:text-green-600">
//           About Us
//         </a>
//       </div>

//       {/* Right-side buttons */}
//       <div className="flex space-x-2">
//         <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100">
//           Login
//         </button>
//         <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//           Join For Free
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://dummyimage.com/50x50" // Replace with the path to your logo
          alt="AI Planet Logo"
          className="h-8 mr-2"
        />
        <span className="text-lg font-bold text-green-600">
          ai <span className="text-black">planet</span>
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-green-600">
          AI Models
        </a>

        {/* Industry Dropdown */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-green-600 focus:outline-none">
            Industry
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg border border-gray-200 mt-2">
            <div className="p-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Healthcare
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Finance
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Retail
              </a>
            </div>
          </div>
        </div>

        {/* Community Dropdown */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-green-600 focus:outline-none">
            Community
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg border border-gray-200 mt-2">
            <div className="p-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Blog
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Forums
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Events
              </a>
            </div>
          </div>
        </div>

        <a href="#" className="text-gray-700 hover:text-green-600">
          About Us
        </a>
      </div>

      {/* Right-side buttons */}
      <div className="flex space-x-2">
        <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100">
          Login
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Join For Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
