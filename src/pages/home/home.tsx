import { Link } from "react-router-dom";
import * as ui from "../../ui/index";

const Home = () => {
  return (
    <>
      <section className="flex w-full flex-row justify-center gap-x-4 divide-x-2 divide-zinc-300 pt-4">
        {/* columna izquierda */}
        <div className="w-1/5 max-w-xs px-3">
          <h2 className="my-5 text-lg font-semibold text-zinc-800 2xl:text-xl">
            Más vendidos
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="w-full border-2 text-zinc-800 transition-all duration-100 hover:ms-5 hover:bg-cyan-500 hover:text-white">
              <Link to="/" className="flex flex-row items-center gap-3">
                <div className="size-14 2xl:size-16">
                  <img src={ui.img.graphicCard} alt="graphicCard" />
                </div>
                <div className="leading-3">
                  <h3 className="text-[0.9rem] font-semibold 2xl:text-[1.2rem]">
                    Nvidia RTX 4090
                  </h3>
                  <sub className="2xl:text-[1rem]">Tarjeta gráfica</sub>
                </div>
              </Link>
            </li>
            <li className="w-full border-2 text-zinc-800 transition-all duration-100 hover:ms-5 hover:bg-cyan-500 hover:text-white">
              <Link to="/" className="flex flex-row items-center gap-3">
                <div className="size-14 2xl:size-16">
                  <img src={ui.img.monitor} alt="monitor" />
                </div>
                <div className="leading-3">
                  <h3 className="text-[0.9rem] font-semibold 2xl:text-[1.2rem]">
                    ASUS 32" 75Hz
                  </h3>
                  <sub className="2xl:text-[1rem]">Monitor LED</sub>
                </div>
              </Link>
            </li>
            <li className="w-full border-2 text-zinc-800 transition-all duration-100 hover:ms-5 hover:bg-cyan-500 hover:text-white">
              <Link to="/" className="flex flex-row items-center gap-3">
                <div className="size-14 2xl:size-16">
                  <img src={ui.img.ssd} alt="memoria" />
                </div>
                <div className="leading-3">
                  <h3 className="text-[0.9rem] font-semibold 2xl:text-[1.2rem]">
                    SSD m.2
                  </h3>
                  <sub className="2xl:text-[1rem]">2Tb</sub>
                </div>
              </Link>
            </li>
          </ul>
          <br />
          <div className="w-full">
            <img src={ui.img.banner4} alt="banner-4" />
          </div>
        </div>
        {/* columna central */}
        <div className="flex w-[60%] max-w-6xl flex-col items-center pe-2 ps-6 pt-4 xl:w-2/3">
          <div>
            <img
              className="3xl:h-[22rem] w-full"
              src={ui.img.banner1}
              alt="banner-1"
            />
          </div>
          <div className="mt-4 flex w-full flex-row justify-center gap-x-4">
            <div className="w-1/2">
              <img className="" src={ui.img.banner2} alt="banner-2" />
            </div>
            <div className="w-1/2">
              <img className="" src={ui.img.banner3} alt="banner-3" />
            </div>
          </div>
          <div className="mt-4 flex w-full cursor-default flex-row justify-between gap-x-4">
            <div className="3xl:gap-x-5 flex w-1/3 max-w-80 flex-col items-center justify-center gap-x-2 bg-zinc-800 p-1.5 xl:flex-row xl:p-4">
              <div>
                <ui.icon.TbTruckDelivery className="size-12 text-cyan-600 2xl:size-14" />
              </div>
              <div className="text-center text-white xl:text-start">
                <h2 className="3xl:text-lg text-base font-semibold">
                  Delivery
                </h2>
                <p className="3xl:text-base text-sm">
                  Recibe en la puerta de tu casa nuestro servicio de entrega
                </p>
              </div>
            </div>
            <div className="3xl:gap-x-5 flex w-1/3 max-w-80 flex-col items-center justify-center gap-x-2 bg-zinc-800 p-1.5 xl:flex-row xl:p-4">
              <div>
                <ui.icon.FaShop className="size-12 text-cyan-600 2xl:size-14" />
              </div>
              <div className="text-center text-white xl:text-start">
                <h2 className="3xl:text-lg text-base font-semibold">Pick up</h2>
                <p className="3xl:text-base text-sm">
                  Recibe tus productos en nuestra tienda física
                </p>
              </div>
            </div>
            <div className="3xl:gap-x-5 flex w-1/3 max-w-80 flex-col items-center justify-center gap-x-2 bg-zinc-800 p-1.5 xl:flex-row xl:p-4">
              <div>
                <ui.icon.FaCcMastercard className="size-12 text-cyan-600 2xl:size-14" />
              </div>
              <div className="text-center text-white xl:text-start">
                <h2 className="3xl:text-lg text-base font-semibold">
                  Métodos de pago
                </h2>
                <p className="3xl:text-base text-sm">
                  Contamos opciones como Visa o MasterCard, Paypal y Zelle
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* columna derecha */}
        <div className="w-1/5 max-w-xs px-3 ps-6">
          <h2 className="my-5 text-lg font-semibold text-zinc-800 2xl:text-xl">
            Top categorías
          </h2>
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-500 hover:text-white"
              >
                <ui.icon.FaMobileScreenButton className="size-8 2xl:size-10" />
                <h3 className="text-sm 2xl:text-base">Celulares</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-500 hover:text-white"
              >
                <ui.icon.FaKeyboard className="size-8 2xl:size-10" />
                <h3 className="text-sm 2xl:text-base">Teclados</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-500 hover:text-white"
              >
                <ui.icon.SlScreenDesktop className="size-8 2xl:size-10" />
                <h3 className="text-sm 2xl:text-base">Monitores</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-500 hover:text-white"
              >
                <ui.icon.BsFillSdCardFill className="size-8 2xl:size-10" />
                <h3 className="text-sm 2xl:text-base">Memorias</h3>
              </Link>
            </li>
          </ul>
          <br />
          <h2 className="mb-1 text-lg font-semibold leading-4 text-zinc-800 2xl:text-xl">
            Recibe nuestras ofertas
          </h2>
          <p className="mb-1 text-sm leading-4 text-zinc-800 2xl:text-base">
            Regístrate en nuestras promos
          </p>
          <form action="">
            <div className="flex h-10 flex-row items-center">
              <input
                className="my-1.5 h-full w-full bg-white px-1 text-black"
                type="text"
                placeholder="email"
              />
              <button className="flex h-full w-12 items-center justify-center bg-cyan-500 text-white hover:bg-cyan-400">
                <ui.icon.FaArrowRight className="size-6" />
              </button>
            </div>
            <div className="mt-2 flex flex-row gap-2">
              <input type="checkbox" id="" name="" value="" />
              <p className="text-xs">
                He leído y estoy de acuerdo con las
                <span className="ms-0.5 text-sky-600 underline">
                  Políticas de privacidad
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
      <section className="flex h-screen flex-row items-center justify-center">
        <img src="/Icon-PC-Amazing.ico" className="size-48" alt="React logo" />
        <h1 className="text-center font-semibold text-white">
          <span className="text-violet-800">PC</span>
          <span className="ms-3 text-cyan-600">AMAZING</span>
        </h1>
      </section>
    </>
  );
};

export default Home;
