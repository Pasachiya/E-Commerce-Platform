import React, { useContext, useState } from "react";
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = ({isLoggedIn, updateLoginStatus }) => {
        console.log("nisLoggedIn:", isLoggedIn);
        const[menu,setMenu]=useState("shop");
        const {getTotalCartItem} = useContext(ShopContext);
        const handleLogout = () => {
          updateLoginStatus(false);
          window.location.reload();
        }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} className="nav-logo-img" alt=""/>
                <p>FOOD MANIA</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("foods")}}><Link style={{ textDecoration: 'none'}} to='foods'>Foods</Link>{menu==="foods"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("sweets")}}><Link style={{ textDecoration: 'none'}} to='sweets'>Sweets</Link>{menu==="sweets"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("drinks")}}><Link style={{ textDecoration: 'none'}} to='drinks'>Drinks</Link>{menu==="drinks"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
            
                {isLoggedIn ? (
   
                     <>
                        <button onClick={handleLogout}>Logout</button>
                        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                        <div className="nav-cart-count">{getTotalCartItem()}</div>
                    </>
                ) : (
                      
                    <Link to='/login'><button>Login</button></Link>
                 )}
            </div>
        </div>
    )
}
export default Navbar;