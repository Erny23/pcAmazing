export interface GlobalContextProps {
    screen: string;
    megaNavOption: number;
    navOption: number;
    movilNavOption: number;
    desktopCarouselOption: number;
    tabletCarouselOption: number;
    movilCarouselOption: number;
    optionsNav: string[];
    optionsCarousel: string[];
    backgroundNav: number;
    isCarousel: boolean;
    isControlsCarousel: boolean;
    isBanner: boolean;
    optionsBanner: string[];
    desktopBannerOption: number;
    tabletBannerOption: number;
    movilBannerOption: number;
    handleChangeNavOption: (option: number) => void;
    listOptionsNav: (options: string[]) => void;
    listOptionsCarousel: (options: string[]) => void;
    handleChangeBackNav: (option: number) => void;
    handleChangeCarouselOption: (option: number) => void;
    handleChangeIsCarousel: (option: boolean) => void;
    handleChangeControlsCarousel: (option: boolean) => void;
    handleChangeIsBanner: (option: boolean) => void;
    handleChangeBannerOption: (option: number) => void;
    listOptionsBanner: (options: string[]) => void;
}