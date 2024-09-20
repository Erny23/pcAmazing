import React from "react";
import * as megaNavbarOptions from "./megaNavbarOptions";
import { GlobalContext } from "../../context/globalProvider";

const MegaNavbar = () => {

    const { navOption, handleChangeNavOption } = React.useContext(GlobalContext);

    const renderOptionSelected = () => {
        const option = localStorage.getItem('navOption');
        if (option) {
            handleChangeNavOption(Number(JSON.parse(option)));
        } else {
            return;
        }
    };

    const renderOption = () => {
        switch (navOption) {
            case 0:
                return (<megaNavbarOptions.option1 />);
            case 1:
                return (<megaNavbarOptions.option2 />);
            case 2:
                return (<megaNavbarOptions.option3 />);
            default:
                return (<megaNavbarOptions.option1 />);
        }
    };

    React.useEffect(() => {
        renderOptionSelected();
        renderOption();
    }, []);

    return (
        <>
            {renderOption()}
        </>
    )
};

export default MegaNavbar
