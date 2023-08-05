import Button from "./Button";

function Welcome() {
  return (
    <div className="bg-black w-full text-white py-5 h-full">
      <div className="container w-full flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
            Welcome in GPTechNews
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            IT News : Grow your career
          </h2>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            Explore your favorite news and register now to stay up-to-date and discover exciting articles.
          </p>
          <Button />
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="h-48 flex flex-wrap content-center">
            <div>
              <img
                className="inline-block mt-28 hidden xl:block"
                src="googleNews.jpg"
              />
            </div>
            <div>
              <img
                className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                src="goodNews.jpg"
              />
            </div>
            <div>
              <img
                className="inline-block mt-28 hidden lg:block"
                src="news.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
