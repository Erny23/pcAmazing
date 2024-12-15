import { Link } from "react-router-dom";
import * as ui from "../../ui/index";
import style from "../../styles/home.module.css";

const Home = () => {
  return (
    <>
      <section className="flex w-full flex-row justify-center gap-x-4 divide-x-2 divide-zinc-300 pt-4">
        {/* columna izquierda */}
        <div className={`${style.column}`}>
          <h2 className="my-5">Más vendidos</h2>
          <ul className={`${style.bestSellers} flex flex-col gap-4`}>
            <li>
              <Link to="/">
                <div className={style.bestImg}>
                  <img src={ui.img.graphicCard} alt="graphicCard" />
                </div>
                <div className={style.bestTitle}>
                  <h3>Nvidia RTX 4090</h3>
                  <sub>Tarjeta gráfica</sub>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={style.bestImg}>
                  <img src={ui.img.monitor} alt="monitor" />
                </div>
                <div className={style.bestTitle}>
                  <h3>ASUS 32" 75Hz</h3>
                  <sub>Monitor LED</sub>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={style.bestImg}>
                  <img src={ui.img.ssd} alt="memoria" />
                </div>
                <div className={style.bestTitle}>
                  <h3>SSD m.2</h3>
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
        {/* columna central */}
        <div
          className={`${style.center} flex w-[60%] max-w-6xl flex-col items-center pe-2 ps-6 pt-4 xl:w-2/3`}
        >
          <div>
            <img
              className="w-full 3xl:h-[22rem]"
              src={ui.img.banner1}
              alt="banner-1"
            />
          </div>
          <div className="mt-4 flex w-full flex-row justify-center gap-x-4">
            <div className={style.banners2}>
              <img src={ui.img.banner2} alt="banner-2" />
            </div>
            <div className={style.banners2}>
              <img src={ui.img.banner3} alt="banner-3" />
            </div>
          </div>
          <div className="mt-4 flex w-full cursor-default flex-row justify-between gap-x-4">
            <div className={style.banners3}>
              <ui.icon.TbTruckDelivery />
              <div>
                <h2>Delivery</h2>
                <p>
                  Recibe en la puerta de tu casa nuestro servicio de entrega
                </p>
              </div>
            </div>
            <div className={style.banners3}>
              <ui.icon.FaShop />
              <div>
                <h2>Pick up</h2>
                <p>Recibe tus productos en nuestra tienda física</p>
              </div>
            </div>
            <div className={style.banners3}>
              <ui.icon.FaCcMastercard />
              <div>
                <h2>Métodos de pago</h2>
                <p>Contamos opciones como Visa o MasterCard, Paypal y Zelle</p>
              </div>
            </div>
          </div>
        </div>
        {/* columna derecha */}
        <div className={`${style.column}`}>
          <h2 className="my-5">Top categorías</h2>
          <ul className={`${style.topCategories} flex flex-wrap gap-3`}>
            <li>
              <Link to="/">
                <ui.icon.FaMobileScreenButton />
                <h3>Celulares</h3>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ui.icon.FaKeyboard />
                <h3>Teclados</h3>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ui.icon.SlScreenDesktop />
                <h3>Monitores</h3>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ui.icon.BsFillSdCardFill />
                <h3>Memorias</h3>
              </Link>
            </li>
          </ul>
          <br />
          <h2 className="mb-1">Recibe nuestras ofertas</h2>
          <p className="mb-1 text-sm leading-4 2xl:text-base">
            Regístrate en nuestras promos
          </p>
          <form action="">
            <div className="flex h-10 flex-row items-center">
              <input
                className="my-1.5 h-full w-full bg-white px-1"
                type="text"
                placeholder="email"
              />
              <button className="flex h-full w-12 items-center justify-center bg-base text-white hover:bg-active">
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
      <br />
      <section className="mt-8 flex w-full flex-col items-center">
        <h1 className="text-4xl font-bold underline decoration-base underline-offset-4">
          Compra por marca
        </h1>
        <div className="container mx-auto my-12 w-full max-w-[115rem] px-8">
          <ui.carousel />
        </div>
      </section>
      <section className="flex w-full cursor-default flex-row items-center justify-center gap-x-2 bg-zinc-400 text-white">
        <ui.icon.TbTruckDelivery className="size-8" />
        <h3 className="py-2.5 font-semibold">
          Envío gratis por compra a partir de 50$
        </h3>
      </section>
      <section className="flex h-screen flex-row items-center justify-center">
        <img src="/Icon-PC-Amazing.ico" className="size-48" alt="React logo" />
        <h1 className="text-center font-semibold text-white">
          <span className="text-violet-800">PC</span>
          <span className="ms-3 text-active">AMAZING</span>
        </h1>
      </section>
    </>
  );
};

export default Home;
