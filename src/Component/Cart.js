import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeProduct } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((product) => {
        return (
          <div className=" col-md-3 mb-4">
            <div class="card h-100 text-center p-4" key={product.id}>
              <img
                src={product.image}
                class="card-img-top"
                alt={product.title}
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title mb-0">{product.name.substring(0, 12)}</h5>
                <p class="card-text lead fw-bold">${product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  class="btn btn-outline-dark"
                >
                  Buy Now
                </NavLink>
                <hr />
                <Button
                  style={{ backgroundColor: "lightblue" }}
                  className="btn btn-outline-dark px-4 py-2"
                  onClick={() => {
                    dispatch(removeProduct(product.id));
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
