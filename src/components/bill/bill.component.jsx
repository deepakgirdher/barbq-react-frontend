import React from 'react';
import { connect } from 'react-redux';
import './bill.styles.scss'

const Bill = ({ orders }) => {
  const renderBillDetails = () => {
    let currentOrderDetails = orders.orderDetails.filter((orderItems) => orderItems.orderType === orders.currentOrder);
    return (
      <>
        {
          currentOrderDetails.length < 1 ?
            <div className="bill-no-item">No Items added yet.</div>
            :
            <div>
              <div className="bill-item-details">
                {currentOrderDetails[0].orderItems.map(item => (
                  <div className="bill-items">
                    <div>{item.itemName}</div>
                    <div className="bill-item-quantity"><span>-</span>{item.quantity}<span>+</span></div>
                    <div>{item.totalPrice}</div>
                    <div className="bill-delete-item"><img src="/assets/images/icons/delete.png" alt="" /></div>
                  </div>
                ))
                }
              </div>
              <div className="bill-bottom">
                <div className="bill-gst">GST(18%) <span>Rs. 100</span></div>
                <div className="bill-total">Total <span>Rs. {currentOrderDetails[0].totalPrice}</span></div>
                <div className="bill-button">
                  <button className="bill-clear-button">CANCEL</button>
                  <button className="bill-bill-button">BILL</button>
                </div>
              </div>
            </div>
        }
      </>
    )
  }

  return (
    <div className="bill-container">
      <div className="bill-title">{orders.currentOrder}</div>
      <div className="bill-details">
        <div className="bill-header">
          <div>Item</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>&nbsp;</div>
        </div>
        {renderBillDetails()}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.order
})

export default connect(mapStateToProps)(Bill);