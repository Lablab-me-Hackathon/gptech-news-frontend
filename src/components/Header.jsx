import MenuItems from "../services/header/MenuItems";
import Sign from "../services/header/Sign";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./../services/header/Logo";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const textColorStyle = {
    color: "rgba(124, 124, 124, 1)",
  };
  return (
    <div className="bg-black flex-box px-[95px] sm:flex-row lg:flex-row  justify-between w-full py-5 text-center h-fit ">
      <Logo />
      {/* <div className="hidden md:block"></div> */}
      <div className="hidden md:flex h-fit items-center">
        <MenuItems textColorStyle={textColorStyle} />
        <Sign isRegister={true} textColorStyle={textColorStyle} />
        <Sign isRegister={false} textColorStyle={textColorStyle} />
      </div>
      <div
        className="text-white border p-2 rounded-md hover:text-blue-950 hover:bg-white cursor-pointer block md:hidden"
        onClick={() => {
          setMenuOpen((open) => !open);
        }}
      >
        <Menu />
        <div className="absolute top-20 left-0 bg-gray-950 flex-box flex-col pb-3 w-full z-40">
          {menuOpen ? (
            <>
              {" "}
              <MenuItems /> <Sign />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
