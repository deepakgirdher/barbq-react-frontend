import React from 'react';
import './item-list.styles.scss'

class ItemList extends React.Component {
  render() {
    return (
      <div className="item-list-container">
        <div className="order-type-section">
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/takeaway.png" alt="" /></div>
            <div className="order-type-title">Take Away</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/delivery.png" alt="" /></div>
            <div className="order-type-title">Delivery</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-1</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-2</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-3</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-4</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-5</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-6</div>
          </div>
          <div className="order-type-item">
            <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
            <div className="order-type-title">Table-7</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemList;