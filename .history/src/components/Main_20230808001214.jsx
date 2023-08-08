import Articles from "../services/articles/Articles";
import Welcome from "../services/main/Welcome";
import Cards from "./../services/main/Cards";

function Main() {
  return (
    <div className="text-center w-full scroll-smooth bg-gray-900">
    

      <div className="w-full flex-box py-20">
        <Cards />
      </div>

      <div className="w-full flex-box py-20">
        <Articles />
      </div>
    </div>
  );
}

export default Main;
