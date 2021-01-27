import React, { Component } from "react";
import {Link} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="btn-container">
            <Link to="/" className="filter-btn"><i class="fa fa-eye" aria-hidden="true"></i> Show Menu</Link>
            <Link to="/AddItem" className="filter-btn"><i class="fa fa-plus" aria-hidden="true"></i> Add New Menu Item</Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
