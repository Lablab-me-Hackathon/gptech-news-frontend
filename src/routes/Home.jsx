import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../services/home/Welcome";
import About from "../services/home/About";
import Subscription from "../services/home/Subscription";
import Contact from "../services/home/Contact";

function Home() {
  return (
    <div className="flex-box flex-col">
      <Header />
      {/* <div className="w-full flex-box flex-col"> */}
      <Welcome />
      <About />
      <Subscription />
      {/* </div> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
