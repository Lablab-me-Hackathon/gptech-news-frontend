import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../services/main/Article";
import News from "../services/main/News";
import Blog from "../services/main/Blog";
import Post from "../services/main/Post";

function Articles() {
  return (
    <div className="flex-box flex-col">
      <Header />
      <div className="w-full flex-box">
        <div className="text-center w-full scroll-smooth bg-gray-900">
          <div className="w-full flex-box py-20">
            <News />
          </div>

          <div className="w-full flex-box py-20">
            <Article />
          </div>
          <div className="w-full flex-box py-20">
            <Post />
          </div>
          <div className="w-full flex-box py-20">
            <Blog />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
