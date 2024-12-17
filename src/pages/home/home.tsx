import React from "react";
import { Link } from "react-router-dom";
import * as ui from "../../ui/index";
import style from "../../styles/home.module.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const Home = () => {
  const [tag, setTag] = React.useState("recent");
  const [category, setCategory] = React.useState<string | null>(null);
  const [more, setMore] = React.useState<boolean | null>(null);

  const section3 = React.useRef<HTMLDivElement | null>(null);

  const tagList = {
    recent: "recent",
    ranked: "top-ranked",
    bests: "best-seller",
    special: "special",
  };

  const catList = {
    monitor: "monitor",
    proccessor: "proccessor",
    graphiCard: "graphi-card",
    ram: "ram",
    ssd: "ssd",
    powerSupply: "power-supply",
    phone: "phone",
    case: "case",
    phoneAccessories: "phone-accessories",
    accessories: "accessories",
  };

  const tags = [
    {
      id: 0,
      name: "Recientes",
      value: "recent",
    },
    {
      id: 1,
      name: "Mejor calificados",
      value: "top-ranked",
    },
    {
      id: 2,
      name: "Más vendidos",
      value: "best-seller",
    },
    {
      id: 2,
      name: "Especiales",
      value: "special",
    },
  ];

  const filters = [
    {
      id: 0,
      name: "Computadoras",
      options: [
        { id: 0, name: "Monitores", value: catList.monitor },
        { id: 1, name: "Procesadores", value: catList.proccessor },
        { id: 2, name: "Tarjetas gráficas", value: catList.graphiCard },
        { id: 3, name: "RAM", value: catList.ram },
        { id: 4, name: "SSD", value: catList.ssd },
        { id: 5, name: "Fuentes de poder", value: catList.powerSupply },
      ],
    },
    {
      id: 1,
      name: "Teléfonos",
      options: [
        { id: 0, name: "Modelos", value: catList.phone },
        { id: 1, name: "Forros", value: catList.case },
        { id: 2, name: "Accesorios", value: catList.phone },
      ],
    },
    {
      id: 2,
      name: "Otros",
      options: [
        {
          id: 0,
          name: "Accesorios",
          value: catList.accessories,
        },
      ],
    },
  ];

  const data = [
    {
      id: 0,
      category: catList.monitor,
      objects: [
        {
          id: 0,
          brand: "Lenovo",
          name: "Monitor",
          model: "1280x720",
          img: `${ui.img.monitor}`,
          price: 1200,
          tags: [tagList.recent],
        },
      ],
    },
    {
      id: 1,
      category: catList.proccessor,
      objects: [
        {
          id: 0,
          brand: "AMD",
          name: "Procesador",
          model: "Ryzen 7 5700",
          img: `${ui.img.amdProcessor}`,
          price: 475,
          tags: [tagList.recent, tagList.ranked],
        },
      ],
    },
    {
      id: 2,
      category: catList.graphiCard,
      objects: [
        {
          id: 0,
          brand: "Nvidia",
          name: "Tarjeta gráfica",
          model: "RTX 4090 12Gb",
          img: `${ui.img.graphicCard}`,
          price: 475,
          tags: [tagList.recent],
        },
      ],
    },
    {
      id: 3,
      category: catList.ram,
      objects: [],
    },
    {
      id: 4,
      category: catList.ssd,
      objects: [
        {
          id: 0,
          brand: "Gigabyte",
          name: "SSD m.2",
          model: "2Tb",
          img: `${ui.img.ssd}`,
          price: 210,
          tags: [tagList.recent, tagList.bests],
        },
      ],
    },
    {
      id: 5,
      category: catList.powerSupply,
      objects: [
        {
          id: 0,
          brand: "Corsair",
          name: "Fuente de poder",
          model: "80 Plus 500w",
          img: `${ui.img.powerSupply}`,
          price: 90,
          tags: [tagList.recent],
        },
      ],
    },
    {
      id: 6,
      category: catList.phone,
      objects: [
        {
          id: 0,
          brand: "Apple",
          name: "iPhone 16",
          model: "Pro Max",
          img: `${ui.img.iphone}`,
          price: 2000,
          tags: [tagList.recent, tagList.ranked],
        },
      ],
    },
    {
      id: 7,
      category: catList.case,
      objects: [],
    },
    {
      id: 8,
      category: catList.phoneAccessories,
      objects: [
        {
          id: 0,
          brand: "Apple",
          name: "Airpods",
          model: "Estandar",
          img: `${ui.img.earphones}`,
          price: 120,
          tags: [tagList.recent, tagList.bests],
        },
        {
          id: 1,
          brand: "Apple",
          name: "Cargador",
          model: "Tipo C",
          img: `${ui.img.chargers}`,
          price: 20,
          tags: [tagList.recent, tagList.ranked, tagList.bests],
        },
      ],
    },
    {
      id: 9,
      category: catList.accessories,
      objects: [],
    },
  ];

  const render = (params: {
    id: number;
    brand: string;
    name: string;
    model: string;
    img: string;
    price: number;
    tags?: string[] | undefined;
  }) => {
    return (
      <>
        <div key={params.id} className="w-56 bg-white p-3 xl:w-72 2xl:w-64">
          <div className="relative flex w-full items-start justify-center">
            <img className="h-48 w-auto" src={params.img} alt="" />
            <div className="absolute left-2 top-2">
              {params.tags?.includes(tagList.recent) ? (
                <h3 className="-skew-x-6 cursor-default bg-active p-2 text-xs font-bold uppercase text-white">
                  Nuevo
                </h3>
              ) : null}
            </div>
          </div>
          <div className="px-2 py-4">
            <div className="flex flex-row items-center justify-between leading-10">
              <div className="flex flex-row gap-0.5">
                <ui.icon.FaStar className="size-3 text-yellow-500" />
                <ui.icon.FaStar className="size-3 text-yellow-500" />
                <ui.icon.FaStar className="size-3 text-yellow-500" />
                <ui.icon.FaStar className="size-3 text-yellow-500" />
                <ui.icon.FaStar className="size-3 text-yellow-500" />
              </div>
              <div>
                <span className="text-xs text-zinc-400">(5.0)</span>
              </div>
            </div>
            <h3 className="flex flex-row gap-1 text-start text-base font-semibold leading-3">
              <span>{params.brand}</span>
              <span>{params.name}</span>
            </h3>
            <sub className="leading-3">{params.model}</sub>
            <div className="mt-2.5 flex flex-row justify-between">
              <button className="rounded-md bg-default p-1.5 text-sm font-semibold text-white hover:bg-active">
                Comprar
              </button>
              <h4 className="text-end text-lg font-semibold">
                ${params.price}
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  };

  React.useEffect(() => {
    if (!more && more !== null) {
      section3.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [more]);

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
              <div>
                <ui.icon.TbTruckDelivery />
                <span>
                  <h2>Delivery</h2>
                  <p>
                    Recibe en la puerta de tu casa nuestro servicio de entrega
                  </p>
                </span>
              </div>
            </div>
            <div className={style.banners3}>
              <div>
                <ui.icon.FaShop />
                <span>
                  <h2>Pick up</h2>
                  <p>Recibe tus productos en nuestra tienda física</p>
                </span>
              </div>
            </div>
            <div className={style.banners3}>
              <div>
                <ui.icon.FaCcMastercard />
                <span>
                  <h2>Métodos de pago</h2>
                  <p>
                    Contamos opciones como Visa o MasterCard, Paypal y Zelle
                  </p>
                </span>
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
              <button className="bg-base flex h-full w-12 items-center justify-center text-white hover:bg-active">
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
        <h1 className="decoration-base text-4xl font-bold underline underline-offset-4">
          Compra por marca
        </h1>
        <div className="container mx-auto my-8 w-full max-w-[115rem] px-8">
          <ui.carousel />
        </div>
      </section>
      <section className="flex w-full cursor-default flex-row items-center justify-center gap-x-2 bg-zinc-400 text-white">
        <ui.icon.TbTruckDelivery className="size-8" />
        <h3 className="py-2.5 font-semibold">
          Envío gratis por compra a partir de 50$
        </h3>
      </section>
      <br />
      <section className="flex w-full flex-row justify-center gap-x-4 divide-x-2 divide-zinc-300">
        <div className="w-1/4 max-w-sm py-4 ps-4">
          <div className="flex flex-row justify-between">
            <h2 className="cursor-default text-xl font-semibold">Categorías</h2>
            <button
              onClick={() => setCategory(null)}
              className={`${category ? "text-sm text-gray-600" : "hidden"}`}
            >
              Borrar (x)
            </button>
          </div>
          {/* Filters */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10">
            <form action="">
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <ui.icon.FaPlus
                          aria-hidden="true"
                          className="size-3 group-data-[open]:hidden"
                        />
                        <ui.icon.FaMinus
                          aria-hidden="true"
                          className="size-3 group-[&:not([data-open])]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <ul className="ms-5 list-inside space-y-4 text-sm text-gray-600">
                      {section.options.map((option) => (
                        <li key={option.id}>
                          <h4
                            className={`${category === option.value ? "text-neutral-800" : "hover:text-neutral-800"} cursor-pointer`}
                            onClick={() => setCategory(option.value)}
                          >
                            {option.name}
                          </h4>
                        </li>
                      ))}
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </div>
          <br />
          <div>
            <img src={ui.img.banner5} alt="" />
          </div>
        </div>
        <div
          ref={section3}
          className="flex w-3/4 max-w-6xl flex-col divide-y-2 divide-zinc-300 px-4 pb-6"
        >
          {/* tags */}
          <div className="flex w-full flex-row gap-x-4">
            {tags.map((item) => (
              <button
                key={item.id}
                onClick={() => setTag(item.value)}
                className={`${tag === item.value ? "border-b-active border-opacity-100 text-active" : null} rounded-t-md border-b-2 border-opacity-0 px-2 pb-6 pt-4 hover:border-b-active hover:border-opacity-100 hover:bg-zinc-300 hover:text-active`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* object list */}
          <div
            className={`${more ? "h-full overflow-y-visible" : "h-[32rem] overflow-y-hidden"} relative flex w-full flex-wrap gap-4 pt-6 transition-all delay-150 duration-1000`}
          >
            {category ? (
              <>
                {data
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <>
                      {item.objects
                        ?.filter((select) => select.tags.includes(tag))
                        .map((select) => <>{render(select)}</>)}
                    </>
                  ))}
              </>
            ) : (
              <>
                {data.map((item) => (
                  <>
                    {item.objects
                      ?.filter((select) => select.tags.includes(tag))
                      .map((select) => <>{render(select)}</>)}
                  </>
                ))}
              </>
            )}
            <div
              className={`${more ? "opacity-0" : "opacity-100"} absolute -bottom-14 h-24 w-full bg-zinc-200 blur-lg transition-all delay-0 duration-100`}
            ></div>
          </div>
          <div className="mt-5 flex w-full justify-center">
            <button
              onClick={() => {
                if (more) {
                  setMore(false);
                } else {
                  setMore(true);
                }
              }}
              className="mt-2.5 rounded-md bg-default p-2.5 text-white hover:bg-active"
            >
              {more ? <p>Ver menos</p> : <p>Ver más</p>}
            </button>
          </div>
        </div>
      </section>
      <br />
      <section className="relative flex w-full items-center justify-center overflow-y-hidden">
        <img className="absolute inset-0" src={ui.img.banner7} alt="" />
        <div className="absolute inset-0 z-10 bg-violet-800/60"></div>
        <div className="group relative z-20 py-16">
          <div className="absolute -inset-x-10 inset-y-16 z-0 rounded-full transition-all group-hover:bg-white/20 group-hover:blur-3xl"></div>
          <img
            className="relative z-10 w-96 drop-shadow-2xl"
            src={ui.img.banner6}
            alt=""
          />
        </div>
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
