import React from 'react';
import { GlobalContextProps } from '../types/types';

export const GlobalContext = React.createContext<GlobalContextProps>(null as unknown as GlobalContextProps);

const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    // Tamano de la pantalla actual
    const [ screen, setScreen ] = React.useState("");
    // opciones para la barra de navegación
    const [ optionsNav, setOptionsNav ] = React.useState([""]);
    const [ megaNavOption, setMegaNavOption ] = React.useState(Number(localStorage.getItem("megaNavOption")) | 0);
    const [ navOption, setNavOption ] = React.useState(Number(localStorage.getItem("navOption")) | 0);
    const [ movilNavOption, setMovilNavOption ] = React.useState(Number(localStorage.getItem("movilNavOption")) | 0);
    // Fondo de la barra de navegación
    const [ backgroundNav, setBackgroundNav ] = React.useState(Number(localStorage.getItem("backgroundOption")) | 0);
    // Opciones para el carrusel
    const [ optionsCarousel, setOptionsCarousel ] = React.useState([""]);
    const [ desktopCarouselOption, setDesktopCarouselOption ] = React.useState(Number(localStorage.getItem("desktopCarouselOption")) | 0);
    const [ tabletCarouselOption, setTabletCarouselOption ] = React.useState(Number(localStorage.getItem("tabletCarouselOption")) | 0);
    const [ movilCarouselOption, setMovilCarouselOption ] = React.useState(Number(localStorage.getItem("movilCarouselOption")) | 0);
    const [ isControlsCarousel, setIsControlsCarousel ] = React.useState(Boolean(localStorage.getItem("isControlsCarousel")));

    const listOptionsNav = (options: string[]) => {
        setOptionsNav(options);
    };

    const listOptionsCarousel = (options: string[]) => {
        setOptionsCarousel(options);
    }

    const handleChangeNavOption = (option: number) => {
        if (screen === "pc" && megaNavOption !== option) {
            setMegaNavOption(option);
        } else if (screen === "tablet" && navOption !== option) {
            setNavOption(option);
        } else if (screen === "movil" && movilNavOption !== option) {
            setMovilNavOption(option);
        } else if (screen === "pc") {
            localStorage.setItem('megaNavOption', JSON.stringify(option));
        } else if (screen === "tablet") {
            localStorage.setItem('navOption', JSON.stringify(option));
        } else if (screen === "movil") {
            localStorage.setItem('movilNavOption', JSON.stringify(option));
        }
    };

    const handleChangeBackNav = (option: number) => {
        if (backgroundNav === 0 && option === 0) {
            return
        } else {
            setBackgroundNav(option);
        }
    };

    const handleChangeCarouselOption = (option: number) => {
        if (screen === "pc" && desktopCarouselOption !== option) {
            setDesktopCarouselOption(option);
        } else if (screen === "tablet" && tabletCarouselOption !== option) {
            setTabletCarouselOption(option);
        } else if (screen === "movil" && movilCarouselOption !== option) {
            setMovilCarouselOption(option);
        } else if (screen === "pc") {
            localStorage.setItem('desktopCarouselOption', JSON.stringify(option));
        } else if (screen === "tablet") {
            localStorage.setItem('tabletCarouselOption', JSON.stringify(option));
        } else if (screen === "movil") {
            localStorage.setItem('movilCarouselOption', JSON.stringify(option));
        }
    };

    const handleChangeControlsCarousel = (option: boolean) => {
        if (isControlsCarousel === true && option === false) {
            setIsControlsCarousel(option);
        } else if (isControlsCarousel === false && option === true) {
            setIsControlsCarousel(option);
        } else {
            setIsControlsCarousel(true);
        }
    };

    const contextValues = {
        screen, 
        optionsNav, 
        optionsCarousel,
        megaNavOption, 
        navOption, 
        movilNavOption, 
        desktopCarouselOption,
        tabletCarouselOption,
        movilCarouselOption,
        backgroundNav, 
        isControlsCarousel, 
        handleChangeNavOption, 
        listOptionsNav, 
        listOptionsCarousel, 
        handleChangeBackNav, 
        handleChangeCarouselOption, 
        handleChangeControlsCarousel
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                return setScreen("movil");
            } else if (window.innerWidth <= 768) {
                return setScreen("tablet");
            } else {
                return setScreen("pc");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
