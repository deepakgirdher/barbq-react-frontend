import React from 'react';
import { connect } from 'react-redux';
import './bill.styles.scss'

const Bill = ({ orders }) => {
  const renderBillDetails = () => {
    let currentOrderDetails = orders.orderDetails.filter((orderItems) => orderItems.orderType === orders.currentOrder);
    return (
      <div>
        {
          currentOrderDetails.length < 1 ?
            <div>No Items added yet.</div>
            :
            <div>
              {currentOrderDetails[0].orderItems.map(item => (
                <>
                  <div>{item.itemName}</div>
                  <div>{item.quantity}</div>
                  <div>{item.totalPrice}</div>
                </>
              ))
              }
            </div>
        }
      </div>
    )
  }

  return (
    <div className="bill-container">
      <div className="bill-title">{orders.currentOrder}</div>
      {renderBillDetails()}
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.order
})

export default connect(mapStateToProps)(Bill);