import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Option1 = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true
  };

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5500,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
  };

  return (
    <div id="bannerOption1" className="relative size-full font-sans text-zinc-100">
      <div className="absolute inset-0 z-0 bg-black"></div>
      <div className="absolute inset-0 z-20 bg-zinc-700/40"></div>
      <div id="title1Banner" className="absolute inset-0 z-30 flex items-center justify-center uppercase">
        <div className="slider-container w-1/2">
          <Slider {...settings}>
            <div>
              <div className="flex justify-center text-5xl 2xl:text-7xl">
                <h1>smart phone</h1>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-5xl 2xl:text-7xl">
                <h1><span className="lowercase">i<span className="uppercase">p</span>hone</span> 15 pro</h1>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-5xl 2xl:text-7xl">
                <h1>compact designe</h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div id="title2Banner" className="absolute inset-0 z-30 flex items-center justify-center uppercase">
        <div className="slider-container w-1/2">
          <Slider {...settings2}>
            <div>
              <div className="flex h-96 w-full flex-col items-center justify-center text-4xl">
                <div className="relative h-10 w-full">
                  <h4 className="absolute inset-x-0 top-0 text-center">from $799.99</h4>
                </div>
                <br />
                <br />
                <div className="relative h-10 w-full">
                  <h3 className="absolute inset-x-0 top-0 text-center">subtitle</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="flex h-96 flex-col items-center justify-center text-4xl">
                <div className="relative h-10 w-full">
                  <h4 className="absolute inset-x-0 top-0 text-center">from $799.99</h4>
                </div>
                <br />
                <br />
                <div className="relative h-10 w-full">
                  <h3 className="absolute inset-x-0 top-0 text-center">subtitle</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="flex h-96 w-full flex-col items-center justify-center text-4xl">
                <div className="relative h-10 w-full">
                  <h4 className="absolute inset-x-0 top-0 text-center">from $799.99</h4>
                </div>
                <br />
                <br />
                <div className="relative h-10 w-full">
                  <h3 className="absolute inset-x-0 top-0 text-center">subtitle</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="container relative mx-auto">
        <video id='videoBannerDesktop' className="relative z-10" autoPlay loop muted width="100%" height="100%">
          <source src="/trailer-iphone-14-pro.webm" type="video/webm" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  )
}

export default Option1
