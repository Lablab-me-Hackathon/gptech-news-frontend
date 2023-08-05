import { Mail} from "lucide-react";

function TopFooter() {
  return (
    <div className="top-footer w-full flex-box justify-evenly flex-col md:flex-row pb-12">
      <div className="text-white text-3xl font-medium leading-10 py-5">
        Please feel free to
        <br />
        get in touch with us
      </div>
      
      <div className="py-5 flex-box flex-col">
        <Mail size={28} strokeWidth={2.5} color="white" />
        <div className="py-1 text-white text-lg font-semibold leading-norma">
          How Can We Help ?
        </div>
        <div className="py-1 w-52 text-gray-500 text-base font-normal underline leading-normal">
          +212 6 00 00 00 00
        </div>

        <div className="py-1 w-52 text-gray-500 text-base font-normal underline leading-normal">
        gptech.news@gmail.com
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
