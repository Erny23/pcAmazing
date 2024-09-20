import React from 'react';
import { Label, Select } from "flowbite-react";
import { GlobalContext } from '../../context/globalProvider';

const SettingsControl = () => {

    const { navOption, handleChangeNavOption } = React.useContext(GlobalContext);

    const [ optionSelected, setOptionSelected ] = React.useState(navOption);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setOptionSelected(value);
        localStorage.setItem('navOption', JSON.stringify(value));
        handleChangeNavOption(value);
    }

  return (
    <>
        <h2>Layout Options</h2>
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label htmlFor="navOptions" value="Which layout option you want to use?" />
            </div>
            <Select id="navbarOptions" onChange={handleOptionChange} value={optionSelected} required>
                <option value={0}>standard</option>
                <option value={1}>option 2</option>
                <option value={2}>option 3</option>
            </Select>
        </div>
    </>
  )
}

export default SettingsControl
