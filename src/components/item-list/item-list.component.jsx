import React from 'react';
import OrderTypeBar from '../order-type-bar/order-type-bar.component';
import './item-list.styles.scss'

class ItemList extends React.Component {
  render() {
    return (
      <div className="item-list-container">
        <OrderTypeBar />
        <div className="menu-items-container">
          <div key="1" className="menu-item-card">
            <div className="item-veg">&nbsp;</div>
            <div className="item-name">Paneer Tikka Masala</div>
            <div className="item-price">Rs. 250</div>
          </div>
          <div key="2" className="menu-item-card">
            <div className="item-veg">&nbsp;</div>
            <div className="item-name">Tandoori Paneer Malai Tikka</div>
            <div className="item-price">Rs. 250</div>
          </div>
          <div className="menu-item-card">
            <div className="item-non-veg">&nbsp;</div>
            <div className="item-name">Murg Tikka Masala</div>
            <div className="item-price">Rs. 300</div>
          </div>
          <div key="1" className="menu-item-card">
            <div className="item-veg">&nbsp;</div>
            <div className="item-name">Paneer Tikka Masala</div>
            <div className="item-price">Rs. 250</div>
          </div>
          <div key="2" className="menu-item-card">
            <div className="item-veg">&nbsp;</div>
            <div className="item-name">Tandoori Paneer Malai Tikka</div>
            <div className="item-price">Rs. 250</div>
          </div>
          <div className="menu-item-card">
            <div className="item-non-veg">&nbsp;</div>
            <div className="item-name">Murg Tikka Masala</div>
            <div className="item-price">Rs. 300</div>
          </div> <div key="1" className="menu-item-card">
            <div className="item-veg">&nbsp;</div>
            <div className="item-name">Paneer Tikka Masala</div>
            <div className="item-price">Rs. 250</div>
          </div>
          <div key="2" className="menu-item-card">
            <div className="item-veg">&nbsp;</div>
            <div className="item-name">Tandoori Paneer Malai Tikka</div>
            <div className="item-price">Rs. 250</div>
          </div>
          <div className="menu-item-card">
            <div className="item-non-veg">&nbsp;</div>
            <div className="item-name">Murg Tikka Masala</div>
            <div className="item-price">Rs. 300</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemList;