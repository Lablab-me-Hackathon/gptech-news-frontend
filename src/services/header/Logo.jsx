import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="flex-box cursor-pointer">
      {/* <img className="w-10 h-10 mx-1 rounded-md" src="logo.png" alt="logo" /> */}
      <div className="">
        <span className="text-white text-3xl font-bold font-Gugi text-firstLogo">
          GPT<span className="font-Gugi text-secondLogo">ech</span>
        </span>
        <span className="text-white text-3xl font-light font-Iceland text-thirdLogo">
          News
        </span>
      </div>
    </div>
  );
}

export default Logo;
