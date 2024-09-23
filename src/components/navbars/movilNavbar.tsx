import React from "react";
import * as movilNavbarOptions from "./movilNavbarOptions";
import { GlobalContext } from "../../context/globalProvider";

const MovilNavbar = () => {

  const { navOption, handleChangeNavOption, listOptions } = React.useContext(GlobalContext);

  const optionsNav = [
    "standard",
    "movil version 2",
    "movil version 3",
  ];

  const renderOptionSelected = () => {
    const option = localStorage.getItem('movilNavOption');
    if (option) {
      handleChangeNavOption(Number(JSON.parse(option)));
    } else {
      return;
    }
  };

  const renderOption = () => {
    switch (navOption) {
      case 0:
        return (<movilNavbarOptions.option1 />);
      case 1:
        return (<movilNavbarOptions.option2 />);
      case 2:
        return (<movilNavbarOptions.option3 />);
      default:
        return (<movilNavbarOptions.option1 />);
    }
  };

  React.useEffect(() => {
    renderOptionSelected();
    renderOption();
    listOptions(optionsNav);
  }, []);

  return (
    <>
      {renderOption()}
    </>
  )
};

export default MovilNavbar
