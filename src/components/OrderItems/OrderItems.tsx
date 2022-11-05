import React from 'react';
import OrderItem from "../OrderItem/OrderItem";

interface Props {
  items: ItemInfo[],
  onDelete: (id: number) => void
}

const OrderItems: React.FC<Props> = ({items, onDelete}) => {
  let empty = '';
  const orderItems = items.filter(item => item.count > 0);
  if (orderItems.length === 0) {
    empty = 'Order is empty! Please add some items!'
  }

  const totalPrice = orderItems.reduce((acc, item) => {
    return acc + item.count*item.price;
  }, 0);

  return (
    <div className="col-4 border border-2 border-dark px-4">
      <p><b>Order list</b></p>
      {empty}
      <div>
        {orderItems.map(item => (
          <OrderItem key={item.id} name={item.name} count={item.count} price={item.price} onButtonClick={() => onDelete(item.id)}/>
        ))}
        <p><strong>Total price: {totalPrice} KGZ</strong></p>
      </div>
    </div>
  );
};

export default OrderItems;