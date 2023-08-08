import MenuItems from "../services/header/MenuItems";
import Sign from "../services/header/Sign";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from './../services/header/Logo';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex-box px-4 sm:flex-row lg:flex-row  justify-between w-full py-2 bg-gray-950 text-center">
      <Logo />
      <div className="hidden md:block">
        <MenuItems />
      </div>
      <div className="hidden md:block">
        <Sign />
      </div>
      <div
        className="text-white border p-2 rounded-md hover:text-blue-950 hover:bg-white cursor-pointer block md:hidden"
        onClick={() => {
          setMenuOpen((open) => !open);
        }}
      >
        <Menu />

      </div>
      <div className="absolute top-20 left-0 bg-gray-950 flex-box flex-col pb-8 w-full">
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
  );
}

export default Header;
