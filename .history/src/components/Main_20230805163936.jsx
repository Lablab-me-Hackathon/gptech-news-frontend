import Output from "../services/main/News";
// import "../styles/Home.css";
import Order from "../services/main/Order";
import Upload from "../services/main/Upload";

function Main() {
  

  return (
    <div className="text-center w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
      
      <div className="img hide w-full flex-box">
        
          <div className="flex-box flex-col">
            <Output response={'n'} />
          </div>
        
      </div>
    </div>
  );
}

export default Main;
