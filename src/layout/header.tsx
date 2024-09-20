import React from "react";
import * as components from "../components";

const Header = () => {

    const [ movil, setMovil ] = React.useState(false);
    const [ tablet, setTablet ] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                return (setMovil(true), setTablet(false));
            } else if (window.innerWidth < 768) {
                return (setMovil(false), setTablet(true));
            } else {
                return (setMovil(false), setTablet(false));
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="bg-zinc-800">
            <div>
                {movil && !tablet ? <components.movilNavbar /> : null}
                {!movil && tablet ? <components.navbar /> : null}
                {movil || tablet ? null : <components.megaNavbar />}
            </div>
        </header>
    )
};

export default Header;
