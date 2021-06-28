import React from 'react';
import { connect } from 'react-redux';
import { setCurrentOrder } from '../../redux/order/order.actions';
import "./order-type-bar.styles.scss"

const OrderTypeBar = ({ setCurrentOrder }) => {
  return (
    <div className="order-type-bar-container">
      <div className="order-type-section">
        <div className="order-type-item" onClick={() => { setCurrentOrder("Take Away") }}>
          <div className="order-type-image"><img src="/assets/images/icons/takeaway.png" alt="" /></div>
          <div className="order-type-title">Take Away</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Delivery") }}>
          <div className="order-type-image"><img src="/assets/images/icons/delivery.png" alt="" /></div>
          <div className="order-type-title">Delivery</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 1") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-1</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 2") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-2</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 3") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-3</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 4") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-4</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 5") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-5</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 6") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-6</div>
        </div>
        <div className="order-type-item" onClick={() => { setCurrentOrder("Table 7") }}>
          <div className="order-type-image"><img src="/assets/images/icons/table.png" alt="" /></div>
          <div className="order-type-title">Table-7</div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentOrder: currentOrder => dispatch(setCurrentOrder(currentOrder))
})

export default connect(null, mapDispatchToProps)(OrderTypeBar);