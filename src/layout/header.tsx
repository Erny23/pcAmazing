"use client";
import { Link } from "react-router-dom";
import * as ui from "../ui/index";

const Header = () => {
  return (
    <nav className="relative flex-col items-center bg-neutral-800 p-8 pb-0 2xl:flex">
      {/* part 1 */}
      <section className="flex flex-row gap-8 2xl:w-[80rem]">
        {/* brand */}
        <div className="w-1/4 2xl:w-1/3">
          <Link to="/" className="flex cursor-pointer flex-row items-center">
            <img
              src="/Icon-PC-Amazing.ico"
              className="size-14"
              alt="React logo"
            />
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
            className="h-full cursor-pointer rounded-s-lg bg-cyan-600 ps-1 font-semibold text-white hover:bg-cyan-500"
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
          <button className="h-full cursor-pointer rounded-e-lg bg-cyan-600 p-1 px-2 text-white hover:bg-cyan-500">
            <ui.icon.FaSearch className="size-5" />
          </button>
        </div>
        {/* user, favorites, compare */}
        <div className="flex w-1/4 flex-row gap-4 2xl:w-1/3">
          <button className="flex cursor-pointer flex-col items-center rounded-md p-1.5 text-white hover:bg-zinc-700">
            <ui.icon.FaUserCircle className="size-6" />
            <h3>Usuario</h3>
          </button>
          <button className="flex cursor-pointer flex-col items-center rounded-md p-1.5 text-white hover:bg-zinc-700">
            <ui.icon.BiSolidHeartCircle className="size-6" />
            <h3>Deseados</h3>
          </button>
          <button className="flex cursor-pointer flex-col items-center rounded-md p-1.5 text-white hover:bg-zinc-700">
            <ui.icon.BiTransferAlt className="size-6" />
            <h3>Comparar</h3>
          </button>
        </div>
      </section>
      <br />
      {/* part 2 */}
      <section className="flex flex-row 2xl:w-[80rem]">
        {/* departments */}
        <div className="w-1/3 xl:w-1/4">
          <button className="flex cursor-pointer flex-row rounded-t-xl bg-cyan-600 px-6 py-3 hover:bg-cyan-500">
            <ui.icon.IoMenu className="size-6 pe-1" />
            <span className="font-semibold">Todos los departamentos</span>
          </button>
        </div>
        {/* nav buttons */}
        <div className="w-1/2">
          <ul className="flex list-none flex-row gap-0.5 xl:gap-8">
            <li className="flex cursor-pointer flex-row items-center rounded-t-lg px-2 py-3 hover:bg-zinc-700">
              <span className="relative me-1 size-4 rounded-full bg-white">
                <ui.icon.BiSolidOffer className="absolute -left-1 -top-1 size-6 text-red-500" />
              </span>
              <h3>Especiales</h3>
            </li>
            <li className="group flex flex-row items-center rounded-t-lg px-2 py-3 hover:bg-zinc-700">
              <ui.icon.BiSolidCube className="me-0.5 size-5 cursor-pointer text-white" />
              <h3 className="cursor-pointer">Marcas</h3>
              <ui.icon.IoIosArrowDown className="ms-1 size-4 cursor-pointer text-white" />
              <div className="absolute -inset-8 top-40 hidden flex-col items-center group-hover:flex 2xl:-left-32 2xl:-right-32">
                <div className="whitespace-no-wrap relative z-10 w-full bg-white px-8 py-4 text-xs leading-none text-black shadow-lg">
                  <h2 className="flex w-full justify-center text-lg font-semibold underline">
                    Marcas destacadas
                  </h2>
                  <br />
                  <ul className="ms-2 mt-1 flex flex-wrap justify-center gap-4 text-base">
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      AMD
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      Nvidia
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      ASUS
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      Gygabite
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      Corsair
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      HP
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      DELL
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      MSI
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      Samsung
                    </li>
                    <li className="mt-1 cursor-pointer text-gray-600 hover:text-black">
                      Apple
                    </li>
                    <li className="mt-1 cursor-pointer text-sky-600 underline">
                      Ver más
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="group flex flex-row items-center rounded-t-lg px-2 py-3 hover:bg-zinc-700">
              <ui.icon.BsPcDisplay className="me-0.5 size-4 cursor-pointer text-white" />
              <h3 className="cursor-pointer">PC</h3>
              <ui.icon.IoIosArrowDown className="ms-1 size-4 cursor-pointer text-white" />
              <div className="absolute -inset-8 top-40 hidden flex-col items-center group-hover:flex 2xl:-left-32 2xl:-right-32">
                <div className="whitespace-no-wrap relative z-10 w-full bg-white px-8 py-4 text-xs leading-none text-black shadow-lg">
                  <section className="3xl:px-96 flex flex-wrap gap-3 2xl:px-56">
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/graphicCard.jpg"
                          alt="graphicCard"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Tarjetas gráficas
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">Nvidia GTX</li>
                          <li className="mt-1">Nvidia RTX</li>
                          <li className="mt-1">AMD Radeon</li>
                          <li className="mt-1">AMD Radeon XT</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/processor.jpg"
                          alt="processorAmd"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Procesadores AMD
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">Ryzen 3</li>
                          <li className="mt-1">Ryzen 5</li>
                          <li className="mt-1">Ryzen 7</li>
                          <li className="mt-1">Ryzen 9</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/processor-2.jpg"
                          alt="processorIntel"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Procesadores Intel
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">Intel Core i3</li>
                          <li className="mt-1">Intel Core i5</li>
                          <li className="mt-1">Intel Core i7</li>
                          <li className="mt-1">Intel Core i9</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/motherboard.webp"
                          alt="motheboard"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Tarjetas madre
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">E-ATX</li>
                          <li className="mt-1">ATX</li>
                          <li className="mt-1">Mini-ATX</li>
                          <li className="mt-1">Micro-ATX</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img className="size-full" src="/ssd.jpg" alt="ssd" />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Solid State Drive (SSD)
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">80Gb a 120Gb</li>
                          <li className="mt-1">320Gb a 500Gb</li>
                          <li className="mt-1">1Tb a 2Tb</li>
                          <li className="mt-1">3Tb a 4Tb</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/monitor.jpg"
                          alt="monitor"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Monitores
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">1280p x 1024p</li>
                          <li className="mt-1">1366p x 768p</li>
                          <li className="mt-1">1440p x 900p</li>
                          <li className="mt-1">1600p x 1200p</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/powerSupply.jpg"
                          alt="powerSupply"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Fuente de poder
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">80 plus</li>
                          <li className="mt-1">80 plus Bronze</li>
                          <li className="mt-1">80 plus Silver</li>
                          <li className="mt-1">80 plus Gold</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-2 flex flex-row gap-4">
                      <div className="size-32">
                        <img
                          className="size-full"
                          src="/keyboard.jpg"
                          alt="keyboard"
                        />
                      </div>
                      <div className="text-start">
                        <h2 className="text-lg font-semibold underline">
                          Periféricos
                        </h2>
                        <ul className="ms-2 mt-1 list-inside text-base">
                          <li className="mt-1">Teclados</li>
                          <li className="mt-1">Mouse</li>
                          <li className="mt-1">Alfombrillas</li>
                          <li className="mt-1">Ventiladores</li>
                          <li className="mt-1 cursor-pointer text-sky-600 underline">
                            Ver más
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </li>
            <li className="group flex flex-row items-center rounded-t-lg px-2 py-3 hover:bg-zinc-700">
              <ui.icon.FaMobileScreenButton className="me-0.5 size-4 cursor-pointer text-white" />
              <h3 className="cursor-pointer">Teléfonos</h3>
              <ui.icon.IoIosArrowDown className="ms-1 size-4 cursor-pointer text-white" />
              <div className="absolute -inset-8 top-40 hidden flex-col items-center group-hover:flex 2xl:-left-32 2xl:-right-32">
                <div className="whitespace-no-wrap relative z-10 w-full bg-white px-8 py-4 text-xs leading-none text-black shadow-lg">
                  <section className="flex flex-wrap justify-center gap-3">
                    <div className="flex flex-col gap-4 rounded-md p-3 hover:bg-zinc-100">
                      <div className="size-36">
                        <img
                          className="size-full"
                          src="/iphone.jpg"
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
                          src="/samsung.webp"
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
                          src="/earphones.jpg"
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
                          src="/charger.jpg"
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
                          src="/phoneCase.jpg"
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
                          src="/powerBank.jpg"
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
                          src="/phoneAccessories.jpg"
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
            <li className="flex cursor-pointer flex-row items-center rounded-t-lg px-2 py-3 hover:bg-zinc-700">
              <ui.icon.TfiMoreAlt className="me-1 size-6 text-white" />
              <h3>Otros</h3>
            </li>
          </ul>
        </div>
        {/* cart */}
        <div className="group flex w-1/4 justify-end xl:w-1/5 2xl:w-1/6">
          <button className="flex cursor-pointer flex-row rounded-t-xl bg-cyan-600 px-6 py-3 hover:bg-cyan-500 focus:outline-none">
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
                <button className="rounded-md bg-cyan-600 p-2 font-semibold hover:bg-cyan-500">
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
