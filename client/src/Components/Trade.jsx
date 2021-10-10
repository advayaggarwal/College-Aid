import React from "react";

function Trade() {
  return (
    <div className="flex flex-wrap max-w-6xl mx-auto justify-center">
      <div className="max-w-xs bg-gray-100 m-auto px-8 py-10 rounded-xl shadow-md mx-5 my-4">
        <img
          className="rounded-md shadow-xl object-cover object-center"
          src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/2020-Harley-Davidson-Iron-1200-Review-criuser-motorcycle-8.jpg"
          alt="bike"
        />
        <h2 className="text-gray-700 text-2xl font-semibold mt-8">₹ 2,000</h2>
        <h1 className="mt-2 font-bold text-gray-900 text-lg">
          2020 Harley-Davidson Iron 1200
        </h1>
      </div>
    </div>
  );
}

export default Trade;
