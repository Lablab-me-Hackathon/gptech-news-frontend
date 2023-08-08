import Welcome from "../services/main/Welcome";
import Cards from "./../services/main/Cards";

function Main() {
  return (
    <div className="text-center w-full scroll-smooth bg-gray-900">
      <div className="w-full flex-box">
          <Welcome />
      </div>

      <div className="w-full flex-box py-20">
          <Cards />
          
      </div>
    </div>
  );
}

export default Main;
