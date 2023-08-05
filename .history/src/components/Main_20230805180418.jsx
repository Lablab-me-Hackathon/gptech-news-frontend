import Button from "../services/main/Button";
import Hello from "../services/main/Welcome";
import Cards from "./../services/main/Cards";

function Main() {
  return (
    <div className="text-center w-full px-10 md:flex-row scroll-smooth bg-gray-900">
      <div className="w-full flex-box">
        <div className="flex-box flex-col">
          <Hello />
          <Button />
        </div>
      </div>

      <div className="w-full flex-box">
        <div className="flex-box flex-col">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Main;
