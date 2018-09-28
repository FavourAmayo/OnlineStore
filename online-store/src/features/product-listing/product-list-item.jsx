import React from "react";
import AddButton from "./add-btn";
import RemoveBtn from "./remove-btn";

export default function ProductListItem(props) {
  /* const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]; */

  return (
    <div className="product-list-item">
      <h3>{props.product.name}</h3>
      <img
        title={props.product.name}
        height={100}
        src={`/products/${props.product.image}`}
        alt={props.product.name}
      />
      <div>{props.product.description}</div>
      <div className="price"><b>${props.product.price}</b></div>
      <div className="buttons">
        <AddButton
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}

/* class ProductListItem extends Component {
  state = {};

  addToCart = () => {
    this.props.addToCart(this.props.product);
  };

  thisItemInCart = () => {
    return this.props.cart.filter(item => item.id === this.props.product.id)[0];
  };

  render() {
    return (
      <div className="product-list-item">
        <h3>{this.props.product.name}</h3>
        <img
          title={this.props.product.name}
          height={100}
          src={`/products/${this.props.product.image}`}
          alt={this.props.product.name}
        />
        <div>{this.props.product.description}</div>
        <div>${this.props.product.price}</div>
        <div>
          <button onClick={this.addToCart}>
            Add to cart (
            {(this.thisItemInCart && this.thisItemInCart.quantity) || 0})
          </button>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
 */
