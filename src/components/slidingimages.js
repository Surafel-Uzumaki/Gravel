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
    <div className="sliding-images-container lg:ml-24 sm:m-2">
      <section className="section-heading ml-4 mr-4">
        <h2 className="text-2xl font-bold mb-4 mt-4">Heading Text 1</h2>
        <Slider  {...settings}>
          <div className=' ml-2 mr-2'>
            <img src="./Images/2.jpg" alt="Image 1" className="sliding-image" />
          </div>
          <div className=' ml-2 mr-2'>
            <img src="./Images/2.jpg" alt="Image 2" className="sliding-image" />
          </div>
          <div className='ml-2 mr-2'>
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
