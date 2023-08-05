import Output from "../services/main/Output";
// import "../styles/Home.css";
import Order from "../services/main/Order";
import Upload from "../services/main/Upload";
import { useState } from "react";

function Main() {
  

  return (
    <div className="text-center w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
      
      <div className="img hide w-full flex-box">
        
          <div className="flex-box flex-col">
            <Output response={} />
          </div>
        
      </div>
    </div>
  );
}

export default Main;
