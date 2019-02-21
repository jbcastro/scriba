import React from "react";
import Toggle from "./Button";
function Product(props) {
  return (
    <div>
      <h3>name={props.product.name}</h3>
      <h3>
        price=
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </h3>
      <h4>description={props.product.description}</h4>
    </div>
  );
}

export default Product;
