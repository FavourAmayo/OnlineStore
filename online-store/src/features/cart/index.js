import React, { Component } from "react";
import { connect } from "react-redux";

/* export const cartItemsWithQuantities = cartItems => {
  return cartItems.reduce((acc, item) => {
    const filteredItem = acc.filter(item2 => item2.id === item.id)[0];
    filteredItem !== undefined
      ? filteredItem.quantity++
      : acc.push({ ...item, quantity: 1 });
    return acc;
  }, []);
};
 */

 function sort(items) {
     return items.sort((a, b) => a.id < b.id);
 }

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th className="item">Item</th>
          <th className="quantity">Quantity</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button className="plus-btn" onClick={e => props.addToCart(item)}>+</button>
            </td>
            <button className="minus-btn" onClick={e => props.removeFromCart(item)}>-</button>
            <td />
            <td>
                <button className="remove-all" onClick={(e) => props.removeAllFromCart(item)}>Remove all from cart</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: (item) => {
        dispatch({type: 'REMOVE', payload: item});
    },
    removeAllFromCart: (item) => {
        dispatch({type: 'REMOVE_ALL', payload: item});
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
