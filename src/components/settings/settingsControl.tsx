import React from 'react';
import { Label, Select } from "flowbite-react";
import { GlobalContext } from '../../context/globalProvider';

const SettingsControl = () => {

    const { screen, options, megaNavOption, navOption, movilNavOption, handleChangeNavOption } = React.useContext(GlobalContext);

    const [ optionSelected, setOptionSelected ] = React.useState(0);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setOptionSelected(value);
        handleChangeNavOption(value);
        if (screen === "pc") {
            localStorage.setItem('megaNavOption', JSON.stringify(value));
        } else if (screen === "tablet") {
            localStorage.setItem('navOption', JSON.stringify(value));
        } else if (screen === "movil") {
            localStorage.setItem('movilNavOption', JSON.stringify(value));
        }
    };

    const actualOption = () => {
        if (screen === "pc") {
            setOptionSelected(megaNavOption);
        } else if (screen === "tablet") {
            setOptionSelected(navOption);
        } else if (screen === "movil") {
            setOptionSelected(movilNavOption);
        }
    };

    React.useEffect(() => {
        actualOption();
    }, []);

  return (
    <>
        <h2>Layout Options</h2>
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label htmlFor="navOptions" value="Which layout option you want to use?" />
            </div>
            <Select id="navbarOptions" onChange={handleOptionChange} value={optionSelected} required>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={index}>{option}</option>
                    )
                })}
            </Select>
        </div>
    </>
  )
}

export default SettingsControl
