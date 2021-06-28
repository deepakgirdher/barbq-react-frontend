export const addItem = (orderDetails, itemDetails, currentOrder) => {
  let isNewOrder = true;
  let isNewItem = true;

  // Check if its a new Order or existing
  orderDetails.map(order => {
    if (order.orderType === currentOrder) {
      isNewOrder = false;

      // If existing order then check if item is new or change in quantity of existing
      order.orderItems.map(item => {
        if (item.menuId === itemDetails.menuId) {
          isNewItem = false;
          item.quantity = item.quantity + 1;
          item.totalPrice = item.price * item.quantity;
        }
      })
      if (isNewItem) {
        order.orderItems.push({
          menuId: itemDetails.menuId,
          itemName: itemDetails.name,
          quantity: 1,
          price: itemDetails.price,
          totalPrice: itemDetails.price
        })
      }
    }
  })

  // Create new order if not existing.
  if (isNewOrder) {
    let tempOrderDetails = {
      orderType: currentOrder,
      orderItems: [
        {
          menuId: itemDetails.menuId,
          itemName: itemDetails.name,
          quantity: 1,
          price: itemDetails.price,
          totalPrice: itemDetails.price
        }
      ],
      totalPrice: 0
    }

    orderDetails.push(tempOrderDetails);
  }

  return [...orderDetails]
}
