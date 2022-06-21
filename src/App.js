import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductCard from './productCard.js';
import CartList from './cartList.js';
import { useState } from 'react';


function App() {
  const [products,setProducts]= useState([
    {
      id: 1,
      name: 'Etymotic - ER4',
      price: 26999,
      img: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Etymotic-ER4SR-1160-1160-5_500x.jpg?v=1649663317",
    },
    {
      id: 2,
      name: 'Sennheiser - IE 300',
      price: 29990,
      img: "https://cdn.shopify.com/s/files/1/0153/8863/products/Sennhieser-IE300-05_500x.jpg?v=1616396163",
    },
    {
      id: 3,
      name: 'Grado - SR225x',
      price: 24999,
      img: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Grado-SR225x-1_500x.jpg?v=1647951107",
    },
    {
      id: 4,
      name: 'Klipsch - T5 II True',
      price: 27999,
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Klipsch-T5-II-True-Wireless-Sport-McLaren-1160-1160-2_500x.jpg?v=1609749652',
    },
    {
      id: 5,
      name: 'Bowers & Wilkins - PI5',
      price: 28000,
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Bowers-_-Wilkins-PI5-Charcoal-4_500x.jpg?v=1626069763',
    },
    {
      id: 6,
      name: 'Devialet - Gemini',
      price: 24999,
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Gemini-02_500x.jpg?v=1611400646',
    },
    {
      id: 7,
      name: 'Monoprice M565C4',
      price: 21999,
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Monolith-M565C-01_500x.jpg?v=1649664941',
    },
    {
      id: 8,
      name: 'Monoprice M1060',
      price: 29999,
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Monolith-M1060-02_500x.jpg?v=1649751491',
    },
    {
      id: 9,
      name: 'Moondrop - Blessing 2',
      price: 28999,
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Moondrop-Blessing2-01_500x.jpg?v=1615984844',
    },
  ])
  let [cartItems,setCartItems] = useState([]);
  let [total,setTotal] = useState(0)
  let handleAddToCart = (id) => {
    let productIndex = products.findIndex(obj => obj.id === id);
    let product = products[productIndex];
    setCartItems([...cartItems,product]);
    setTotal(total + product.price);
  }
  
  let handleRemoveFromCart = (id) =>{
    //alert(id);
    let cartItemIndex = cartItems.findIndex(obj => obj.id === id);
    setTotal(total - cartItems[cartItemIndex].price);
    cartItems.splice(cartItemIndex,1);
    setCartItems([...cartItems])
  }

  return ( 
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <h5>Products</h5>
          <div className='row'>
            {
              products.map((product)=>{
                return (<ProductCard data = {product} handleAddToCart = {handleAddToCart}/>)
              })
            }
          </div>
        </div>
        <div className='col-lg-4'>
          <h5>Cart</h5>
          <ol class="list-group list-group-numbered">
            {
              cartItems.map((cartItem)=>{
                return (<CartList data={cartItem} handleRemoveFromCart = {handleRemoveFromCart} />)
              })
            }
          </ol>
          <h2>Total: {total}</h2>
        </div>
      </div>
    </div >
  );
}

export default App;
