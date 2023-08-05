function Cards() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="ainews.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            It's an application to track and scrap IT news from different
            sources like Dev.to & Medium And adding a chatbot in the platform so
            that the user can talk to ai assistant for searching on such topics.
            Clients want answers from reel articles that are written by human and            not generated by chatgpt
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #information technologies
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #programming languages
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #artificial intelligence
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
