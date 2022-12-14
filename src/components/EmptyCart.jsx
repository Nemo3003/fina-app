import React from "react";
import { useNavigate } from "react-router-dom";
import cart from "../assets/empty_cart.webp"

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height:"22em"}} >
      <div style={{display:"grid", justifyContent:'center'}}>
        <img src={cart} alt="empty-cart-img" />
        <button className="btn btn-primary" onClick={() => navigate("/products")}>
          Add products
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
