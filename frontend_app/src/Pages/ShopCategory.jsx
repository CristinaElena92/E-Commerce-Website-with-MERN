import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'



const ShopCategory = (props) => {
  const { all_product}= useContext(ShopContext);
  
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon } alt="" />
      </div>
      </div>
      
      <div className="shopcategory-products">
        {filteredProducts.map((item,i)=>{
          if(props.category===item.category){
            return <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            // new_price={item.new_price} 
            old_price={item.old_price} 
            hideStrikeThrough={true} 
          />
          }else{
            return null;
          }
        })}

      </div>
    </div>
    
  )
}

export default ShopCategory
