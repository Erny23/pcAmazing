import { Link } from "react-router-dom";
import * as ui from "../../ui/index";

const Home = () => {
  return (
    <>
      <section className="flex w-full flex-row justify-center gap-4 divide-x-2 divide-zinc-300 pt-4">
        <div className="w-1/5 max-w-xs px-3">
          <h2 className="text-lg font-semibold text-zinc-800">Más vendidos</h2>
          <br />
          <ul className="flex flex-col gap-4">
            <li className="w-full border-2 transition-all duration-100 hover:ms-5 hover:bg-cyan-500 hover:text-white">
              <Link to="/" className="flex flex-row items-center gap-3">
                <div className="size-14">
                  <img src={ui.img.graphicCard} alt="graphicCard" />
                </div>
                <div className="leading-3">
                  <h3 className="text-[0.9rem]">Nvidia RTX 4090</h3>
                  <sub>Tarjeta gráfica</sub>
                </div>
              </Link>
            </li>
            <li className="w-full border-2 transition-all duration-100 hover:ms-5 hover:bg-cyan-500 hover:text-white">
              <Link to="/" className="flex flex-row items-center gap-3">
                <div className="size-14">
                  <img src={ui.img.monitor} alt="monitor" />
                </div>
                <div className="leading-3">
                  <h3 className="text-[0.9rem]">ASUS 32" 75Hz</h3>
                  <sub>Monitor LED</sub>
                </div>
              </Link>
            </li>
            <li className="w-full border-2 transition-all duration-100 hover:ms-5 hover:bg-cyan-500 hover:text-white">
              <Link to="/" className="flex flex-row items-center gap-3">
                <div className="size-14">
                  <img src={ui.img.ssd} alt="memoria" />
                </div>
                <div className="leading-3">
                  <h3 className="text-[0.9rem]">SSD m.2</h3>
                  <sub>2Tb</sub>
                </div>
              </Link>
            </li>
          </ul>
          <br />
          <div className="w-full">
            <img src={ui.img.banner4} alt="banner-4" />
          </div>
        </div>
        <div className="flex w-2/3 max-w-3xl flex-col items-center px-6 pt-4">
          <div className="w-full">
            <img src={ui.img.banner1} alt="banner-1" />
          </div>
          <div className="mt-4 flex h-32 w-full flex-row justify-center gap-4">
            <div className="w-1/2">
              <img className="" src={ui.img.banner2} alt="banner-2" />
            </div>
            <div className="w-1/2">
              <img className="" src={ui.img.banner3} alt="banner-3" />
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-center gap-4">
            <div className="flex w-1/2 flex-row items-center justify-center gap-2 bg-zinc-800 p-1.5">
              <div>
                <ui.icon.TbTruckDelivery className="size-12 text-cyan-600" />
              </div>
              <div className="text-white">
                <h2 className="text-base font-semibold">Delivery</h2>
                <p className="text-sm">
                  Recibe en la puerta de tu casa nuestro servicio de entrega
                </p>
              </div>
            </div>
            <div className="flex w-1/2 flex-row items-center justify-center gap-2 bg-zinc-800 p-1.5">
              <div>
                <ui.icon.FaShop className="size-12 text-cyan-600" />
              </div>
              <div className="text-white">
                <h2 className="text-base font-semibold">Pick up</h2>
                <p className="text-sm">
                  Recibe tus productos en nuestra tienda física
                </p>
              </div>
            </div>
            <div className="flex w-1/2 flex-row items-center justify-center gap-2 bg-zinc-800 p-1.5">
              <div>
                <ui.icon.FaCcMastercard className="size-12 text-cyan-600" />
              </div>
              <div className="text-white">
                <h2 className="text-base font-semibold">Métodos de pago</h2>
                <p className="text-sm">
                  Contamos opciones como Visa o MasterCard, Paypal y Zelle
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 max-w-xs px-3">
          <h2 className="text-lg font-semibold text-zinc-800">
            Top categorías
          </h2>
          <br />
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-600 hover:text-white"
              >
                <ui.icon.FaMobileScreenButton className="size-8" />
                <h3 className="text-sm">Celulares</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-600 hover:text-white"
              >
                <ui.icon.FaKeyboard className="size-8" />
                <h3 className="text-sm">Teclados</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-600 hover:text-white"
              >
                <ui.icon.SlScreenDesktop className="size-8" />
                <h3 className="text-sm">Monitores</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex flex-col items-center bg-white p-2 text-zinc-800 transition-all hover:bg-cyan-600 hover:text-white"
              >
                <ui.icon.BsFillSdCardFill className="size-8" />
                <h3 className="text-sm">Memorias</h3>
              </Link>
            </li>
          </ul>
          <br />
          <h2 className="mb-1.5 text-lg font-semibold leading-4 text-zinc-800">
            Recibe nuestras ofertas
          </h2>
          <p className="mb-1.5 text-sm text-zinc-800">
            Regístrate en nuestras promos
          </p>
          <form action="">
            <div className="flex h-10 flex-row items-center">
              <input
                className="my-1.5 h-full w-full bg-white px-1 text-black"
                type="text"
                placeholder="email"
              />
              <button className="flex h-full w-12 items-center justify-center bg-cyan-600 text-white hover:bg-cyan-500">
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
