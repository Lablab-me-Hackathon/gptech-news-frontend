import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    <div className='w-full h-full flex flex-col '>
     <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
