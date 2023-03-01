import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeToCart } from "../redux/cart/actions";
import { ADD_TO_CART } from "../redux/cart/actionTypes";

const ProductCard = ({ product }) => {
  const { image, model, price } = product;
  const {pathName} = useLocation()

  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid silver",
        borderRadius: "6px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img style={{ width: "100%", borderRadius: "10px" }} src={image} alt="" />
      <span>Price: {price}</span>
      <h4>{model}</h4>
      <button onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
      <button onClick={() => dispatch(removeToCart(product))}>
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
