import React from 'react';
import "./style.css";
import Menu from "./MenuAPI.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";

const uniqueList = [
  ...new Set
    (Menu.map((curElem) => {
  return curElem.category;
})),
"All",
];

const Hotel = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);
  
  const filterItem = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    
    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
    })
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList} />
      <MenuCard menuData = {menuData} />
    </>
  );
};

export default Hotel;