import React, { Component } from 'react'
import MenuConsiver from "../context";


// const allcategories = ['all',...new Set(Menu.map((item)=>item.category))];
// console.log(allcategories);

export default class Category extends Component {
    render() {
        const { Category} = this.props; //Menu den aldığımız propsları descruting yöntemi ile aldık ve aşağıda bastırdı.
        return (
          <MenuConsiver>
            {(value) => {
             // const { dispatch } = value;
              return (
                 <div>
                     {Category}
                 </div>   
                 
              );
            }}
          </MenuConsiver>
        );
      }
}
