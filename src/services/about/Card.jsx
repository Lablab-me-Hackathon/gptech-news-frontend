function Card() {
  return (
    <div>
      <div className="bg-gray-950 w-96 rounded-lg overflow-hidden shadow-lg cardAbout">
        <video className="h-96 inline-block p-8 md:p-0" autoPlay loop muted>
          <source src="/assets/artibanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">GPTechNews</div>
          <p className="text-gray-700 text-base">
            Clients want answers from reel articles that are written by human
            and not generated by chatgpt...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #information_technologies
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #software_engineering
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #artificial_intelligence
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
