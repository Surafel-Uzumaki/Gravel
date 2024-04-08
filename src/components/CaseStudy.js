import React, { useState } from "react";

const CaseStudy = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <>
      <div className="container lg:mx-auto lg:px-6 lg:py-8 w-full">
        <h1 className="text-3xl font-bold text-black mb-8 mt-10">Case Study</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 justify-center justify-items-center">
          <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4 ">
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
              <h5 className="text-xl font-medium mb-2">Video Card 1</h5>
              <p className="text-base mb-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4 flex-grow">
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
              <h5 className="text-xl font-medium mb-2">Video Card 2</h5>
              <p className="text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4 flex-grow">
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
              <h5 className="text-xl font-medium mb-2">Video Card 3</h5>
              <p className="text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          {showMore && (
            <>
              <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4 flex-grow">
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
                  <h5 className="text-xl font-medium mb-2">Video Card 4</h5>
                  <p className="text-base mb-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div className="rounded-lg shadow-lg bg-brown-50 max-w-sm w-full md:w-auto m-10 md:m-4 flex-grow">
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
                  <h5 className="text-xl font-medium mb-2">Video Card 5</h5>
                  <p className="text-base mb-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {!showMore && (
          <div className="flex justify-center">
            <button
              className="bg-brown-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 font-serif"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}

        {showMore && (
          <div className="flex justify-center">
            <button
              className="bg-brown-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 font-serif"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CaseStudy;
