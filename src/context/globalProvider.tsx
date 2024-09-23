import React from 'react';
import { GlobalContextProps } from '../types/types';

export const GlobalContext = React.createContext<GlobalContextProps>(null as unknown as GlobalContextProps);

const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [ screen, setScreen ] = React.useState("");
    const [ options, setOptions ] = React.useState([""]);
    const [ megaNavOption, setMegaNavOption ] = React.useState(Number(localStorage.getItem("megaNavOption")) | 0);
    const [ navOption, setNavOption ] = React.useState(Number(localStorage.getItem("navOption")) | 0);
    const [ movilNavOption, setMovilNavOption ] = React.useState(Number(localStorage.getItem("movilNavOption")) | 0);

    const listOptions = (options: string[]) => {
        setOptions(options);
    }

    const handleChangeNavOption = (option: number) => {
        if (screen === "pc" && megaNavOption !== option) {
            setMegaNavOption(option);
        } else if (screen === "tablet" && navOption !== option) {
            setNavOption(option);
        } else if (screen === "movil" && movilNavOption !== option) {
            setMovilNavOption(option);
        } else if (screen === "pc") {
            localStorage.setItem('megaNavOption', JSON.stringify(option));
        } else if (screen === "tablet") {
            localStorage.setItem('navOption', JSON.stringify(option));
        } else if (screen === "movil") {
            localStorage.setItem('movilNavOption', JSON.stringify(option));
        }
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                return setScreen("movil");
            } else if (window.innerWidth <= 768) {
                return setScreen("tablet");
            } else {
                return setScreen("pc");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <GlobalContext.Provider value={{ screen, options, megaNavOption, navOption, movilNavOption, handleChangeNavOption, listOptions }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
