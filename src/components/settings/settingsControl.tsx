import React from 'react';
import { Button, Label, Select, ToggleSwitch } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from '../../context/globalProvider';

const SettingsControl = () => {

    const location = useLocation();

    // variables globales
    const {
        /*pantalla actual*/
        screen,
        /*variables de barra de navegación*/
        optionsNav,
        megaNavOption,
        navOption,
        movilNavOption,
        /*variables de carrusel*/
        optionsCarousel,
        desktopCarouselOption,
        tabletCarouselOption,
        movilCarouselOption,
        /*variables de banner*/
        optionsBanner, 
        desktopBannerOption, 
        tabletBannerOption, 
        movilBannerOption, 
        /*funciones de barra de navegación*/
        handleChangeNavOption,
        handleChangeBackNav,
        /*funciones de carrusel*/
        handleChangeCarouselOption,
        handleChangeIsCarousel,
        handleChangeControlsCarousel, 
        /*funciones de banner*/
        handleChangeIsBanner, 
        handleChangeBannerOption
    } = React.useContext(GlobalContext);

    // opciones seleccionadas
    const [navbarOptionSelected, setNavbarOptionSelected] = React.useState(0);
    const [carouselOptionSelected, setCarouselOptionSelected] = React.useState(0);
    const [bannerOptionSelected, setBannerOptionSelected] = React.useState(0);
    // switches de componentes activos/inactivos
    const [switchCarousel, setSwitchCarousel] = React.useState(true);
    const [switchControlsCarousel, setSwitchControlsCarousel] = React.useState(true);
    const [switchBanner, setSwitchBanner] = React.useState(true);

    // función de cambio de opción de barra de navegación
    const handleOptionChangeNavbar = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setNavbarOptionSelected(value);
        handleChangeNavOption(value);
        if (screen === "pc") {
            localStorage.setItem('megaNavOption', JSON.stringify(value));
        } else if (screen === "tablet") {
            localStorage.setItem('navOption', JSON.stringify(value));
        } else if (screen === "movil") {
            localStorage.setItem('movilNavOption', JSON.stringify(value));
        }
    };

    // función de opción para barra de navegación seleccionada según pantalla
    const actualOptionNavbar = () => {
        if (screen === "pc") {
            setNavbarOptionSelected(megaNavOption);
        } else if (screen === "tablet") {
            setNavbarOptionSelected(navOption);
        } else if (screen === "movil") {
            setNavbarOptionSelected(movilNavOption);
        }
    };

    // función de cambio de fondo en barra de navegación
    const backgroundChangeNavbar = (option: number) => {
        handleChangeBackNav(option);
        localStorage.setItem('backgroundOption', JSON.stringify(option));
    };

    // función de cambio de opción de carrusel
    const handleOptionChangeCarousel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setCarouselOptionSelected(value);
        handleChangeCarouselOption(value);
        if (screen === "pc") {
            localStorage.setItem('desktopCarouselOption', JSON.stringify(value));
        } else if (screen === "tablet") {
            localStorage.setItem('tabletCarouselOption', JSON.stringify(value));
        } else if (screen === "movil") {
            localStorage.setItem('movilCarouselOption', JSON.stringify(value));
        }
    };

    // función de opción para carrusel seleccionada según pantalla
    const actualOptionCarousel = () => {
        if (screen === "pc") {
            setCarouselOptionSelected(desktopCarouselOption);
        } else if (screen === "tablet") {
            setCarouselOptionSelected(tabletCarouselOption);
        } else if (screen === "movil") {
            setCarouselOptionSelected(movilCarouselOption);
        }
    };

    // función de cambio de componente activo/inactivo carrusel
    const handleChangeSwitchCarousel = () => {
        if (switchCarousel) {
            setSwitchCarousel(false);
            handleChangeIsCarousel(false);
            localStorage.setItem('isCarousel', JSON.stringify(false));
        } else {
            setSwitchCarousel(true);
            handleChangeIsCarousel(true);
            localStorage.setItem('isCarousel', JSON.stringify(true));
        }
    };

    // función de verificación de componente activo/inactivo carrusel
    const actualOptionSwitchCarousel = () => {
        if (localStorage.getItem("isCarousel")) {
            setSwitchCarousel(JSON.parse(localStorage.getItem("isCarousel")!));
            handleChangeIsCarousel(JSON.parse(localStorage.getItem("isCarousel")!));
        }
    };
    
    // función de cambio para controles de carrusel activo/inactivo
    const handleChangeOptionControlCarousel = () => {
        if (switchControlsCarousel) {
            setSwitchControlsCarousel(false);
            handleChangeControlsCarousel(false);
            localStorage.setItem('isControlsCarousel', JSON.stringify(false));
        } else {
            setSwitchControlsCarousel(true);
            handleChangeControlsCarousel(true);
            localStorage.setItem('isControlsCarousel', JSON.stringify(true));
        }
    };

    // función de verificación de controles para carrusel activo/inactivo
    const actualOptionControlCarousel = () => {
        if (localStorage.getItem("isControlsCarousel")) {
            setSwitchControlsCarousel(JSON.parse(localStorage.getItem("isControlsCarousel")!));
            handleChangeControlsCarousel(JSON.parse(localStorage.getItem("isControlsCarousel")!));
        }
    };

    // función de cambio de componente activo/inactivo banner
    const handleChangeSwitchBanner = () => {
        if (switchBanner) {
            setSwitchBanner(false);
            handleChangeIsBanner(false);
            localStorage.setItem('isBanner', JSON.stringify(false));
            console.log(switchBanner);
        } else {
            setSwitchBanner(true);
            handleChangeIsBanner(true);
            localStorage.setItem('isBanner', JSON.stringify(true));
            console.log(switchBanner);
        }
    };

    // función de verificación de componente activo/inactivo banner
    const actualOptionSwitchBanner = () => {
        if (localStorage.getItem("isBanner")) {
            setSwitchBanner(JSON.parse(localStorage.getItem("isBanner")!));
            handleChangeIsBanner(JSON.parse(localStorage.getItem("isBanner")!));
        }
    };

    // función de cambio de opción de banner
    const handleOptionChangeBanner = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setBannerOptionSelected(value);
        handleChangeBannerOption(value);
        if (screen === "pc") {
            localStorage.setItem('desktopBannerOption', JSON.stringify(value));
        } else if (screen === "tablet") {
            localStorage.setItem('tabletBannerOption', JSON.stringify(value));
        } else if (screen === "movil") {
            localStorage.setItem('movilBannerOption', JSON.stringify(value));
        }
    };

    // función de opción para banner seleccionada según pantalla
    const actualOptionBanner = () => {
        if (screen === "pc") {
            setBannerOptionSelected(desktopBannerOption);
        } else if (screen === "tablet") {
            setBannerOptionSelected(tabletBannerOption);
        } else if (screen === "movil") {
            setBannerOptionSelected(movilBannerOption);
        }
    };

    const resetOptionsLocal = () => {
        localStorage.clear();
        console.log(localStorage.getItem("megaNavOption"));
        console.log(localStorage.getItem("desktopCarouselOption"));
        console.log(localStorage.getItem("desktopBannerOption"));
    }

    React.useEffect(() => {
        actualOptionNavbar();
        actualOptionCarousel();
        actualOptionSwitchCarousel();
        actualOptionControlCarousel();
        actualOptionSwitchBanner();
        actualOptionBanner();
    }, []);

    return (
        <>
            <div>
                <h2>Reset</h2>
                <button className="rounded-md bg-zinc-200 px-2 py-1" onClick={() => resetOptionsLocal()}>Delete options selected</button>
                <br />
                <br />
                <h2>Layout Options</h2>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="navOptions" value="Which layout option you want to use?" />
                    </div>
                    <Select id="navbarOptions" onChange={handleOptionChangeNavbar} value={navbarOptionSelected} required>
                        {optionsNav.map((option, index) => {
                            return (
                                <option key={index} value={index}>{option}</option>
                            )
                        })}
                    </Select>
                </div>
                {navbarOptionSelected === 3 && screen === "pc" ? (null) : (
                    <>
                        <br />
                        <div>
                            <h3 className="mb-2.5 text-sm">Switch background</h3>
                            <div className="flex gap-2">
                                <Button className="rounded-sm bg-gray-200 p-0 text-zinc-700 hover:bg-gray-300" onClick={() => backgroundChangeNavbar(0)}>White</Button>
                                <Button className="rounded-sm bg-gray-200 p-0 text-zinc-700 hover:bg-gray-300" onClick={() => backgroundChangeNavbar(1)}>Transparent</Button>
                            </div>
                        </div>
                    </>)
                }
                {location.pathname === "/" ?
                    (
                        <>
                            <br />
                            <div>
                                <h3 className="mb-2.5 text-sm">Carousel</h3>
                                <ToggleSwitch id="switch" checked={switchCarousel} label="Carousel" onChange={setSwitchCarousel} onClick={() => { handleChangeSwitchCarousel() }} />
                            </div>
                        </>
                    ) : (null)
                }
                {location.pathname === "/" && switchCarousel === true ? (
                    <>
                        <br />
                        <h2>Carousel Options</h2>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="carouselOptions" value="Which carousel option you want to use?" />
                            </div>
                            <Select id="carouselOptions" onChange={handleOptionChangeCarousel} value={carouselOptionSelected} required>
                                {optionsCarousel.map((option, index) => {
                                    return (
                                        <option key={index} value={index}>{option}</option>
                                    )
                                })}
                            </Select>
                        </div>
                        {carouselOptionSelected !== 2 && switchCarousel === true ?
                            (
                                <>
                                    <br />
                                    <div>
                                        <h3 className="mb-2.5 text-sm">Controls Carousel</h3>
                                        <ToggleSwitch id="switch" checked={switchControlsCarousel} label="ControlsCarousel" onChange={setSwitchControlsCarousel} onClick={() => { handleChangeOptionControlCarousel() }} />
                                    </div>
                                </>
                            ) : (null)
                        }
                    </>
                    ) : (null)
                }
                {location.pathname === "/" ?
                    (
                        <>
                            <br />
                            <div>
                                <h3 className="mb-2.5 text-sm">Banner</h3>
                                <ToggleSwitch id="switch" checked={switchBanner} label="Banner" onChange={setSwitchBanner} onClick={() => { handleChangeSwitchBanner() }} />
                            </div>
                        </>
                    ) : (null)
                }
                {location.pathname === "/" && switchBanner === true ? (
                    <>
                        <br />
                        <h2>Banners Options</h2>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="bannerOptions" value="Which banner option you want to use?" />
                            </div>
                            <Select id="bannerOptions" onChange={handleOptionChangeBanner} value={bannerOptionSelected} required>
                                {optionsBanner.map((option, index) => {
                                    return (
                                        <option key={index} value={index}>{option}</option>
                                    )
                                })}
                            </Select>
                        </div>
                    </>
                    ) : (null)
                }
            </div>
        </>
    )
}

export default SettingsControl
