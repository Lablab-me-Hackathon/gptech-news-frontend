import Button from "./Button";

function Welcome() {
  return (
    <div className="bg-black w-full text-white py-2 flex-box">
      <div className="w-full flex-box flex-col md:flex-row my-12">
        <div className="w-full lg:w-1/3 items-start p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
            Welcome in GPTechNews
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            IT News : Grow your career
          </h2>
          <p className="text-sm md:text-base text-gray-50">
            Explore your favorite news and register now to stay up-to-date and
            discover exciting articles.
          </p>
          <Button />
        </div>
        <div className="flex-box p-8">
          <div className="flex-box">
            <div className="m-3">
              <img
                className="w-96 h-96 rounded-full mt-28 hidden xl:block"
                src="googleNews.jpg"
              />
            </div>
            <div className="m-3">
              <img
                className="w-96 h-96 rounded-full inline-block mt-24 md:mt-0 p-8 md:p-0"
                src="goodNews.jpg"
              />
            </div>
            <div className="m-3">
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
