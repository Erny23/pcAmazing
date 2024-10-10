import React from "react";
import * as desktopBanner from "./desktop";
import { GlobalContext } from "../../context/globalProvider";

const DesktopBanner = () => {

    const { desktopBannerOption, handleChangeBannerOption, listOptionsBanner } = React.useContext(GlobalContext);

    const optionsBanner = [
        "standard",
        "version 2",
        "version 3"
    ];

    const renderOptionSelected = () => {
        const option = localStorage.getItem('desktopCarouselOption');
        if (option) {
            handleChangeBannerOption(Number(JSON.parse(option)));
        } else {
            return;
        }
    };

    const renderOption = () => {
        switch (desktopBannerOption) {
            case 0:
                return (<desktopBanner.option1 />);
            case 1:
                return (<desktopBanner.option2 />);
            case 2:
                return (<desktopBanner.option3 />);
            default:
                return (<desktopBanner.option1 />);
        }
    };

    React.useEffect(() => {
        renderOptionSelected();
        renderOption();
        listOptionsBanner(optionsBanner);
    }, []);

  return (
    <>
        {renderOption()}
    </>
  )
}

export default DesktopBanner
