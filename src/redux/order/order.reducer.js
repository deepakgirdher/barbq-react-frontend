import { OrderActionTypes } from "./order.types";
import { addItem } from "./order.utils";

const INITIAL_STATE = {
  currentOrder: "Table 1",
  orderDetails: []
}

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload
      }
    case OrderActionTypes.ADD_ITEM_TO_ORDER:
      return {
        ...state,
        orderDetails: addItem(state.orderDetails, action.payload, state.currentOrder)
      }
    default:
      return state;
  }
}


export default orderReducer;