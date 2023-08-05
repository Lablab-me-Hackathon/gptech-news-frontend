import News from "../services/main/News";

function Main() {
  

  return (
    <div className="text-center w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
      
      <div className="img hide w-full flex-box">
        
          <div className="flex-box flex-col">
            <News />
          </div>
        
      </div>
    </div>
  );
}

export default Main;
