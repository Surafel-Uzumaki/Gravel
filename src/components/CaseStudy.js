import React from "react";

const CaseStudy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-8">Case Study</h1>
      <div className=" gap-6 flex flex-col md:flex-row">
        <div className="border border-brown-600 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className="ml-4 relative">
              <video controls className="w-full" height="200" style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-50 p-4  mt-5 flex items-center">
         
  <p className="text-brown-800 mt-8 max-w-full">Text askdaskjlfasifjaskfljasjkflasfjnascasjncasklfnaslfkujas goes here.</p>


            
            </div>
          </div>
        </div>
        
        <div className="border border-brown-600 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className="relative items-center justify-center flex flex-col">
              <video controls className="w-[98%] ml-1 sm:h-auto sm:w-[80%] " height="200"  style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-50 p-4 flex items-center">
          <div className=" flex">
  <p className="text-brown-800 mt-4 text-center justify-center">Text askdaskjlfasifjaskfljasjkflasfjnascasjncasklfnaslfkujas goes here.</p>
</div>

            
            </div>
          </div>
        </div>
        {/* --------------------- */}
        <div className="border border-brown-600 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Category 1</h2>
          <div className="relative items-center justify-center">
              <video controls className="w-[98%] ml-1 "  style={{ borderRadius: '8px' }}>
                <source src="./videos/peter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full border-brown-600 border-4 rounded-md" style={{ zIndex: '-1' }}></div>
          <div className="rounded-md bg-brown-50 p-4 flex items-center">
          <div className=" flex">
  <p className="text-brown-800 mt-4 text-center justify-center">Text askdaskjlfasifjaskfljasjkflasfjnascasjncasklfnaslfkujas goes here.
  sdfakjslfasfkasjlfka;sjfkasjfaskfjaskjfasklncasjlcn asfkjlnasfkjlasnf asfasnfaskjlnf</p>
</div>

            
            </div>
          </div>
        </div>

        {/* Add similar code for other categories */}
      </div>
    </div>
  );
};

export default CaseStudy;
