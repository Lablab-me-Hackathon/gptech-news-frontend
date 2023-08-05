import Welcome from "../services/main/Welcome";
import Cards from "./../services/main/Cards";

function Main() {
  return (
    <div className="text-center w-full scroll-smooth bg-gray-900">
      <div className="w-full flex-box">
        <div className="w-full flex-box flex-col">
          <Welcome />
        </div>
      </div>

      <div className="w-full flex-box">
        <div className="flex-box flex-col">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Main;
