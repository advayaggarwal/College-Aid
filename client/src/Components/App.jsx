import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Trade from "./Trade";
import Notes from "./Notes";
import UploadNotes from "./UploadNotes";

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-white h-14 flex items-center">
          <Link to="/" className="text-3xl px-16">
            College
          </Link>
          <ul className="flex space-x-6 pr-6 text-lg justify-end w-full">
            <li className="">
              <Link to="/notes">Notes</Link>
            </li>
            <li className="">
              <Link to="/trade">Trade</Link>
            </li>
            <li className="">
              <Link to="/login">Login</Link>
            </li>
            <li className="">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/trade">
            <Trade />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/upload-notes">
            <UploadNotes />
          </Route>
          {/* <Route path="/">
            <App />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
