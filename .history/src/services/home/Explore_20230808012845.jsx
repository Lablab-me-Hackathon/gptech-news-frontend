import { useNavigate } from "react-router-dom";
import { Newspaper } from "lucide-react";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex-box py-10">
      <a
        href="#"
        className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent flex-box"
        onClick={() => navigate("/start")}
      >
        <p>Explore Now &nbsp;</p> 
        <Newspaper />
      </a>
    </div>
  );
};


export default Explore;
