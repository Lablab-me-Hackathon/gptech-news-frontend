import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../services/home/Welcome";

function Home() {

  return (
    <div className="flex-box flex-col">
      <Header />
      <div className="w-full flex-box">
        <Welcome />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
