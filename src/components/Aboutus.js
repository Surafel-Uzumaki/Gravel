import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us bg-brown-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-800 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-start-1">
            <div className="rounded-md bg-white bg-opacity-50 p-6">
              <h3 className="text-xl font-semibold text-brown-800 mb-4">Our Mission</h3>
              <p className="text-brown-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis lacus et varius convallis. Cras auctor dui et pharetra mattis.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-md bg-white bg-opacity-50 p-6">
              <h3 className="text-xl font-semibold text-brown-800 mb-4">Our Vision</h3>
              <p className="text-brown-700">
                Nullam quis tortor vel sem blandit luctus id ut sapien. Morbi euismod ipsum vitae ipsum rutrum, sed vestibulum urna volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
