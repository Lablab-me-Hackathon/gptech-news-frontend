// import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import Header from "./../components/Header";
function SignUp({ isLogin }) {
  const navigate = useNavigate();

  return (
    <div className="flex-box flex-col">
      <Header />

      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            <div className="flex-box rounded-b-lg lg:w-3/6 lg:rounded-r-lg lg:rounded-bl-none bg-[image:url('../assets/logincover.jpg')] bg-cover bg-no-repeat">
              <div className="flex-box flex-col px-4 py-6 text-white md:mx-6 md:p-12"></div>
            </div>
            <div className="pt-2 md:pt-0 px-4 md:px-0 lg:w-3/6 bg-gradient-to-b from-black to-[#252020] p-4">
              <div className="md:mx-6 md:p-12">
                <div className="text-start rounded-md font-Syne ">
                  <p className="my-6  text-darkwhite font-inter font-extralight">
                    Create a new account
                  </p>

                  <h4 className="my-12 mt-1 pb-1 text-xl font-semibold">
                    <span className="text-white text-3xl font-bold">
                      Start for free
                    </span>
                  </h4>
                </div>

                <form>
                  {!isLogin && (
                    <div className="relative my-12" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Username
                      </label>
                    </div>
                  )}

                  <div className="relative  my-12" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.50rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>

                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-darkPurple"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      {isLogin ? "Login" : "Register"}
                    </button>

                    <a href="#!" className="text-neutral-100 font-thin my-6">
                      Forgot password?
                    </a>
                  </div>

                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2 text-neutral-100 font-thin">
                      {isLogin
                        ? "Don`t have an account?"
                        : "Already have an account?"}
                    </p>
                    <a
                      type="button"
                      className="inline-block rounded  px-6 pb-[6px] border-b-2 pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out focus:text-danger-600 focus:outline-none focus:ring-0 text-blue-700 "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => navigate(isLogin ? "/sign-up" : "/login")}
                    >
                      {isLogin ? "Register" : "Login"}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default SignUp;
