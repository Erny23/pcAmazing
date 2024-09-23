export interface GlobalContextProps {
    screen: string;
    megaNavOption: number;
    navOption: number;
    movilNavOption: number;
    options: string[];
    handleChangeNavOption: (option: number) => void;
    listOptions: (options: string[]) => void;
}