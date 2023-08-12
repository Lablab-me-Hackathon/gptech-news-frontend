import { useNavigate } from "react-router-dom";

const HomeButton = ({ customstyles }) => {
  const navigate = useNavigate();

  return (
    <div className="my-8 w-full flex-box text-center borderrounded-md shadow-md hover:shadow-red shadowred">
      <a
        href="#"
        className={`${customstyles}`}
        onClick={() => navigate("/articles")}
      >
        <p className="pl-3 p-4">Explore Now</p>
      </a>
    </div>
  );
};

export default HomeButton;
