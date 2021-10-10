import React from "react";
import { FaFilePdf } from "react-icons/fa";

function Notes() {
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex bg-gray-300 rounded-xl shadow-md mx-5 my-4 h-14">
        <h1 className="my-auto ml-4">
          <FaFilePdf size="30" style={{ color: "#454545" }} />
        </h1>
        <h2 className="text-gray-700 text-xl font-semibold my-auto ml-12">
          Database Management System
        </h2>
        <div className="flex my-auto ml-auto mr-6">
          <h3 className="text-gray-600 mr-4">
            7<sup>th</sup> SEM
          </h3>
          <h3 className="text-gray-600 mr-4">10/10/2021</h3>
          <h1 className="text-gray-600">Filesize</h1>
          <h2 className="text-gray-600 ml-2">2.3 MB</h2>
        </div>
      </div>
    </div>
  );
}

export default Notes;
