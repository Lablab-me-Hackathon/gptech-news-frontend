import Explore from './Explore';

function Welcome() {

  return (
    <div className="w-full  text-white py-2 flex-box home">
      <div className="flex-box w-full flex-col md:flex-row my-6">
        <div className="text-center overflow-hidden w-full py-10 flex-box flex-col scroll-smooth">
          <div
            className="flex-box w-full overflow-hidden"
          >
            <div className="flex-box">
              <div className="px-6 text-center text-white md:px-12 ">
                <h1 className="mb-6 text-5xl lg:text-8xl font-bold drop-shadow-lg  shadow-blue-600/50">GPTechNews</h1>
                <h3 className="text-3xl font-bold md:text-5xl leading-relaxed md:leading-snug mb-2 drop-shadow-md  shadow-black">IT News : Grow your career</h3>
                <p className="text-sm md:text-base text-gray-50 drop-shadow-sm  shadow-black">Explore your favorite news and register now to stay up-to-date and discover exciting articles.</p>
                <Explore />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-box p-4">
          <div className="flex-box">
            <div className="mx-3">
              <img
                className="w-96 h-96 rounded-full mt-28 hidden xl:block"
                src="googleNews.jpg"
              />
            </div>
            <div className="mx-3">
              <img
                className="w-96 h-96 rounded-full inline-block p-8 md:p-0"
                src="goodNews.jpg"
              />
            </div>
            <div className="mx-3">
              <img
                className="w-96 h-96 rounded-full mt-28 hidden lg:block"
                src="newsPaper.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
