import Header from './../components/Header';
import Footer from './../components/Footer';
import Articles from '../services/articles/Articles';


function Start() {
  return <div className="flex-box flex-col">
    <Header/>
    <Articles />
    <Footer/> 
    </div>;
}

export default Start;
