import Header from "../components/Header";
import Footer from "./../components/Footer";
import Connect from '../services/contact/Connect';

function Contact() {
  return (
    <div className="flex-box flex-col w-full h-full flex-box bg-gray-900 scroll-smooth text-center">
      <Header />
      <Connect />
      <Footer />
    </div>
  );
}

export default Contact;
