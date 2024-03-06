import React from "react";

const Testimonials = () => {
  // Define an array of testimonial objects


  const testimonials = [
    
    {
      imageSrc: "/images/6.jpg",
      name: "John Doe",
      date: "February 15, 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
    },
    {
      imageSrc: "/images/5.jpg",
      name: "Jane Smith",
      date: "March 10, 2024",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
    },
    // Add more testimonial objects as needed
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 mt-6">Testimonials</h2>
    <div className="container mx-auto flex gap-4">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-brown-50 rounded-lg shadow-md p-6 mb-8">
          
          <div className="flex items-center mb-4">
            <img
              className="h-12 w-12 rounded-full object-cover mr-4"
              src={testimonial.imageSrc}
              alt={testimonial.name}
            />
            <div>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.date}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{testimonial.text}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 flex">
              {[...Array(testimonial.rating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0l2.95 6.52L20 7.35l-5.55 5.12 1.32 7.28L10 16.28 3.23 19.75l1.32-7.28L0 7.35l6.05-.83L10 0z"
                  />
                </svg>
              ))}
            </span>
            <span className="text-gray-500 ml-2">({testimonial.rating})</span>
          </div>
        </div>
      ))}
    </div>
    </div>);
};

export default Testimonials;
