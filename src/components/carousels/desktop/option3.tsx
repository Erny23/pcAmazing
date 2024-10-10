import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute" }}
      onClick={onClick}
    ><MdKeyboardArrowRight className="size-10 text-zinc-700 hover:text-teal-400" /></div>
  );
};

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute" }}
      onClick={onClick}
    ><MdKeyboardArrowLeft className="size-10 text-zinc-700 hover:text-teal-400" /></div>
  );
};

const Option3 = () => {

  const settings1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => (
      <div
        style={{
          padding: "10px",
          width: "auto",
          height: "auto",
          zIndex: 20
        }}
      >
        <ul id="carouselDots3" style={{ margin: "0px" }}> {dots} </ul>
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

  return (
    <div id="carouselOption3" className="slider-container relative">
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
      <Slider {...settings1}>
        <div>
          <div className="container mx-auto flex h-[30rem] flex-row items-center justify-center p-4 2xl:h-[40rem]">
            <div className="h-96 2xl:h-[34rem]">
              <img className="size-full" src="/iphon16-3.jpg" />
            </div>
            <div className="relative flex h-4/6 w-1/2 flex-col items-center justify-center font-sans text-zinc-700">
              <div className="absolute inset-y-0 -left-12 -right-2 z-10 bg-zinc-200 xl:-right-10 2xl:-right-20"></div>
              <div className="relative z-20">
                <h1 className="text-3xl uppercase text-zinc-800">
                  <TypeAnimation sequence={[
                      'new smart phone',
                      5000,
                      'iphone 16 pro max',
                      5000,
                    ]}
                    wrapper="span"
                    speed={2}
                    repeat={Infinity}
                  />
                </h1>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laudantium consectetur modi aliquid.</p>
                <button className="btn-animado1">
                  <span className="text">Buy now</span>
                  <span className="marquee">Buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto flex h-[30rem] flex-row items-center justify-center p-4 2xl:h-[40rem]">
            <div className="h-96 2xl:h-[34rem]">
              <img className="size-full" src="/iphon15-3.jpg" />
            </div>
            <div className="relative flex h-4/6 w-1/2 flex-col items-center justify-center font-sans text-zinc-700">
              <div className="absolute inset-y-0 -left-12 -right-2 z-10 bg-zinc-200 xl:-right-10 2xl:-right-20"></div>
              <div className="relative z-20">
                <h1 className="text-3xl uppercase text-zinc-800">
                  <TypeAnimation sequence={[
                      'apple pro smartphone',
                      5000,
                      'iphone 15 pro',
                      5000,
                    ]}
                    wrapper="span"
                    speed={2}
                    repeat={Infinity}
                  />
                </h1>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laudantium consectetur modi aliquid.</p>
                <button className="btn-animado1">
                  <span className="text">Buy now</span>
                  <span className="marquee">Buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto flex h-[30rem] flex-row items-center justify-center p-4 2xl:h-[40rem]">
            <div className="h-96 2xl:h-[34rem]">
              <img className="size-full" src="/iphon14-3.jpg" />
            </div>
            <div className="relative flex h-4/6 w-1/2 flex-col items-center justify-center font-sans text-zinc-700">
              <div className="absolute inset-y-0 -left-12 -right-2 z-10 bg-zinc-200 xl:-right-10 2xl:-right-20"></div>
              <div className="relative z-20">
                <h1 className="text-3xl uppercase text-zinc-800">
                  <TypeAnimation sequence={[
                      'standard apple smartphone',
                      5000,
                      'iphone 14 standard',
                      5000,
                    ]}
                    wrapper="span"
                    speed={2}
                    repeat={Infinity}
                  />
                </h1>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laudantium consectetur modi aliquid.</p>
                <button className="btn-animado1">
                  <span className="text">Buy now</span>
                  <span className="marquee">Buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Option3
