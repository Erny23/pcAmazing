import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircle } from "react-icons/fa";

const Option2 = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 9000,
    adaptiveHeight: true,
    appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => (
      <div
        style={{
          padding: "10px",
          width: "auto",
          height: "auto",
          zIndex: 20
        }}
      >
        <ul id="bannerDots2" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        key={i+1}
        className="relative block h-5"
      ><FaCircle /></div>
    )
  };

  return (
    <div id="bannerOption2" className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="slider-container w-5/6 2xl:w-4/6">
          <Slider {...settings}>
            <div>
              <div className="relative flex justify-center font-sans">
                <img className="size-full" src="/fondoBanner-1.jpg" />
                <h3 className="absolute -right-72 bottom-64 left-1/2 top-32 flex items-center justify-start text-5xl font-bold text-teal-400 2xl:left-1/4">
                  iPhone 15 Pro
                </h3>
                <h4 className="absolute -right-56 bottom-48 left-1/2 top-48 flex items-center justify-start text-5xl font-bold text-teal-400 2xl:left-1/4">
                  $799.99
                </h4>
              </div>
            </div>
            <div>
              <div className="relative flex justify-center font-sans">
                <img className="size-full" src="/fondoBanner-1.jpg" />
                <h3 className="absolute -right-72 bottom-64 left-1/2 top-32 flex items-center justify-start text-5xl font-bold text-teal-400 2xl:left-1/4">
                  iPhone 15 Pro
                </h3>
                <h4 className="absolute -right-56 bottom-48 left-1/2 top-48 flex items-center justify-start text-5xl font-bold text-teal-400 2xl:left-1/4">
                  $799.99
                </h4>
              </div>
            </div>
            <div>
              <div className="relative flex justify-center font-sans">
                <img className="size-full" src="/fondoBanner-1.jpg" />
                <h3 className="absolute -right-72 bottom-64 left-1/2 top-32 flex items-center justify-start text-5xl font-bold text-teal-400 2xl:left-1/4">
                  iPhone 15 Pro
                </h3>
                <h4 className="absolute -right-56 bottom-48 left-1/2 top-48 flex items-center justify-start text-5xl font-bold text-teal-400 2xl:left-1/4">
                  $799.99
                </h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Option2
