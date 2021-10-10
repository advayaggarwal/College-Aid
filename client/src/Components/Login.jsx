import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  function submitted(e) {
    e.preventDefault();
    console.log(user);
    axios.post("http://localhost:5000/login", user).then((response) => {
      console.log(response.data);
    });
    setUser({
      email: "",
      password: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  return (
    <div className="bg-white py-8 px-0 mt-36 flex justify-center">
      <form onSubmit={submitted}>
        <div className="my-4">
          <label className="font-semibold text-lg">Email</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 flex mt-2"
            name="email"
            value={user.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label className="font-semibold text-lg">Password</label>
          <input
            className="shadow border rounded w-96 py-2 px-3 flex mt-2"
            name="password"
            value={user.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-400 px-6 py-3 mt-4 border-2 rounded-md"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
