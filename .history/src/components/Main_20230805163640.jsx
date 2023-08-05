import Output from "../services/main/Output";
// import "../styles/Home.css";
import Order from "../services/main/Order";
import Upload from "../services/main/Upload";
import { useState } from "react";

function Main() {
  

  return (
    <div className="text-center w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
      <Order />
      <div id="file" className="flex-box w-9/12 my-6" onDoubleClickCapture={update}>
        <Upload />
      </div>
      <div className="img hide w-full flex-box">
        {loading ? (
          "loading..."
        ) : (
          <div className="flex-box flex-col">
            {/* <img className="rounded" src={image} /> */}
            <Output response={model} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
