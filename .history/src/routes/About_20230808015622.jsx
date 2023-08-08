import Team from "../services/about/Team";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Card from "../services/about/Card";

function About() {
  return (
    <div className="flex-box flex-col">
      <Header />
      <div className="text-center text-white h-full w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
        <h1 className="text-6xl py-10">About us</h1>
        <Card />

       
      </div>
      <div className="text-center text-white h-full w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
        

        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default About;
