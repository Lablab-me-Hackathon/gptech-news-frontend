import { PropTypes } from "prop-types";

const Feed = ({ title, link, date, image, author, description }) => {
  // let formatDate = { day: 'numeric', mounth: 'long', year: 'numeric' }
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let articleDate = new Date(date).toLocaleDateString("en-US", options);

  return (
    <div className="w-full mx-3 mb-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 cursor-pointer">
      <div className="rounded-t-lg">
        {image ? <img className="" src={image} alt="" /> : ""}
      </div>
      <div className="p-6 mx-3 mt-6 flex  flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <h3 className="text-xl mb-1 underline decoration-blue-400 font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">
          {title}
        </h3>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {articleDate}
        </p>
        <span className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          {author}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 hover:text-orange-500"
        >
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
        </a>
      </div>
    </div>
  );
};

Feed.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
};

export default Feed;
