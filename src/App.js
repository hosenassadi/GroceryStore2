import './App.css';
import React, { useState } from 'react';
import bread from './bread.jpg';
import milk from './milk.png';
import cheese from './cheese.jpg';
import eggs from './eggs.jpg';
import humos from './humos.jpg';
import cocacolaa from './cocacola.jpg';
import orangejuice from './orangejuice.jpg';
import pasta from './pasta.jpg';
import tuna from './tuna.jpg';
import rice from './rice.jpg';



function App() {
  
  const [Cart, setCart] = useState([]);

  const addItem = (e) =>{
    const item = e.target.value;
    setCart((prev) => [item, ...prev]);
  }
  const removeItem = (product) => {
    const index = Cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newList = [...Cart];
      newList.splice(index, 1);
      setCart(newList);
    }
  };
  const products = [
    { name: 'Bread', image: bread , price: 12 },
    { name: 'Milk', image: milk, price: 7 },
    { name: 'Cheese', image: cheese, price: 22 },
    { name: 'Eggs', image: eggs, price: 20 },
    { name: 'Humos', image: humos, price: 14 },
    { name: 'Rice', image: rice, price: 23 },
    { name: 'Pasta', image: pasta, price: 7 },
    { name: 'Tuna', image: tuna, price: 5 },
    { name: 'Coca Cola', image: cocacolaa, price: 12 },
    { name: 'Orange Juice', image: orangejuice, price: 12 },
    
    // Add more products here
  ];

  return (
    
    <div className="App">
      <h1 className='title'>My Market</h1>
      <div className="buyingProcess">
      <div className="marketCont">
        {products.map((product, index)=> (
      <div key={index} className="marketItem"  >
        <p> 
          {product.name} 
        </p>
        <img className="pic" src={product.image} alt={product.name} />
        <p>Price: {product.price}$</p>
        <button onClick={() => removeItem(product)} className='remove'>Remove</button>
        <button value={product.name} onClick={addItem} className='add'> add </button> 
        </div>
        )
      )}

      </div>
      <div className='outerList'>
      <div className="list">My List</div>
      <div>
        <br/>
      <ul className='mycart'>
             {Cart.map((item)=>
             <li><button value={item} className="secB" key={item}> {item} </button> <br /> <br /> </li>)}
               
             </ul>
             <button className='buyButt'>Buy</button>

             </div>
             </div>
             
      </div>

    </div>
  );
}

export default App;
