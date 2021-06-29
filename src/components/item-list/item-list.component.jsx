import React from 'react';
import { connect } from 'react-redux';
import { addItemToOrder } from '../../redux/order/order.actions';
import MenuItemCard from '../menu-item-card/menu-item-card.component';

import './item-list.styles.scss'

const ItemList = ({ menuItems, addItemToOrder }) => {

  const addItem = (item) => {
    addItemToOrder(item);
  }

  return (
    <div className="item-list-container">
      <div className="menu-items-container">
        {
          menuItems.map(menuItem => <MenuItemCard key={menuItem.menuId} menuItem={menuItem} addItem={addItem} />)
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToOrder: itemDetails => dispatch(addItemToOrder(itemDetails))
})

export default connect(null, mapDispatchToProps)(ItemList);