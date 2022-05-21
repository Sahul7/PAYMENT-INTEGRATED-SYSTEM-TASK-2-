import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="row navbar">
        <div className="col-12 col-3 col-md-3 flexer1">
          <div className="navtext logo">TSF Donate</div>  
          <h5 className="navtext"><Link to="/">Home</Link></h5>
          <h5 className="navtext"><Link to="/donate">Donate</Link></h5>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
