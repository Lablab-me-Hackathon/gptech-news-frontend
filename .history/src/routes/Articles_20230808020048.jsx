import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './../components/Main';


function Articles() {
  return <div className="flex-box flex-col">
    <Header />
    <div className="w-full flex-box">
    <div className="text-center w-full scroll-smooth bg-gray-900">
      <div className="w-full flex-box py-20">
        <Article />
      </div>
    </div>
    </div>
    <Footer />
  </div>;
}

export default Articles;
