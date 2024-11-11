import logo from '../assets/Icon-PC-Amazing.ico'

function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <img src={logo} className="size-48" alt="React logo" />
        <h1 id="brand" className="font-semibold text-Violet-800">PC<span className="ms-3 text-Cyan-600">AMAZING</span></h1>
      </div>
    </>
  )
}

export default Home
