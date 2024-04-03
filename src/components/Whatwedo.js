// import React from "react";

// const Workdone = () => {
//   return (
    
//     <div className="container mx-auto px-4 py-8 ">
//       <div className=" ">
//     <video controls className=" w-[30%]" height="20" style={{ borderRadius: '8px' }}>
//       <source src="./videos/peter.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     </div>
//       <h1 className="text-3xl font-bold text-black mb-8">Soil Testing Company</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="rounded-md border border-brown-500 p-3">
//           <div className="bg-brown-200 bg-opacity-25 rounded-md p-3">
//             <h2 className="text-lg font-semibold text-brown-800 mb-2">Soil Analysis</h2>
//             <p className="text-sm text-brown-700">
//               We provide comprehensive soil analysis services to determine soil composition, pH levels, nutrient content, and more.
//             </p>
//           </div>
//         </div>
//         <div className="rounded-md border border-brown-500 p-3">
//           <div className="bg-brown-200 bg-opacity-25 rounded-md p-3">
//             <h2 className="text-lg font-semibold text-brown-800 mb-2">Customized Recommendations</h2>
//             <p className="text-sm text-brown-700">
//               Based on the soil analysis results, we offer customized recommendations for soil amendment and fertilization to optimize crop growth.
//             </p>
//           </div>
//         </div>
//         <div className="rounded-md border border-brown-500 p-3">
//           <div className="bg-brown-200 bg-opacity-25 rounded-md p-3">
//             <h2 className="text-lg font-semibold text-brown-800 mb-2">Expert Consultation</h2>
//             <p className="text-sm text-brown-700">
//               Our team of experienced agronomists and soil scientists are available for consultation to address any questions or concerns.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workdone;




import { useState } from "react";

const Workdone = () => {
  const features = [
    {
      name: "Trusted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="yellow-500"
          className="w-5 h-5 text-yellow-500 fill-yellow"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
   
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 text-gray-500 text-sm"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl text-gray-800 font-extrabold mx-auto">
            <span className="text-black line-clamp-1">Lorem ipsum dolor </span>
                    Lorem ipsum 
          </h1>

          <p className="max-w-xl mx-auto xl:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, beatae!</p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              href="#"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-yellow-500 duration-150 hover:bg-yellow-700 active:bg-gray-900 rounded-lg md:inline-flex font-mono"
            >
              Lorem ipsum or social buttons
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img
              src="./images/2.jpg"
              className="rounded-lg"
              alt=""
            />
            <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <iframe
              className="rounded-lg"
              width="350"
              height="215"
              src="./videos/peter.mp4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Workdone;
