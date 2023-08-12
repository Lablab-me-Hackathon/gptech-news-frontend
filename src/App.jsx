import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Faq from "./routes/FAQ";
import Articles from "./routes/Articles";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import Contact from "./routes/Contact";
import Chatbot from "./routes/Chatbot";
import { Bot } from "lucide-react";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp isLogin={false} />} />
          <Route path="/log-in" element={<SignUp isLogin={true} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>

        <NavigateToChatbotButton />
      </div>
    </Router>
  );
}

function NavigateToChatbotButton() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        padding: "20px",
        zIndex: 1,
      }}
    >
      <Bot
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/chatbot")}
        className="bg-white rounded-full w-[50px] h-[50px] p-1 border  border-white"
      />
      {/* <img src="/logo.png" alt="Icon" width="50" height="50" /> */}
    </div>
  );
}

export default App;
