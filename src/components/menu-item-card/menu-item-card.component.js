import React from 'react';
import "./menu-item-card.styles.scss";

const MenuItemCard = ({ menuItem, addItem }) => (
  <div className="menu-item-card" onClick={() => { addItem(menuItem) }}>
    {menuItem.isVeg ?
      <div className="item-veg">&nbsp;</div>
      :
      <div className="item-non-veg">&nbsp;</div>
    }
    <div className="item-name">{menuItem.name}</div>
    <div className="item-price">Rs. {menuItem.price}</div>
  </div>
)

export default MenuItemCard;