import React from 'react';
import { Button, Label, Select, ToggleSwitch } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from '../../context/globalProvider';

const SettingsControl = () => {

    const location = useLocation();

    const { 
        screen, 
        optionsNav, 
        optionsCarousel, 
        megaNavOption, 
        navOption, 
        movilNavOption, 
        desktopCarouselOption, 
        tabletCarouselOption, 
        movilCarouselOption, 
        handleChangeNavOption, 
        handleChangeCarouselOption, 
        handleChangeBackNav ,
        handleChangeControlsCarousel
    } = React.useContext(GlobalContext);

    const [ navbarOptionSelected, setNavbarOptionSelected ] = React.useState(0);
    const [ carouselOptionSelected, setCarouselOptionSelected ] = React.useState(0);
    const [switch1, setSwitch1] = React.useState(true);

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

    const actualOptionNavbar = () => {
        if (screen === "pc") {
            setNavbarOptionSelected(megaNavOption);
        } else if (screen === "tablet") {
            setNavbarOptionSelected(navOption);
        } else if (screen === "movil") {
            setNavbarOptionSelected(movilNavOption);
        }
    };

    const backgroundChangeNavbar = (option: number) => {
        handleChangeBackNav(option);
        localStorage.setItem('backgroundOption', JSON.stringify(option));
    };

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

    const actualOptionCarousel = () => {
        if (screen === "pc") {
            setCarouselOptionSelected(desktopCarouselOption);
        } else if (screen === "tablet") {
            setCarouselOptionSelected(tabletCarouselOption);
        } else if (screen === "movil") {
            setCarouselOptionSelected(movilCarouselOption);
        }
    };

    const handleChangeOptionControlCarousel = () => {
        if (switch1) {
            setSwitch1(false);
            handleChangeControlsCarousel(false);
            localStorage.setItem('isControlsCarousel', JSON.stringify(false));
        } else {
            setSwitch1(true);
            handleChangeControlsCarousel(true);
            localStorage.setItem('isControlsCarousel', JSON.stringify(true));
        }
    };

    const actualOptionControlCarousel = () => {
        if (localStorage.getItem("isControlsCarousel")) {
            setSwitch1(JSON.parse(localStorage.getItem("isControlsCarousel")!));
            handleChangeControlsCarousel(JSON.parse(localStorage.getItem("isControlsCarousel")!));
        }
    }

    React.useEffect(() => {
        actualOptionNavbar();
        actualOptionCarousel();
        actualOptionControlCarousel();
    }, []);

  return (
    <>
        <div>
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
            {location.pathname === "/" ? (
                <>
                    <br />
                    <h2>Carousel Options</h2>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="navOptions" value="Which carousel option you want to use?" />
                        </div>
                        <Select id="navbarOptions" onChange={handleOptionChangeCarousel} value={carouselOptionSelected} required>
                            {optionsCarousel.map((option, index) => {
                                return (
                                    <option key={index} value={index}>{option}</option>
                                )
                            })}
                        </Select>
                    </div>
                    <br />
                    <div>
                        <h3 className="mb-2.5 text-sm">Controls Carousel</h3>
                        <ToggleSwitch id="controlSwitch" checked={switch1} label="ControlsCarousel" onChange={setSwitch1} onClick={() => {handleChangeOptionControlCarousel()}} />
                    </div>
                </>
            ) : (null)}
        </div>
    </>
  )
}

export default SettingsControl
