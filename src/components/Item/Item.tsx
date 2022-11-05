import React from 'react';

interface Props {
  image: string;
  name: string,
  price: number,
  onItemClick: React.MouseEventHandler;
}

const Item: React.FC<Props> = ({image, name, price, onItemClick}) => {
  return (
    <div className="col-5 rounded-pill border border-1 border-dark p-1 row justify-content-between mb-4 mx-3" onClick={onItemClick}>
      <div className="col-3"><img src={image} width="70" height="70"/></div>
      <div className="col-8">
        <p><b>{name}</b></p>
        <p>Price: {price} KGZ</p>
      </div>
    </div>
  );
};

export default Item;