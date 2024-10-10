import React from "react";
import * as components from "../components";
import { GlobalContext } from "../context/globalProvider";

const Home = () => {

  const { screen, isCarousel, isBanner, handleChangeIsCarousel, handleChangeIsBanner } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (!localStorage.getItem("isCarousel")) {
      handleChangeIsCarousel(true);
      localStorage.setItem("isCarousel", JSON.stringify(true));
    }

    if (!localStorage.getItem("isBanner")) {
      handleChangeIsBanner(true);
      localStorage.setItem("isBanner", JSON.stringify(true));
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      {isCarousel ? (
        <section id="carouselsSection">
          {screen === "movil" ? <components.movilCarousel /> : null}
          {screen === "tablet" ? <components.tabletCarousel /> : null}
          {screen === "pc" ? <components.desktopCarousel /> : null}
        </section>
        ) : (null)
      }
      {isBanner ? (
        <section id="bannerSection">
          {screen === "movil" ? <components.movilBanner /> : null}
          {screen === "tablet" ? <components.tabletBanner /> : null}
          {screen === "pc" ? <components.desktopBanner /> : null}
        </section>
      ) : (null)
      }
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-800">
        <components.default />
      </div>
    </main>
  )
}

export default Home
