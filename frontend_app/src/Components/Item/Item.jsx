import React from 'react'
import '../Item/Item.css'

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        {props.new_price !== undefined &&
          props.new_price !== null && (
            <div className="item-price-new">
              ${props.new_price}
            </div>
          )}
        <div
          className="item-price-old"
          style={{
            textDecoration:
              props.hideStrikeThrough
                ? 'none'
                : 'line-through',
          }}
        >
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
