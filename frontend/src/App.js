
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCatagory from './pages/ShopCatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import food_banner from './components/Assets/banner_foods.jpg';
import sweet_banner from './components/Assets/banner_sweets.jpg';
import drink_banner from './components/Assets/banner_drinks.jpg';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  //console.log("appbisLoggedIn:", isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateLoginStatus = (status) => {
    console.log("Updating isLoggedIn status to:", status);
    setIsLoggedIn(status);
  }


  
  return (
    <div>
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} updateLoginStatus={updateLoginStatus} />
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/foods' element={<ShopCatagory banner={food_banner} catagory="food"/>}/>
      <Route path='/sweets' element={<ShopCatagory banner={sweet_banner} catagory="sweet"/>}/>
      <Route path='/drinks' element={<ShopCatagory banner={drink_banner} catagory="drink"/>}/>
      <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes><br />
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
