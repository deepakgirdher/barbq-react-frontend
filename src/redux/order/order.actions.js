import { OrderActionTypes } from "./order.types"

export const setCurrentOrder = currentOrder => ({
  type: OrderActionTypes.SET_CURRENT_ORDER,
  payload: currentOrder
})

export const addItemToOrder = itemDetails => ({
  type: OrderActionTypes.ADD_ITEM_TO_ORDER,
  payload: itemDetails
})