// import { PropTypes } from "prop-types";

import { Newspaper } from "lucide-react";

const E = () => {
  // let { response } = props;
  const displayNews = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex-box py-10">
      <a
        href="#"
        className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent flex-box"
        onClick={displayNews}
      >
        <p>Explore Now &nbsp;</p> 
        <Newspaper />
      </a>
    </div>
  );
};

News.propTypes = {
  // response: PropTypes.string.isRequired,
};
export default E;
