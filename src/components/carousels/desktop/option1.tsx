import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { GlobalContext } from "../../../context/globalProvider";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute" }}
      onClick={onClick}
    ><MdKeyboardArrowDown className="size-10 text-zinc-700 hover:text-teal-400" /></div>
  );
};

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute" }}
      onClick={onClick}
    ><MdKeyboardArrowUp className="size-10 text-zinc-700 hover:text-teal-400" /></div>
  );
};

const Option1 = () => {
  
  //const [oldSlide, setOldSlide] = React.useState<number>(0);
  //const [activeSlide, setActiveSlide] = React.useState<number>(0);
  //const [activeSlide2, setActiveSlide2] = React.useState<number>(0);

  const { isControlsCarousel } = React.useContext(GlobalContext);

  const settings1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          top: "40%",
          bottom: "auto",
          width: "auto",
          height: "auto",
          zIndex: 20
        }}
      >
        <ul id="carouselDots" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        key={i+1}
        className="relative block h-5"
      ><FaCircle /></div>
    ),
    /*beforeChange: (current: number, next: number) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current: React.SetStateAction<number>) => setActiveSlide2(current)*/
  };

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    vertical: true,
    verticalSwiping: true
  };

  const renderCarouselContent = () => {

    if (isControlsCarousel) {
      return (
        <Slider {...settings1}>
          <div>
            <div className="flex h-screen items-center justify-center gap-8 space-x-0">
              <div className="relative size-[28rem] xl:size-[32rem] 2xl:size-[36rem]">
                <img id="imgRight" className="absolute left-24 h-full" src="/iphon16-pro-max.png" />
              </div>
              <div id="slickText" className="relative w-1/3 font-sans text-zinc-600 xl:w-1/2">
                <h4 className="absolute -top-20 text-xl xl:-top-24 xl:text-2xl">From $1,199.99</h4>
                <h1 className="absolute -top-12 text-4xl uppercase xl:text-5xl">new smart phone</h1>
                <h3 className="absolute -top-2.5 text-3xl font-light xl:top-3 xl:text-4xl">iPhone 16 Pro Max</h3>
                <p className="absolute top-8 max-w-md font-light xl:top-16 xl:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen items-center justify-center gap-8 space-x-16 xl:ms-8 xl:space-x-0">
              <div id="slickText" className="relative w-1/3 font-sans text-zinc-600 xl:w-1/3">
                <h4 className="absolute -top-20 text-xl xl:-top-24 xl:text-2xl">From $799.99</h4>
                <h1 className="absolute -top-12 text-4xl uppercase xl:text-5xl">apple pro smartphone</h1>
                <h3 className="absolute top-8 text-3xl font-light xl:top-2 xl:text-4xl">iPhone 15 Pro</h3>
                <p className="absolute top-20 max-w-md font-light xl:top-14 xl:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
              <div className="relative size-[28rem] xl:size-[32rem] 2xl:size-[36rem]">
                <img id="imgLeft" className="absolute h-full" src="/iphon15-pro.png" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen items-center justify-center gap-8 space-x-0">
              <div className="relative size-[28rem] xl:size-[32rem] 2xl:size-[36rem]">
                <img id="imgRight" className="absolute left-24 h-full" src="/iphon14.png" />
              </div>
              <div id="slickText" className="relative w-2/5 font-sans text-zinc-600 xl:w-1/2">
                <h4 className="absolute -top-20 text-xl xl:-top-24 xl:text-2xl">From $499.99</h4>
                <h1 className="absolute -top-12 text-4xl uppercase xl:text-5xl">standard apple smartphone</h1>
                <h3 className="absolute top-8 text-3xl font-light xl:top-14 xl:text-4xl 2xl:-top-2.5">iPhone 14</h3>
                <p className="absolute top-20 max-w-md font-light xl:top-28 xl:text-xl 2xl:top-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
        </Slider>
      )
    } else {
      return (
        <Slider {...settings2}>
          <div>
            <div className="flex h-screen items-center justify-center gap-8 space-x-24">
              <div className="relative size-80">
                <img id="imgRight" className="absolute h-80" src="/iphon16-pro-max.png" />
              </div>
              <div id="slickText" className="relative w-1/3 font-sans text-zinc-600">
                <h4 className="absolute -top-20 text-xl">From $1,199.99</h4>
                <h1 className="absolute -top-12 text-4xl uppercase">new smart phone</h1>
                <h3 className="absolute -top-2.5 text-3xl font-light">iPhone 16 Pro Max</h3>
                <p className="absolute top-8 max-w-md font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen items-center justify-center gap-8 space-x-24">
              <div id="slickText" className="relative w-1/3 font-sans text-zinc-600 xl:w-2/5">
                <h4 className="absolute -top-20 text-xl">From $799.99</h4>
                <h1 className="absolute -top-12 text-4xl uppercase">apple pro smartphone</h1>
                <h3 className="absolute top-8 text-3xl font-light xl:-top-2.5">iPhone 15 Pro</h3>
                <p className="absolute top-20 max-w-md font-light xl:top-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
              <div className="relative size-80">
                <img id="imgLeft" className="absolute h-80" src="/iphon15-pro.png" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen items-center justify-center gap-8 space-x-24">
              <div className="relative size-80">
                <img id="imgRight" className="absolute h-80" src="/iphon14.png" />
              </div>
              <div id="slickText" className="relative w-2/5 font-sans text-zinc-600">
                <h4 className="absolute -top-20 text-xl">From $499.99</h4>
                <h1 className="absolute -top-12 text-4xl uppercase">standard apple smartphone</h1>
                <h3 className="absolute top-8 text-3xl font-light 2xl:-top-2.5">iPhone 14</h3>
                <p className="absolute top-20 max-w-md font-light 2xl:top-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
        </Slider>
      )
    }
  }

  React.useEffect(() => {
    renderCarouselContent();
  }, []);

  return (
    <div id="carouselOption1" className="slider-container relative">
      <div>
        {/*<h2>beforeChange and afterChange hooks</h2>
        <p>
          BeforeChange {"=>"} oldSlide: <strong>{oldSlide}</strong>
        </p>
        <p>
          BeforeChange {"=>"} activeSlide: <strong>{activeSlide}</strong>
        </p>
        <p>
          AfterChange {"=>"} activeSlide: <strong>{activeSlide2}</strong>
        </p>*/}
      </div>
      {renderCarouselContent()}
    </div>
  );
}

export default Option1
