import React from 'react';
import { GlobalContextProps } from '../types/types';

export const GlobalContext = React.createContext<GlobalContextProps>(null as unknown as GlobalContextProps);

const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [ navOption, setNavOption ] = React.useState(Number(localStorage.getItem("navOption")) | 0);

    const handleChangeNavOption = (option: number) => {
        if (navOption !== option) {
            setNavOption(option);
        } else {
            localStorage.setItem('navOption', JSON.stringify(option));
        }
    };

    return (
        <GlobalContext.Provider value={{ navOption, handleChangeNavOption }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
