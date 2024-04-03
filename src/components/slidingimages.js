import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const SlidingImagesComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Enable sliding when touched
  };

  return (
    <div className="sliding-images-container lg:ml-24 sm:m-4">
      <section className="section-heading">
        <h2 className="text-2xl font-bold mb-4">Heading Text 1</h2>
        <Slider  {...settings}>
          <div>
            <img src="./Images/2.jpg" alt="Image 1" className="sliding-image" />
          </div>
          <div>
            <img src="./Images/2.jpg" alt="Image 2" className="sliding-image" />
          </div>
          <div>
            <img src="./Images/2.jpg" alt="Image 3" className="sliding-image" />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </section>
      {/* Add more sections with sliders */}
    </div>
  );
};

export default SlidingImagesComponent;