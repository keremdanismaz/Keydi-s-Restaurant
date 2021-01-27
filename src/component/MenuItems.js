import React, { Component } from "react";
import MenuConsiver from "../context";
import axios from "axios";
import {Link} from "react-router-dom";
export default class MenuItems extends Component {
  ondeleteuser = async (dispatch, e) => {
    const { id } = this.props;
    // delete request
    await axios.delete(`http://localhost:3000/Menu/${id}`);
    //consumer dispatch
    dispatch({ type: "Delete_User", payload: id });
  };
  render() {
    const { id, title, desc, img, price } = this.props; //Menu den aldığımız propsları descruting yöntemi ile aldık ve aşağıda bastırdı.
    return (
      <MenuConsiver>
        {(value) => {
          const { dispatch } = value;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                 <h4 style={{cursor:"pointer",color:"#c59d5f"}}> <i
                    onClick={this.ondeleteuser.bind(this, dispatch)}
                    className="fa fa-trash"
                  
                  ></i></h4>
                <h4><Link style={{color:"#c59d5f" , fontWeight:"bold"}} to ={`Edit/${id}`}><i className="fa fa-pencil"></i></Link> </h4>
                  <h4 className="price">
                    <i class="fa fa-try" aria-hidden="true"></i> {price}
                  </h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        }}
      </MenuConsiver>
    );
  }
}
