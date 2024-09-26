import React from "react";
import * as desktopCarousel from "./desktop";
import { GlobalContext } from "../../context/globalProvider";

const DesktopCarousel = () => {

    const { desktopCarouselOption, handleChangeCarouselOption, listOptionsCarousel } = React.useContext(GlobalContext);

    const optionsCarousel = [
        "standard",
        "version 2",
        "version 3"
    ];

    const renderOptionSelected = () => {
        const option = localStorage.getItem('desktopCarouselOption');
        if (option) {
            handleChangeCarouselOption(Number(JSON.parse(option)));
        } else {
            return;
        }
    };

    const renderOption = () => {
        switch (desktopCarouselOption) {
            case 0:
                return (<desktopCarousel.option1 />);
            case 1:
                return (<desktopCarousel.option2 />);
            case 2:
                return (<desktopCarousel.option3 />);
            default:
                return (<desktopCarousel.option1 />);
        }
    };

    React.useEffect(() => {
        renderOptionSelected();
        renderOption();
        listOptionsCarousel(optionsCarousel);
    }, []);

    return (
        <>
            {renderOption()}
        </>
    )
}

export default DesktopCarousel
