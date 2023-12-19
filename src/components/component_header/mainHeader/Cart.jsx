import { faCircleArrowRight, faClose, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="dropdown">
     
      <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
        <div>
      <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <span>Your Cart</span>
        <div className="qty">3</div>
      </Link>
      <div className="cart-dropdown">
        <div className="cart-list">
          <div className="product-widget">
            <div className="product-img">
              <img src="/img/product01.png" alt="" />
            </div>
            <div className="product-body">
              <h3 className="product-name">
                <Link to="#">product name goes here</Link>
              </h3>
              <h4 className="product-price">
                <span className="qty">1x</span>$980.00
              </h4>
            </div>
            <button className="delete">
            <FontAwesomeIcon icon={faClose} />
            </button>
          </div>

          <div className="product-widget">
            <div className="product-img">
              <img src="/img/product02.png" alt="" />
            </div>
            <div className="product-body">
              <h3 className="product-name">
                <Link to="#">product name goes here</Link>
              </h3>
              <h4 className="product-price">
                <span className="qty">3x</span>$980.00
              </h4>
            </div>
            <button className="delete">
            <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
        <div className="cart-summary">
          <small>3 Item(s) selected</small>
          <h5>SUBTOTAL: $2940.00</h5>
        </div>
        <div className="cart-btns">
          <Link to="#">View Cart</Link>
          <Link to="#">
            Checkout<FontAwesomeIcon icon={faCircleArrowRight} />
          </Link>
        </div>
      </div>
   
    </div>
  );
}
