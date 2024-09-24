import React from 'react';
import { Button, Label, Select } from "flowbite-react";
import { GlobalContext } from '../../context/globalProvider';

const SettingsControl = () => {

    const { screen, options, megaNavOption, navOption, movilNavOption, handleChangeNavOption, handleChangeBackNav } = React.useContext(GlobalContext);

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

    const backgroundChange = (option: number) => {
        handleChangeBackNav(option);
        localStorage.setItem('backgroundOption', JSON.stringify(option));
    }

    React.useEffect(() => {
        actualOption();
    }, []);

  return (
    <>
        <div>
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
            <br />
            <div>
                <h3 className="mb-2.5 text-sm">Switch background</h3>
                <div className="flex gap-2">
                    <Button className="rounded-sm bg-gray-200 p-0 text-zinc-700 hover:bg-gray-300" onClick={() => backgroundChange(0)}>White</Button>
                    <Button className="rounded-sm bg-gray-200 p-0 text-zinc-700 hover:bg-gray-300" onClick={() => backgroundChange(1)}>Transparent</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SettingsControl
