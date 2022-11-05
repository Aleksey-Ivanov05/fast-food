import React from 'react';

interface Props {
  name: string,
  count: number,
  price: number,
  onButtonClick: React.MouseEventHandler;
}

const OrderItem: React.FC<Props> = ({name, count, price, onButtonClick}) => {
  return (
    <div className="row justify-content-between">
      <span className="col-6">{name}</span>
      <span className="col-2">x{count}</span>
      <span className="col-2">{price*count}KGZ</span>
      <button type="button" className="btn-close col-2" onClick={onButtonClick}></button>
    </div>
  );
};

export default OrderItem;