import "./App.scss";
import Home from "./component/Products/Home";
import Navbar from "./component/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products/Products";
import Product from "./component/Products/Product";
import Cart from "./component/Header/Cart";
import { useState } from "react";
import Footer from "./component/Footer/Footer";
import Signin from "./component/Header/Signin";
import Signup from "./component/Header/Signup";
import Navmob from "./component/Header/Navmob";
import Landing from "./component/LandingPage/Landing";
import Info from "./component/Checkout/Information";
import Shipping from "./component/Checkout/Shipping";
import Payment from "./component/Checkout/Payment";
import FinalCeck from "./component/Checkout/FinalCeck";
import Successful from "./component/Checkout/Successful";

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

  // const getCategory = () => category;
  return (
    <>
      <Navbar
        countCartItems={cartItems.length}
        setCategory={setCategory}
        selectedCategory={category}
      />
      <Navmob
        countCartItems={cartItems.length}
        setCategory={setCategory}
        selectedCategory={category}
      />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home category={category} setCategory={setCategory} selectedCategory={category} />} />
        <Route exact path="/products" element={<Products category="" />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/checkout" element={<Info />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/finalCeck" element={<FinalCeck />} />
        <Route exact path="/successful" element={<Successful />} />
        <Route exact path="/products/:id" element={<Product cartItems={cartItems} category={category} onAdd={onAdd} onRemove={onRemove} />} />
        <Route
          exact
          path="/cart"
          element={
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
