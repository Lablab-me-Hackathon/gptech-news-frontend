import MenuItems from "../services/header/MenuItems";
import Logo from "../services/header/Logo";
import SignUp from "../services/header/SignUp";

// import "../styles/Header.css";

function Header() {
  return (
    <div className="header flex-box px-2 justify-around flex-col md:flex-row w-full h-full py- bg-gray-950 text-center">
      <Logo />
      <MenuItems />
      <SignUp />
    </div>
  );
}

export default Header;
