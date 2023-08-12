import HomeButton from "./HomeButton";

function Welcome() {
  return (
    <div className="w-full text-white py-2 flex-box home">
      <div className="flex-box w-full flex-col md:flex-row my-6">
        <div className="text-center overflow-hidden w-full py-10 flex-box flex-col scroll-smooth">
          <div className="flex-box w-full overflow-hidden">
            <div className="flex-box">
              <div className="px-6 text-center text-white md:px-12 font-Bruno">
                <p className="mb-6 lg:text-4xl font-bold drop-shadow-lg  shadow-blue-600/50  text-Bruno text-altLogo">
                  Welcome <br /> in
                </p>
                {/* <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-relaxed md:leading-snug mb-2 drop-shadow-md  shadow-black">
                  IT News : Grow your career
                </h3> */}
                <p className="text-sm md:text-base text-firstLogo drop-shadow-sm  shadow-black">
                  GPT<span className="text-altLogo">echNews</span>
                </p>
                <HomeButton />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-box p-4">
          <div className="flex-box">
            <div className="mx-3">
              <img
                className="  rounded-full inline-block p-8 md:p-0"
                src="/assets/herowithlight.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
