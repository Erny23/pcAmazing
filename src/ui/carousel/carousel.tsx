import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import * as ui from "../../ui/index";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", opacity: 0 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", opacity: 0 }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1rem",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 9000,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/" className="w-96">
              <img src={ui.img.evga} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/" className="w-96">
              <img src={ui.img.nvidia} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/">
              <img className="h-full" src={ui.img.amd} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/" className="w-96">
              <img src={ui.img.corsair} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/" className="w-96">
              <img src={ui.img.asus} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/" className="h-full">
              <img className="h-full" src={ui.img.gigabyte} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-56 items-center justify-center px-4 3xl:px-6">
            <Link to="/" className="w-96">
              <img src={ui.img.intel} alt="" />
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
