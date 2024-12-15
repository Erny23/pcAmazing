import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    slidesToShow: 5,
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
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: "1.5rem",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0rem",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="size-72 xl:size-56 2xl:size-64 3xl:size-80"
              src={ui.img.amdProcessor}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="size-72 xl:size-56 2xl:size-64 3xl:size-80"
              src={ui.img.intelProcessor}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="size-72 xl:size-56 2xl:size-64 3xl:size-80"
              src={ui.img.graphicCard}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="size-72 xl:size-56 2xl:size-64 3xl:size-80"
              src={ui.img.monitor}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="size-72 xl:size-56 2xl:size-64 3xl:size-80"
              src={ui.img.powerSupply}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="size-72 xl:size-56 2xl:size-64 3xl:size-80"
              src={ui.img.ssd}
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
