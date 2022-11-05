import React, {useState} from 'react';
import foodImage from './assets/foodImage.png';
import hotDrinkImage from './assets/hotDrinkImage.png';
import coldDrinkImage from './assets/coldDrinkImage.png';
import Item from "./components/Item/Item";
import OrderItem from "./components/OrderItem/OrderItem";

function App() {
  const [items, setItems] = useState([
    {name: 'Hamburger', count: 0, price: 80, image: foodImage, id: 1},
    {name: 'Coffee', count: 0, price: 70, image: hotDrinkImage, id: 2},
    {name: 'Cheeseburger', count: 0, price: 90, image: foodImage,  id: 3},
    {name: 'Tea', count: 0, price: 50, image: hotDrinkImage, id: 4},
    {name: 'Fries', count: 0, price: 45, image: foodImage, id: 5},
    {name: 'Cola', count: 0, price: 40, image: coldDrinkImage, id: 6},
  ]);

  const addNewOrderItem = (id: number) => {
    setItems(prev => prev.map(item => {
      return item.id === id ? {
        ...item,
        count: item.count + 1,
      } : item;
    }))
  }

  const onDelete = (id: number) => {
    setItems(prev => prev.map(item => {
      return item.id === id ? {
        ...item,
        count: 0,
      } : item;
    }))
  }

  let empty = '';
  const orderItems = items.filter(item => item.count > 0);
  if (orderItems.length === 0) {
    empty = 'Order is empty! Please add some items!'
  }

  const totalPrice = orderItems.reduce((acc, item) => {
    return acc + item.count*item.price;
  }, 0);

  return (
    <div className="container">
      <div className="row mt-3 justify-content-between">
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
        <div className="col-7 border border-2 border-dark row p-5">
          {items.map(item => (
            <Item key={item.id} image={item.image} name={item.name} price={item.price} onItemClick={() => addNewOrderItem(item.id)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
