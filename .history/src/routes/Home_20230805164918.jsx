function Home() {
import Header from './../components/Header';

  return (
    <div className='w-full h-full flex-box flex-col'>
     <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
