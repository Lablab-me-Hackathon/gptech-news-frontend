// import { useNavigate } from "react-router-dom";
// import { Newspaper } from "lucide-react";
import Explore from "../home/Explore";
const About = () => {
  //   const navigate = useNavigate();
  return (
    <div className="px-6 text-center text-white md:px-12 bg-black w-full py-10">
      <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-relaxed md:leading-snug mb-2 drop-shadow-md  shadow-black">
        IT News : Grow your career
      </h3>
      <p className="text-sm  drop-shadow-sm  shadow-black leading-7 py-5 text-customColor font-poppins tracking-widest font-light			">
        Explore your favorite news and register <br /> now to stay up-to-date
        and discover exciting articles.
      </p>
      <div className="flex-box lex-col justify-center md:flex-row my-6">
        <div className="flex-box  relative w-full">
          <video
            className="h-96 rounded-full inline-block p-8 md:p-0"
            autoPlay
            loop
            muted
          >
            <source src="/assets/bluevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 opacity-25 w-full" />
        </div>
      </div>
      <Explore
        customstyles={`bg-blueColor hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 flex-box`}
      />
    </div>
  );
};

export default About;
