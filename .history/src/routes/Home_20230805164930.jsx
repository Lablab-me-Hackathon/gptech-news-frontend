function Home() {
import Header from './../components/Header';
import Main from './../components/Main';

  return (
    <div className='w-full h-full flex-box flex-col'>
     <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
