import React from "react";

const CaseStudy = () => {
  return (
   
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-8">Case Study</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center md:flex-grow ">
        <div className="border border-brown-600 rounded-md w-1/4 md:w-full sm:w-full" >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className=" mx-4 relative ">
              <video controls className="w-full" height="200" style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-700  mt-5 overflow-hidden ">
          <p className="text-white">Text askdaskjlfasifjaskfljhuyhiuykhgyfgygsklfnaslfkujas goes here.</p>
            </div>
          </div>
        </div>


        {/* Another Catagory */}
        <div className="border border-brown-600 rounded-md w-1/4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className=" mx-4 relative ">
              <video controls className="w-full" height="200" style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-700 p-4  mt-5 overflow-hidden ">
          <p className="text-white flex   ">Text askdaskjlfasifjaskfljasjkflasfjnascasjncasklfnaslfkujas goes here.</p>
            </div>
          </div>
        </div>

        {/* Catagory 3 */}


        <div className="border border-brown-600 rounded-md w-1/4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className=" mx-4 relative ">
              <video controls className="w-full" height="200" style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-700 p-4  mt-5 overflow-hidden ">
          <p className="text-white flex   ">Text askdaskjlfasifjaskfljasjkflasfjnascasjncasklfnaslfkujas goes here.</p>
            </div>
          </div>
        </div>

        {/* Catagory 4 */}

        <div className="border border-brown-600 rounded-md w-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className=" mx-4 relative ">
              <video controls className="w-full" height="200" style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-700 p-4  mt-5 overflow-hidden ">
          <p className="text-white flex   ">Text askdaskjlfasifjaskfljasjkflasfjnascasjncasklfnaslfkujas goes here.</p>
            </div>
          </div>
        </div>



        
        {/* Add similar code for other categories */}
      </div>
    </div>
  );
};

export default CaseStudy;
