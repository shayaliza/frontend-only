import { GiHamburgerMenu } from "react-icons/gi";
import Points from "./points";
import ProfileIcon from "../profileicon";

const Header = ({ toggleMobileMenu }) => {
  return (
    <header
      className="bg-white fixed py-2 text-lg w-full z-50"
      style={{ boxShadow: "0 6px 16px -1px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="relative mx-auto flex justify-between items-center max-[900px]:min-h-[45px]">
        <div className=" flex items-center">
          <img
            src="/src/assets/icon.svg"
            alt="Logo"
            className="w-32 h-12 object-contain hidden md:block"
          />

          <button
            className="block min-[900px]:hidden ml-2 p-2"
            onClick={toggleMobileMenu}
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        <div className=" flex items-center mr-4">
          <div className="Icons flex items-center min-[900px]:mr-4 justify-end">
            <Points />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
