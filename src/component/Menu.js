// Contex API'nin içerisin de ki sağlayıcıdan state alındı(db.json) onun içerisinde map ile dönüldü ve her döndürüldüğünde veriler props olarak 
//MenuItema a gönderildi.
import React, { Component } from "react";
import MenuItems from "./MenuItems";
import MenuConsiver from "../context";
import  Categories from  "./Category";
class Menu extends Component {
  render() {
    return (
      <MenuConsiver>
        {(value) => {
          const { Menu } = value;

          return (
            <div className="section-center">
              {Menu.map((menuıtems) => {
                  
                return (
                   <div>
                  <MenuItems
                    id={menuıtems.id}
                    title={menuıtems.title} // UserConviser dan aldığımız verileri Menu değişkenine atadık ve onun içinde döndük.
                       // daha sonra içinde dönerkende her datayı Menuıtems a prop olarak yolladık.
                    price={menuıtems.price}
                    img={menuıtems.img}
                    desc={menuıtems.desc}
                  />
                  <Categories
                    category={menuıtems.category}
                  />
                </div>
                  );
                  
             })}
            </div>
          );
        }}
      </MenuConsiver>
    );
  }
}
export default Menu;
