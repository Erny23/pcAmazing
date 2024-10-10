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
    autoplaySpeed: 12000,
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
          top: "45%",
          bottom: "auto",
          width: "auto",
          height: "auto",
          zIndex: 20
        }}
      >
        <ul id="carouselDots1" style={{ margin: "0px" }}> {dots} </ul>
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
    autoplaySpeed: 12000,
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
            <div className="flex h-screen w-full items-center justify-center gap-8">
              <div className="imgCarousel1Left relative h-[28rem] w-1/3 xl:h-[32rem] 2xl:h-[36rem]">
                <img id="imgRight" className="absolute right-0 h-full" src="/iphon16-pro-max.png" />
              </div>
              <div id="slickText" className="relative w-1/2 font-sans text-zinc-600">
                <h4 className="absolute -top-24 text-2xl xl:text-2xl xl:ms-12">From $1,199.99</h4>
                <h1 className="absolute -top-12 text-5xl uppercase xl:ms-12">new smart phone</h1>
                <h3 className="absolute -top-1 text-4xl font-light xl:top-3 xl:ms-12">iPhone 16 Pro Max</h3>
                <p className="absolute top-10 max-w-md font-light xl:top-14 xl:text-xl xl:ms-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen w-full items-center justify-center gap-8">
              <div id="slickText" className="relative w-1/2 font-sans text-zinc-600">
                <h4 className="absolute -top-24 text-2xl xl:text-2xl 2xl:ms-96">From $799.99</h4>
                <h1 className="absolute -top-12 text-5xl uppercase 2xl:ms-96">apple pro smartphone</h1>
                <h3 className="absolute top-12 text-4xl font-light xl:top-2 2xl:ms-96">iPhone 15 Pro</h3>
                <p className="absolute top-24 max-w-md font-light xl:top-14 xl:text-xl 2xl:ms-96">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
              <div className="imgCarousel1Right relative h-[28rem] w-1/3 xl:h-[32rem] 2xl:h-[36rem]">
                <img id="imgLeft" className="absolute left-0 h-full" src="/iphon15-pro.png" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen w-full items-center justify-center gap-8">
              <div className="imgCarousel1Left relative h-[28rem] w-1/3 xl:h-[32rem] 2xl:h-[36rem]">
                <img id="imgRight" className="absolute right-0 h-full" src="/iphon14.png" />
              </div>
              <div id="slickText" className="relative w-1/2 font-sans text-zinc-600">
                <h4 className="absolute -top-24 text-2xl xl:text-2xl xl:ms-12">From $499.99</h4>
                <h1 className="absolute -top-12 text-5xl uppercase xl:ms-12">standard apple smartphone</h1>
                <h3 className="absolute top-12 text-4xl font-light xl:ms-12 2xl:-top-2.5">iPhone 14</h3>
                <p className="absolute top-24 max-w-md font-light xl:top-24 xl:text-xl xl:ms-12 2xl:top-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
        </Slider>
      )
    } else {
      return (
        <Slider {...settings2}>
          <div>
            <div className="flex h-screen w-full items-center justify-center gap-8">
              <div className="imgCarousel1Left relative h-[28rem] w-1/3 xl:h-[32rem] 2xl:h-[36rem]">
                <img id="imgRight" className="absolute right-0 h-full" src="/iphon16-pro-max.png" />
              </div>
              <div id="slickText" className="relative w-1/2 font-sans text-zinc-600">
                <h4 className="absolute -top-24 text-2xl xl:text-2xl xl:ms-12">From $1,199.99</h4>
                <h1 className="absolute -top-12 text-5xl uppercase xl:ms-12">new smart phone</h1>
                <h3 className="absolute -top-1 text-4xl font-light xl:top-3 xl:ms-12">iPhone 16 Pro Max</h3>
                <p className="absolute top-10 max-w-md font-light xl:top-14 xl:text-xl xl:ms-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen w-full items-center justify-center gap-8">
              <div id="slickText" className="relative w-1/2 font-sans text-zinc-600">
                <h4 className="absolute -top-24 text-2xl xl:text-2xl 2xl:ms-96">From $799.99</h4>
                <h1 className="absolute -top-12 text-5xl uppercase 2xl:ms-96">apple pro smartphone</h1>
                <h3 className="absolute top-12 text-4xl font-light xl:top-2 2xl:ms-96">iPhone 15 Pro</h3>
                <p className="absolute top-24 max-w-md font-light xl:top-14 xl:text-xl 2xl:ms-96">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
              <div className="imgCarousel1Right relative h-[28rem] w-1/3 xl:h-[32rem] 2xl:h-[36rem]">
                <img id="imgLeft" className="absolute left-0 h-full" src="/iphon15-pro.png" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-screen w-full items-center justify-center gap-8">
              <div className="imgCarousel1Left relative h-[28rem] w-1/3 xl:h-[32rem] 2xl:h-[36rem]">
                <img id="imgRight" className="absolute right-0 h-full" src="/iphon14.png" />
              </div>
              <div id="slickText" className="relative w-1/2 font-sans text-zinc-600">
                <h4 className="absolute -top-24 text-2xl xl:text-2xl xl:ms-12">From $499.99</h4>
                <h1 className="absolute -top-12 text-5xl uppercase xl:ms-12">standard apple smartphone</h1>
                <h3 className="absolute top-12 text-4xl font-light xl:ms-12 2xl:-top-2.5">iPhone 14</h3>
                <p className="absolute top-24 max-w-md font-light xl:top-24 xl:text-xl xl:ms-12 2xl:top-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero pariatur minima laboriosam.</p>
              </div>
            </div>
          </div>
        </Slider>
      )
    }
  }

  React.useEffect(() => {
    renderCarouselContent();
    if (!localStorage.getItem("isControlsCarousel")) {
      localStorage.setItem("isControlsCarousel", JSON.stringify(true));
    }
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
