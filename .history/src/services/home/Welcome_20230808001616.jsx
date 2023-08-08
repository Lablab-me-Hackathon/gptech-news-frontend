import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="bg-black w-full text-white py-2 flex-box ">
      <div className="w-full flex-box flex-col md:flex-row my-6">
      <div className="text-center h-screen overflow-hidden bg-cover bg-no-repeat w-full py-10 flex-box flex-col scroll-smooth">
        <div
          className="h-full w-full overflow-hidden bg-fixed"
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">GPTechNews</h1>
              <h2 className="text-3xl font-bold md:text-5xl leading-relaxed md:leading-snug mb-2">IT News : Grow your career</h2>
              <p className="text-sm md:text-base text-gray-50">Explore your favorite news and register now to stay up-to-date and discover exciting articles.</p>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => navigate("/start")} 
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className="flex-box p-8">
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
