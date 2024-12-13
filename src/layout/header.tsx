const Header = () => {
  return (
    <nav className="bg-neutral-800 p-8 pb-0">
      <section className="flex flex-row gap-8">
        <div className="flex w-1/3 flex-row items-center">
          <img
            src="/Icon-PC-Amazing.ico"
            className="size-14"
            alt="React logo"
          />
          <h1 className="text-center text-3xl font-bold text-white">
            <span className="text-white">PC</span>
            <span className="ms-3 text-cyan-600">Amazing</span>
          </h1>
        </div>
        <div className="flex w-1/3 flex-row items-center py-2.5">
          <select
            name="category"
            id=""
            className="h-full rounded-s-lg bg-cyan-600 font-semibold text-white"
          >
            <option value="">Todas</option>
            <option value="">PC</option>
            <option value="">Teléfonos</option>
          </select>
          <input
            className="h-full bg-white px-1 text-black"
            type="text"
            placeholder="Buscar..."
          />
          <button className="h-full rounded-e-lg bg-cyan-600 p-1 px-2 text-white">
            Buscar
          </button>
        </div>
        <div className="flex w-1/3 flex-row gap-4">
          <button className="text-white">Usuario</button>
          <button className="text-white">Deseados</button>
          <button className="text-white">Comparar</button>
        </div>
      </section>
      <br />
      <section className="flex flex-row">
        <div className="w-1/3">
          <button className="rounded-t-xl bg-cyan-600 px-6 py-3">
            <span className="font-semibold">Todos los departamentos</span>
          </button>
        </div>
        <div className="w-1/3">
          <ul className="flex list-none flex-row gap-8 py-3">
            <li>Especiles</li>
            <li>Marcas</li>
            <li>PC</li>
            <li>Teléfonos</li>
            <li>Otros</li>
          </ul>
        </div>
        <div className="w-1/3">
          <button className="rounded-t-xl bg-cyan-600 px-6 py-3">
            <span className="font-semibold">Carrito</span>
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Header;
