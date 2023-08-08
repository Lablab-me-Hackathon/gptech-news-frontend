import Header from './../components/Header';
import Footer from './../components/Footer';
import Articles from '../services/articles/Articles';


function Start() {
  return <div className="flex-box flex-col">
    <Header />
    <div className="w-full flex-box py-20">
      <Articles />
    </div>
    <Articles />

  </div>;
}

export default Start;
