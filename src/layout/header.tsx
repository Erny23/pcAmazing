import React from "react";
import * as components from "../components";
import { GlobalContext } from "../context/globalProvider";

const Header = () => {

    const { screen } = React.useContext(GlobalContext);

    return (
        <header className="bg-zinc-800">
            <div>
                {screen === "movil" ? <components.movilNavbar /> : null}
                {screen === "tablet" ? <components.navbar /> : null}
                {screen === "pc" ? <components.megaNavbar /> : null}
            </div>
        </header>
    )
};

export default Header;
