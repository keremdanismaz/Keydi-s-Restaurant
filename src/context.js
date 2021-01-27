// Context API ,Conviser , Provider kullanımını

import React, { Component } from "react";
import axios from "axios";
const MenuContext = React.createContext(); //context api için yeni bir context oluşturduk.

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_User":
      return {
        ...state,
        Menu: [...state.Menu, action.payload],
      };
    case "Delete_User":
      return {
        ...state,
        Menu: state.Menu.filter((user) => action.payload !== user.id),
      };
    case "Uptade_User":
      return {
        ...state,
        Menu: state.Menu.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export class MenuProvider extends Component {
  state = {
    //  Menu Providerın bize sağlamış olduğu state olcak ~Heryerde kullanacağız.
    Menu: [], // Verilerimizi tutacağımız Obje dizimiz Json placeholder ile içini dolduracağız.
    dispatch: (action) => {
      // dispatch arrow function  Put delete add put işlemleri için kullanacağız
      this.setState((state) => reducer(state, action)); //  reducer fonksyonu yazılacak.
    },
  };

  componentDidMount = async () => {
    // Componentlar oturduktan sonra  verilerimizi get ile alıp statein içine atadık ve onun heryere
    const response = await axios.get("http://localhost:3000/Menu"); // ulaşmasını sağlamak için index.js de appi sarmalladık
    this.setState({
      Menu: response.data,
    });
  };

  render() {
    return (
      <MenuContext.Provider value={this.state}>
        {/* // Menu sağlayıcı bize  içerisinde ki stateleri her yere props olarak geçirdi.  */}
        {this.props.children} {/* Çocuk propslarını da döndürdü */}
      </MenuContext.Provider>
    );
  }
}
const MenuConsiver = MenuContext.Consumer; // MenuConviser da bize vunu en son sağladı . Kullanırken bunu çağıracağız.
export default MenuConsiver;
