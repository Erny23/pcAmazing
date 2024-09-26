import React from "react";
import * as megaNavbarOptions from "./desktop";
import { GlobalContext } from "../../context/globalProvider";

const MegaNavbar = () => {

    const { megaNavOption, handleChangeNavOption, listOptionsNav } = React.useContext(GlobalContext);

    const optionsNav = [
        "standard",
        "version 2",
        "version 3",
        "version 4"
    ];

    const renderOptionSelected = () => {
        const option = localStorage.getItem('megaNavOption');
        if (option) {
            handleChangeNavOption(Number(JSON.parse(option)));
        } else {
            return;
        }
    };

    const renderOption = () => {
        switch (megaNavOption) {
            case 0:
                return (<megaNavbarOptions.option1 />);
            case 1:
                return (<megaNavbarOptions.option2 />);
            case 2:
                return (<megaNavbarOptions.option3 />);
            case 3:
                return (<megaNavbarOptions.option4 />);
            default:
                return (<megaNavbarOptions.option1 />);
        }
    };

    React.useEffect(() => {
        renderOptionSelected();
        renderOption();
        listOptionsNav(optionsNav);
    }, []);

    return (
        <>
            {renderOption()}
        </>
    )
};

export default MegaNavbar
