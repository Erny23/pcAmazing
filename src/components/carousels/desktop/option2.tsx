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

const Option2 = () => {

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
        <ul id="carouselDots2" style={{ margin: "0px" }}> {dots} </ul>
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
            <div className="relative flex h-screen w-full items-start justify-center">
              <div className="absolute -inset-1 bg-black"></div>
              <div className="absolute -inset-1 z-20">
                <img className="size-full" src="/iphon16-pro-max-2.png" />
              </div>
              <div id="slickText" className="relative mt-16 h-36 w-[30rem] font-sans text-zinc-200 xl:mt-32 2xl:mt-48">
                <h4 className="absolute inset-x-0 top-0 text-center text-3xl">From $1,199.99</h4>
                <h1 className="absolute inset-x-0 top-1/3 text-center text-5xl uppercase">new smart phone</h1>
                <h3 className="absolute inset-x-0 bottom-0 text-center text-5xl font-light">iPhone 16 Pro Max</h3>
              </div>
              <div id="coposCarousel2" className="size-3 self-end">
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[8%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[18%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[38%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[48%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute right-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[28%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[5%]"><FaCircle className="size-2 text-white" /></div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex h-screen w-full items-start justify-center">
              <div className="absolute -inset-1 bg-black"></div>
              <div className="absolute -inset-1 z-20">
                <img className="size-full" src="/iphon15-pro-2.png" />
              </div>
              <div id="slickText" className="relative mt-16 h-52 w-[30rem] font-sans text-zinc-200 xl:mt-20 2xl:mt-36">
                <h4 className="absolute inset-x-0 top-0 text-center text-3xl">From $799.99</h4>
                <h1 className="absolute inset-x-0 top-1/4 text-center text-5xl uppercase">apple pro smartphone</h1>
                <h3 className="absolute inset-x-0 bottom-0 text-center text-5xl font-light">iPhone 15 Pro</h3>
              </div>
              <div id="coposCarousel2" className="size-3 self-end">
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[8%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[18%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[38%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[48%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute right-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[28%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[5%]"><FaCircle className="size-2 text-white" /></div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex h-screen w-full items-start justify-center">
              <div className="absolute -inset-1 bg-black"></div>
              <div className="absolute -inset-1 z-20">
                <img className="size-full" src="/iphon14-2.png" />
              </div>
              <div id="slickText" className="relative mt-16 h-52 w-[30rem] font-sans text-zinc-200 xl:mt-16 2xl:mt-32">
                <h4 className="absolute inset-x-0 top-0 text-center text-3xl">From $499.99</h4>
                <h1 className="absolute inset-x-0 top-1/4 text-center text-5xl uppercase">standard apple smartphone</h1>
                <h3 className="absolute inset-x-0 bottom-0 text-center text-5xl font-light">iPhone 14</h3>
              </div>
              <div id="coposCarousel2" className="size-3 self-end">
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[8%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[18%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[38%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[48%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute right-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[28%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[5%]"><FaCircle className="size-2 text-white" /></div>
              </div>
            </div>
          </div>
        </Slider>
      )
    } else {
      return (
        <Slider {...settings2}>
          <div>
            <div className="relative flex h-screen w-full items-start justify-center">
              <div className="absolute -inset-1 bg-black"></div>
              <div className="absolute -inset-1 z-20">
                <img className="size-full" src="/iphon16-pro-max-2.png" />
              </div>
              <div id="slickText" className="relative mt-16 h-36 w-[30rem] font-sans text-zinc-200 xl:mt-32 2xl:mt-48">
                <h4 className="absolute inset-x-0 top-0 text-center text-3xl">From $1,199.99</h4>
                <h1 className="absolute inset-x-0 top-1/3 text-center text-5xl uppercase">new smart phone</h1>
                <h3 className="absolute inset-x-0 bottom-0 text-center text-5xl font-light">iPhone 16 Pro Max</h3>
              </div>
              <div id="coposCarousel2" className="size-3 self-end">
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[8%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[18%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[38%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[48%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute right-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[28%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[5%]"><FaCircle className="size-2 text-white" /></div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex h-screen w-full items-start justify-center">
              <div className="absolute -inset-1 bg-black"></div>
              <div className="absolute -inset-1 z-20">
                <img className="size-full" src="/iphon15-pro-2.png" />
              </div>
              <div id="slickText" className="relative mt-16 h-52 w-[30rem] font-sans text-zinc-200 xl:mt-20 2xl:mt-36">
                <h4 className="absolute inset-x-0 top-0 text-center text-3xl">From $799.99</h4>
                <h1 className="absolute inset-x-0 top-1/4 text-center text-5xl uppercase">apple pro smartphone</h1>
                <h3 className="absolute inset-x-0 bottom-0 text-center text-5xl font-light">iPhone 15 Pro</h3>
              </div>
              <div id="coposCarousel2" className="size-3 self-end">
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[8%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[18%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[38%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[48%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute right-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[28%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[5%]"><FaCircle className="size-2 text-white" /></div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex h-screen w-full items-start justify-center">
              <div className="absolute -inset-1 bg-black"></div>
              <div className="absolute -inset-1 z-20">
                <img className="size-full" src="/iphon14-2.png" />
              </div>
              <div id="slickText" className="relative mt-16 h-52 w-[30rem] font-sans text-zinc-200 xl:mt-16 2xl:mt-32">
                <h4 className="absolute inset-x-0 top-0 text-center text-3xl">From $499.99</h4>
                <h1 className="absolute inset-x-0 top-1/4 text-center text-5xl uppercase">standard apple smartphone</h1>
                <h3 className="absolute inset-x-0 bottom-0 text-center text-5xl font-light">iPhone 14</h3>
              </div>
              <div id="coposCarousel2" className="size-3 self-end">
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[5%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[8%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[18%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute left-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute left-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute left-[38%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute left-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute left-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute left-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-1/2"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[48%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[45%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[40%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-1/4"><FaCircle className="size-2 text-white" /></div>
                <div className="time5 absolute right-[35%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[30%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time4 absolute right-[20%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time6 absolute right-[28%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time3 absolute right-[15%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time2 absolute right-[10%]"><FaCircle className="size-2 text-white" /></div>
                <div className="time1 absolute right-[5%]"><FaCircle className="size-2 text-white" /></div>
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
    <div id="carouselOption2" className="slider-container relative">
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

export default Option2
