import React from "react";
import * as navbarOptions from "./tablet";
import { GlobalContext } from "../../context/globalProvider";

const Navbar = () => {

  const { navOption, handleChangeNavOption, listOptionsNav } = React.useContext(GlobalContext);

  const optionsNav = [
    "standard",
    "tablet version 2",
    "tablet version 3",
  ];

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
        return (<navbarOptions.option1 />);
      case 1:
        return (<navbarOptions.option2 />);
      case 2:
        return (<navbarOptions.option3 />);
      default:
        return (<navbarOptions.option1 />);
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

export default Navbar
