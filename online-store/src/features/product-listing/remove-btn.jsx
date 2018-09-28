import React from "react";

export default function RemoveButton(props) {
  return (
    <button className="remove-btn" onClick={() => props.removeFromCart(props.cartItem)}>
      Remove
    </button>
  );
}
