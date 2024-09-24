export interface GlobalContextProps {
    screen: string;
    megaNavOption: number;
    navOption: number;
    movilNavOption: number;
    options: string[];
    background: number;
    handleChangeNavOption: (option: number) => void;
    listOptions: (options: string[]) => void;
    handleChangeBackNav: (option: number) => void;
}