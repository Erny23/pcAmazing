"use client";
import { Link } from "react-router-dom";
import * as ui from "../ui/index";
import style from "../styles/navbar.module.css";

const Header = () => {
  return (
    <nav className="relative flex-col items-center bg-neutral-800 p-8 pb-0 2xl:flex">
      {/* part 1 */}
      <section className={`${style.navbar} gap-8`}>
        {/* brand */}
        <div className="w-1/4 2xl:w-1/3">
          <Link to="/" className="flex flex-row items-center">
            <img src={ui.icon.pcamazing} className="size-14" alt="logo" />
            <h1 className="text-center text-3xl font-bold text-white">
              <span className="text-white">PC</span>
              <span className="ms-3 text-cyan-600">Amazing</span>
            </h1>
          </Link>
        </div>
        {/* search */}
        <div className="flex w-1/2 flex-row items-center py-2.5">
          <select
            name="category"
            id=""
            className={`${style.button} h-full rounded-s-lg ps-1 font-semibold`}
          >
            <option className="bg-white text-black" value="all">
              Todas
            </option>
            <optgroup className="bg-white text-black" label="Equipos">
              <option className="bg-white text-black" value="pc">
                PC
              </option>
              <option className="bg-white text-black" value="phone">
                Teléfonos
              </option>
            </optgroup>
          </select>
          <input
            className="h-full w-full bg-white px-1 text-black"
            type="text"
            placeholder="Buscar..."
          />
          <button className={`${style.button} h-full rounded-e-lg p-1 px-2`}>
            <ui.icon.FaSearch className="size-5" />
          </button>
        </div>
        {/* user, favorites, compare */}
        <div className="flex w-1/4 flex-row gap-4 2xl:w-1/3">
          <button className={`${style.panel}`}>
            <ui.icon.FaUserCircle />
            <h3>Usuario</h3>
          </button>
          <button className={`${style.panel}`}>
            <ui.icon.BiSolidHeartCircle />
            <h3>Deseados</h3>
          </button>
          <button className={`${style.panel}`}>
            <ui.icon.BiTransferAlt />
            <h3>Comparar</h3>
          </button>
        </div>
      </section>
      <br />
      {/* part 2 */}
      <section className={`${style.navbar}`}>
        {/* departments */}
        <div className="flex w-1/3 items-end xl:w-1/4">
          <button
            className={`${style.button} flex flex-row rounded-t-xl px-6 py-3`}
          >
            <ui.icon.IoMenu className="size-6 pe-1" />
            <span className="font-semibold">Todos los departamentos</span>
          </button>
        </div>
        {/* nav buttons */}
        <div className="flex w-1/2 items-end">
          <ul className="flex list-none flex-row gap-0.5 xl:gap-8">
            <li className={`${style.navBtn}`}>
              <Link to="/">
                <span className="relative me-1 size-4 rounded-full bg-white">
                  <ui.icon.BiSolidOffer className="absolute -left-1 -top-1 size-6 text-red-500" />
                </span>
                <h3>Especiales</h3>
              </Link>
            </li>
            <li className={`${style.navBtn}`}>
              <ui.icon.BiSolidCube className="me-0.5 size-5 text-white" />
              <h3>Marcas</h3>
              <ui.icon.IoIosArrowDown className="ms-1 size-4 text-white" />
              <div className={`${style.tooltip}`}>
                <div className={`${style.tooltipContent}`}>
                  <h2 className="flex w-full justify-center text-lg font-semibold underline">
                    Marcas destacadas
                  </h2>
                  <br />
                  <ul
                    className={`${style.brand} ms-2 mt-1 flex flex-wrap justify-center gap-4 text-base`}
                  >
                    <li>
                      <Link to="/">AMD</Link>
                    </li>
                    <li>
                      <Link to="/">Nvidia</Link>
                    </li>
                    <li>
                      <Link to="/">ASUS</Link>
                    </li>
                    <li>
                      <Link to="/">Gygabite</Link>
                    </li>
                    <li>
                      <Link to="/">Corsair</Link>
                    </li>
                    <li>
                      <Link to="/">HP</Link>
                    </li>
                    <li>
                      <Link to="/">DELL</Link>
                    </li>
                    <li>
                      <Link to="/">MSI</Link>
                    </li>
                    <li>
                      <Link to="/">Samsung</Link>
                    </li>
                    <li>
                      <Link to="/">Apple</Link>
                    </li>
                    <li>
                      <Link to="/">Ver más</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={`${style.navBtn}`}>
              <ui.icon.BsPcDisplay className="me-0.5 size-4 text-white" />
              <h3>PC</h3>
              <ui.icon.IoIosArrowDown className="ms-1 size-4 text-white" />
              <div className={`${style.tooltip}`}>
                <div className={`${style.tooltipContent}`}>
                  <section className="3xl:px-96 flex flex-wrap gap-3 2xl:px-56">
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.graphicCard}
                          alt="graphicCard"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Tarjetas gráficas
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">Nvidia GTX</Link>
                          </li>
                          <li>
                            <Link to="/">Nvidia RTX</Link>
                          </li>
                          <li>
                            <Link to="/">AMD Radeon</Link>
                          </li>
                          <li>
                            <Link to="/">AMD Radeon XT</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.amdProcessor}
                          alt="processorAmd"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Procesadores AMD
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">Ryzen 3</Link>
                          </li>
                          <li>
                            <Link to="/">Ryzen 5</Link>
                          </li>
                          <li>
                            <Link to="/">Ryzen 7</Link>
                          </li>
                          <li>
                            <Link to="/">Ryzen 9</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.intelProcessor}
                          alt="processorIntel"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Procesadores Intel
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">Intel Core i3</Link>
                          </li>
                          <li>
                            <Link to="/">Intel Core i5</Link>
                          </li>
                          <li>
                            <Link to="/">Intel Core i7</Link>
                          </li>
                          <li>
                            <Link to="/">Intel Core i9</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.motherboard}
                          alt="motheboard"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Tarjetas madre
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">E-ATX</Link>
                          </li>
                          <li>
                            <Link to="/">ATX</Link>
                          </li>
                          <li>
                            <Link to="/">Mini-ATX</Link>
                          </li>
                          <li>
                            <Link to="/">Micro-ATX</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img className="size-full" src={ui.img.ssd} alt="ssd" />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Solid State Drive (SSD)
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">80Gb a 120Gb</Link>
                          </li>
                          <li>
                            <Link to="/">320Gb a 500Gb</Link>
                          </li>
                          <li>
                            <Link to="/">1Tb a 2Tb</Link>
                          </li>
                          <li>
                            <Link to="/">3Tb a 4Tb</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.monitor}
                          alt="monitor"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Monitores
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">1280p x 1024p</Link>
                          </li>
                          <li>
                            <Link to="/">1366p x 768p</Link>
                          </li>
                          <li>
                            <Link to="/">1440p x 900p</Link>
                          </li>
                          <li>
                            <Link to="/">1600p x 1200p</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.powerSupply}
                          alt="powerSupply"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Fuente de poder
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">80 plus</Link>
                          </li>
                          <li>
                            <Link to="/">80 plus Bronze</Link>
                          </li>
                          <li>
                            <Link to="/">80 plus Silver</Link>
                          </li>
                          <li>
                            <Link to="/">80 plus Gold</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src={ui.img.keyboard}
                          alt="keyboard"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Periféricos
                        </h2>
                        <ul className={`${style.pc}`}>
                          <li>
                            <Link to="/">Teclados</Link>
                          </li>
                          <li>
                            <Link to="/">Mouse</Link>
                          </li>
                          <li>
                            <Link to="/">Alfombrillas</Link>
                          </li>
                          <li>
                            <Link to="/">Ventiladores</Link>
                          </li>
                          <li>
                            <Link to="/">Ver más</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </li>
            <li className={`${style.navBtn}`}>
              <ui.icon.FaMobileScreenButton className="me-0.5 size-4 text-white" />
              <h3>Teléfonos</h3>
              <ui.icon.IoIosArrowDown className="ms-1 size-4 text-white" />
              <div className={`${style.tooltip}`}>
                <div className={`${style.tooltipContent}`}>
                  <section className="flex flex-wrap justify-center gap-3">
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.iphone}
                          alt="iphone"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Apple</h2>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.samsung}
                          alt="samsung"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Android</h2>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.earphones}
                          alt="earphones"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Audifonos</h2>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.chargers}
                          alt="charger"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Cargadores</h2>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.phoneCases}
                          alt="phoneCase"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Fundas</h2>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.powerBanks}
                          alt="powerBank"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Power Banks</h2>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src={ui.img.phoneAccessories}
                          alt="phoneAccessories"
                        />
                      </div>
                      <div className="text-center">
                        <h2 className="text-lg font-semibold">Accesorios</h2>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </li>
            <li className={`${style.navBtn}`}>
              <Link to="/">
                <ui.icon.TfiMoreAlt className="me-1 size-6 text-white" />
                <h3>Otros</h3>
              </Link>
            </li>
          </ul>
        </div>
        {/* cart */}
        <div className="group flex w-1/4 justify-end xl:w-1/5 2xl:w-1/6">
          <button
            className={`${style.button} flex flex-row rounded-t-xl px-6 py-3 focus:outline-none`}
          >
            <ui.icon.IoCartSharp className="size-7 pe-1" />
            <span className="font-semibold">Carrito</span>
          </button>
          <div className="absolute top-48 z-10 hidden w-56 list-none flex-col gap-3 divide-y-2 rounded-lg bg-gray-50 p-3 text-black shadow-lg group-focus-within:flex">
            <ul className="flex flex-col gap-2">
              <li className="flex w-full flex-row border-2 border-black text-start leading-3">
                <div className="size-12 bg-zinc-700"></div>
                <div className="p-3">
                  <h3>Titulo</h3>
                  <sub>SubTitulo</sub>
                </div>
              </li>
              <li className="flex w-full flex-row border-2 border-black text-start leading-3">
                <div className="size-12 bg-zinc-700"></div>
                <div className="p-3">
                  <h3>Titulo</h3>
                  <sub>SubTitulo</sub>
                </div>
              </li>
            </ul>
            <div className="pt-3">
              <div className="flex flex-row items-center justify-between">
                <h3>Total</h3>
                <sub>$0</sub>
              </div>
              <br />
              <div className="flex flex-row items-center justify-between gap-3 text-white">
                <button className="rounded-md bg-zinc-400 p-2 font-semibold hover:bg-zinc-500">
                  Ver listado
                </button>
                <button
                  className={`${style.button} rounded-md p-2 font-semibold`}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
