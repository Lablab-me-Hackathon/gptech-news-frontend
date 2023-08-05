import { PropTypes } from "prop-types";

const News = () => {
  // let { response } = props;
  const displayNews = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex-col md:flex-row py-10 flex-box justify-evenly">
      
      <button
        type="submit"
        className="px-10 py-3.5 my-4 bg-gray-400 bg-opacity-25  text-center text-white text-base font-semibold leading-tight mx-2 rounded-lg"
        onClick={displayNews}
      >
        Display News
      </button>
      
    </div>
  );
}

News.propTypes = {
  // response: PropTypes.string.isRequired,
};
export default News;
