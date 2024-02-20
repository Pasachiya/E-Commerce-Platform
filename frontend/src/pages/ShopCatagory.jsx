import React, { useContext } from "react";
import './CSS/ShopCatagory.css';
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from "../components/Items/Item";

const ShopCatagory =(props) => {
    const{all_product} = useContext(ShopContext);
    return(
    <div className="shop-catagory">
    <img className="shopcatagory-banner" src={props.banner} alt=""/>
    <div className="shopcatagory-indexSort">
        <p>
            <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatagory-sort">
            Sort by <img src={dropdown_icon} alt=""/>
        </div>
    </div>
    <div className="shopcatagory-products">
        {all_product.map((item,i)=>{
            if(props.catagory===item.category){
                    return<Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
                return null;
            }
        })}
    </div>
        <div className="shopcatagory-loadmore">
            Explore More
        </div>
    </div>
)

}
export default ShopCatagory;