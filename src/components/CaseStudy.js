import React from "react";

const CaseStudy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-8">Case Study</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-brown-600 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className="rounded-md bg-brown-50 p-4 flex items-center">
            <div>
              <img src="image_url" alt="Image" className="w-full h-auto mb-4" />
              <p className="text-brown-800 mt-4">Text description goes here.</p>
            </div>
            <div className="ml-4 relative">
              <video controls className="w-full" height="200" style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
            </div>
          </div>
        </div>
        {/* Add similar code for other categories */}
      </div>
    </div>
  );
};

export default CaseStudy;
