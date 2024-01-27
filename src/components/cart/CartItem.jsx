import React from "react";
import "./Cart.css";
import { useCart } from "../../hook/useContextCartProvider";
import { useNavigate } from "react-router-dom";
function CartItem({ product }) {
  const { state, dispatch } = useCart();
const navigate = useNavigate()
  const increaseHandler = id => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: id, type: "inc", val: 1 }
    });
  };

  const decreaseHandler = id => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: id, type: "dec", val: -1 }
    });
  };

  const changeQualityHandler = (id, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: id, type: "inputChange", val: newQuantity }
    });
  };

  const removeItemHandler = (id) =>{
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: {
        id: id
      }
    });
  }

  const displayItem =( id) =>{
    navigate(`/products/${id}`);
  }

  return (
    <div className="table-row">
      <div className="table-cell">
        <img src={product?.image} width={60} />
      </div>
      <div className="table-cell">
        {product?.price.toFixed(2)} $
      </div>
      <div className="table-cell">
        {(product?.price * product?.quantity).toFixed(2)} $
      </div>
      <div className="table-cell cart-quantity">
        <span onClick={() => decreaseHandler(product?.id)}>-</span>
        <input
          type="number"
          min="0"
          value={product?.quantity}
          onChange={e =>
            changeQualityHandler(product?.id, parseInt(e.target.value, 10))}
          className="quantity-input"
        />
        <span onClick={() => increaseHandler(product?.id)}>+</span>
      </div>
      <div className="table-cell btns">
        <span onClick={()=>removeItemHandler(product.id)}>&#x292B;</span>
        <span  onClick={()=>displayItem(product.id)}>&#x2139;</span>
      </div>
    </div>
  );
}

export default CartItem;
