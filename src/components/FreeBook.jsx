import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import lsit from "../../public/list.json";
import Cards from "./Cards";

function FreeBook() {
  const filterData = lsit.filter((data) => data.categories === "free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-10">
        <div>
          <h1 className="font-semibold text-xl pb-2">free offerd course</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            exercitationem laudantium in ipsam necessitatibus voluptates ex est
            hic dolorem delectus itaque placeat reprehenderit aliquid et.
          </p>
        </div>

        <div className="slider-div">
          <div className="slider-container">
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;
