import './App.scss';
import Home from './component/Products/Home';
import Navbar from './component/Header/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products/Products';
import Product from './component/Products/Product';
import Cart from './component/Header/Cart';
import { useEffect, useState } from 'react';
import Footer from './component/Footer/Footer';
import Signin from './component/Header/Signin';
import Signout from './component/Header/Signout';
import Signup from "./component/Header/Signup";
import Navmob from './component/Header/Navmob';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getCategory = () => category;
  return (
    <>
      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Navmob countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Routes>
        <Route exact path='/' element={<Home category={category} />} />
        <Route exact path='/products' element={<Products category="" />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Cart  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
