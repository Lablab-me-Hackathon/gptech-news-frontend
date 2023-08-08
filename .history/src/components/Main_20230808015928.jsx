import Article from "../services/articles/Article";
import Cards from "../services/about/Card";

function Main() {
  return (
    <div className="text-center w-full scroll-smooth bg-gray-900">



      <div className="w-full flex-box py-20">
        <Article />
      </div>
    </div>
  );
}

export default Main;
