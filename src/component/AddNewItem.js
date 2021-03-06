import React, { Component } from "react";
import MenuConsumer from "../context";
import axios from "axios";

class AddNewItem extends Component {
  state = {
    error: false,
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validateForm = () => {
    const { title, category, desc, price } = this.state;

    if (
      title === undefined ||
      category === undefined ||
      desc === undefined ||
      price === undefined
    ) {
      return false;
    }
    return true;
  };

  AddItem = async (dispatch, e) => {
    e.preventDefault(); // Yeniden refresh edilmesini sayfanın engeller
    const { title, category, desc, img, price } = this.state;
    const newMenuItem = {
      title,
      category,
      desc,
      img,
      price,
    };
    if (!this.validateForm()) {
      this.setState({
        error: true,
      });
      return;
    }
    const response = await axios.post(
      "http://localhost:3000/Menu",
      newMenuItem
    );
    dispatch({ type: "Add_User", payload: response.data });
    // redirect
    this.props.history.push("/");
  };
  render() {
    const { title, category, desc, img, price, error } = this.state;
    return (
      <MenuConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="row">
              <div className="col-md-1 mb-4"></div>
              <div className="col-md-10 mb-4">
                <div className="card">
                  <div className="card-header" >
                    <h3 style={{fontFamily:"revert"}}>
                      Add Menu Item Form <i className="fa fa-plus"></i>
                    </h3>
                  </div>
                  <div className="card-body">
                    {error ? (
                      <div className="alert alert-danger">
                        Lutfen bilgilerinizi boş bırakmayın !
                      </div>
                    ) : null}
                    <form onSubmit={this.AddItem.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="title" className="mb-2">
                          Menu Item Name <i className=" fa fa-registered"></i>
                        </label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter Menu Name"
                          id="id"
                          className="form-control"
                          value={title}
                          onChange={this.change}
                        />
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="Category" className="mb-2">
                          Category <i className="fa fa-list-alt" aria-hidden="true" ></i>
                        </label>
                        <input
                          type="text"
                          name="category"
                          placeholder="Enter Category"
                          id="category"
                          className="form-control"
                          value={category}
                          onChange={this.change}
                        />
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="Price" className="mb-2">
                          $ Price <i className=" fa fa-money"></i>
                        </label>
                        <input
                          type="text"
                          name="price"
                          placeholder="Enter Price"
                          id="price"
                          className="form-control"
                          value={price}
                          onChange={this.change}
                        />
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="Description" className="mb-2">
                          Description <i className="fa fa-info" aria-hidden="true"></i>
                        </label>
                        <textarea
                          type="text"
                          name="desc"
                          placeholder="Enter Description"
                          id="desc"
                          className="form-control"
                          value={desc}
                          onChange={this.change}
                        />
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="img" className="mb-2">
                        Image url <i class="fa fa-file-image-o" aria-hidden="true"></i>
                        </label>
                        <input
                          type="text"
                          name="img"
                          placeholder="Enter image url"
                          id="img"
                          className="form-control"
                          value={img}
                          onChange={this.change}
                        />
                      </div>
                      <br/>
                      <button
                        type="submit"
                        className="btn btn-block float-right "
                        style={{ color: "white", backgroundColor: "#292b2c" }}
                      >
                        <i className=" fa fa-plus"></i> Add New Menu Item
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MenuConsumer>
    );
  }
}
export default AddNewItem;
