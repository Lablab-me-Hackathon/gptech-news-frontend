import Copyright from "../services/footer/Copyright";
import Logo from "../services/header/Logo";
import Social from "./../services/footer/Social";

function Footer() {
  return (
    <div className="w-full h-full px-5 py-5 flex-box flex-col bg-footerbackground scroll-smooth text-center">
      <div className="w-full h-px  "></div>
      <div className="bottom-footer w-full pt-12 flex-box justify-around flex-col md:flex-row flex-end">
        <Logo />
        <Copyright />
        <Social />
      </div>
    </div>
  );
}

export default Footer;
