
function Logo() {
  return (
    <div className="w-48 h-10 flex-box">
      <img className="w-10 h-10 mx-1 rounded-md" src="logo.png" alt='logo' />
      <div className="">
        <span className="text-white text-3xl font-bold">GPTech</span>
        <span className="text-white text-3xl font-light">News</span>
      </div>
    </div>
  )
}

export default Logo