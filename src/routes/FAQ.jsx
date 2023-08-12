import Footer from "../components/Footer";
import Header from "./../components/Header";
import Article from "../services/articles/Article";

function Faq() {
  return (
    <div className="flex-box flex-col">
      <Header />
      <div className="text-center text-white h-screen  w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
        <div className="w-full flex flex-row">
          <div className="text-center w-full scroll-smooth bg-gray-900">
            <div className="w-full flex-box py-20 flex-row">
              <Article />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
