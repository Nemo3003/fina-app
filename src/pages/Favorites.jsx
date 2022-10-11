import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { removeAll } from "../Redux/wishlist/WishListSlice";
import uuid from "react-uuid";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { NavLink } from "react-router-dom";
import noitem from "../assets/empty_cart.webp";

const Favorites = () => {
  const dispatch = useDispatch();
  const { status } = useCheckAuth();
  const products = useSelector((state) => state.wishlist);
  const content =
    products?.wishList?.length > 0 ? (
      products?.wishList?.map((product) => {
        return <ProductCard key={uuid()} product={product} />;
      })
    ) : (
      <div className="text-center">
        <img src={noitem} alt="wishlist empty" />
      </div>
    );

  return (
    <div style={{paddingBottom:'6rem'}}>
      <div>
        {status === "authenticated" ? (
          <div>
            <h2 className="text-center py-3">Mis favoritos</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1em",
              }}
            >
              {content}
            </div>
            {products?.wishList?.length > 0 && (
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeAll())}
                style={{ display: "flex", margin: " 1em auto" }}
              >
                Eliminar toda la lista
              </button>
            )}
          </div>
        ) : (
          <div className="text-center" style={{display:'flex', flexDirection:'column', gap:'3em',marginTop:'2em'}}>
          <h2 className="text-center py-3"><NavLink to="/login">Ingresa</NavLink> ó <NavLink to="/register">Registrate</NavLink> para armar tu lista de favoritos</h2>
        <div style={{display:'flex', justifyContent:'center', marginBottom:'3em'}}>
        </div>
      </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
