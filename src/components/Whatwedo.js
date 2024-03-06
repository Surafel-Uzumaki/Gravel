import React from "react";

const Workdone = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-8">Soil Testing Company</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-md border border-brown-500 p-3">
          <div className="bg-brown-200 bg-opacity-25 rounded-md p-3">
            <h2 className="text-lg font-semibold text-brown-800 mb-2">Soil Analysis</h2>
            <p className="text-sm text-brown-700">
              We provide comprehensive soil analysis services to determine soil composition, pH levels, nutrient content, and more.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-brown-500 p-3">
          <div className="bg-brown-200 bg-opacity-25 rounded-md p-3">
            <h2 className="text-lg font-semibold text-brown-800 mb-2">Customized Recommendations</h2>
            <p className="text-sm text-brown-700">
              Based on the soil analysis results, we offer customized recommendations for soil amendment and fertilization to optimize crop growth.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-brown-500 p-3">
          <div className="bg-brown-200 bg-opacity-25 rounded-md p-3">
            <h2 className="text-lg font-semibold text-brown-800 mb-2">Expert Consultation</h2>
            <p className="text-sm text-brown-700">
              Our team of experienced agronomists and soil scientists are available for consultation to address any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workdone;
