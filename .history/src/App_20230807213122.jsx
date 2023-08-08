import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/start" element={<Start />} />

        <Route path="/about" element={<About />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
