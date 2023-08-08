import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="w-48 h-10 flex-box cursor-pointer">
      <img className="logo w-10 h-10 mx-1rounded-md" src="logo.png" alt='logo' />
      <div className="">
        <span className="text-white text-3xl font-bold">GPTech</span>
        <span className="text-white text-3xl font-light">News</span>
      </div>
    </div>
  )
}

export default Logo