import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import axios from "axios";

function Notes() {
  const [blogs, setBlogs] = useState([]);

  axios
    .get("http://localhost:5000/notes")
    .then((response) => console.log(response.data));

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <a href={blog.link}>
            <div className="w-5/6 mx-auto">
              <div className="flex bg-gray-300 rounded-xl shadow-md mx-5 my-4 h-14">
                <h1 className="my-auto ml-4">
                  <FaFilePdf size="30" style={{ color: "#454545" }} />
                </h1>
                <h2 className="text-gray-700 text-xl font-semibold my-auto ml-12">
                  Database Management System
                </h2>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Notes;
