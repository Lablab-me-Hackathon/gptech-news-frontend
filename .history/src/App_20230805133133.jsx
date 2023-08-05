import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App h-full'>
     <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
