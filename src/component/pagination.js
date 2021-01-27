import React, { Component } from "react";
import Pagination from "react-js-pagination";

export default class pagination extends Component {
    state = {
        activePage: 15
      };
  render() {
   
    const handlePageChange = (pageNumber) => {
      this.setState({ activePage: pageNumber });
    };
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}
