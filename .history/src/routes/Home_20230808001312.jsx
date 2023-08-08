import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Welcome from "../services/home/Welcome";

function Home() {
  const navigate = useNavigate();

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
