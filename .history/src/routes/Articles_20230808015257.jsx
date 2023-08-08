import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../services/articles/Article';
import Main from './../components/Main';


function Articles() {
  return <div className="flex-box flex-col">
    <Header />
    <div className="w-full flex-box">
      <Main />
    </div>
    <Footer />
  </div>;
}

export default Articles;
