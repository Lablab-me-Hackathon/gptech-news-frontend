import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Faq from "./routes/FAQ";
import Articles from "./routes/Articles";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Contact from "./routes/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/articles" element={<Articles />} />

        <Route path="/about" element={<About />} />

        <Route path="/sign-up" element={<SignUp isLogin={false} />} />
        <Route path="/log-in" element={<SignUp isLogin={true} />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
