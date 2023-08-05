// import { PropTypes } from "prop-types";

import { Newspaper } from "lucide-react";

const News = () => {
  // let { response } = props;
  const displayNews = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex-col md:flex-row py-10 flex-box justify-evenly">
      <button
        type="submit"
        className="px-10 py-3.5 my-4 bg-gray-400 bg-opacity-25  text-center text-white text-base font-semibold leading-tight mx-2 rounded-lg flex-box"
        
      >
        Display News
      </button>
      <a
        href="#"
        className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
        onClick={displayNews}
      >
        Explore Now
        <Newspaper />

      </a>
    </div>
  );
};

News.propTypes = {
  // response: PropTypes.string.isRequired,
};
export default News;
