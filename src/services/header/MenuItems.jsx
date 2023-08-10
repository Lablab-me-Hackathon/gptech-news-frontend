// import { Contact, HelpCircle, Home, Info, Newspaper } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MenuItems() {
  const navigate = useNavigate();

  return (
    <div className="flex md:flex-row flex-col menu-item-border h-fit items-center">
      <div onClick={() => navigate("/")} className="menu-item">
        {/* <Home /> */}
        Home
      </div>
      <div onClick={() => navigate("/faq")} className="menu-item">
        {/* <HelpCircle /> */}
        FAQ
      </div>
      <div onClick={() => navigate("/articles")} className="menu-item">
        {/* <Newspaper /> */}
        Articles
      </div>
      <div onClick={() => navigate("/about")} className="menu-item">
        {/* <Info /> */}
        About
      </div>
      <div onClick={() => navigate("/contact")} className="menu-item">
        {/* <Contact /> */}
        Contact
      </div>
    </div>
  );
}

export default MenuItems;
