import React from "react";
import { Link, Outlet } from "react-router-dom"


const App = () => {
    return (
        <div>
          <nav>
              <Link to="/">Home</Link> | {" "}
              <Link to="/procedures">Procedures</Link> | {" "}
              <Link to="/contact">Contact</Link>
          </nav>
            <Outlet />
        </div>
    );
}

export default App;
