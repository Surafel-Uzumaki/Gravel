import React from "react";

const CaseStudy = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-8 w-full">
        <h1 className="text-3xl font-bold text-black mb-8">Case Study</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4">
            <a href="#!">
              <video
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg"
              >
                <source src="./videos/peter.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6 text-brown-800">
              <h5 className="text-xl font-medium mb-2">Video Card</h5>
              <p className="text-base mb-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          {/* Repeat the above structure for other cards */}

          {/* Example of another card */}
          <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4">
            <a href="#!">
              <video
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg"
              >
                <source src="./videos/peter.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6 text-brown-800">
              <h5 className="text-xl font-medium mb-2">Video Card</h5>
              <p className="text-base mb-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          {/* Example of another card */}
          <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4">
            <a href="#!">
              <video
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg"
              >
                <source src="./videos/peter.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6 text-brown-800">
              <h5 className="text-xl font-medium mb-2">Video Card</h5>
              <p className="text-base mb-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
