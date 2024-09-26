import React from "react";
import * as components from "../components";
import { GlobalContext } from "../context/globalProvider";

const Home = () => {

  const { screen } = React.useContext(GlobalContext);

  return (
    <main>
      <section id="carouselsSection">
        {screen === "movil" ? <components.movilCarousel /> : null}
        {screen === "tablet" ? <components.tabletCarousel /> : null}
        {screen === "pc" ? <components.desktopCarousel /> : null}
      </section>
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-800">
        <components.default />
      </div>
    </main>
  )
}

export default Home
