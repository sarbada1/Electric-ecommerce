import { faExchange, faEye, faHeart, faHeartCrack, faShoppingCart, faStar, faStarAndCrescent, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'


export default function ProductTop() {
  return (
  <>
  <div className="col-md-12">
        <div className="row">
          <div className="products-tabs">
            <Router>
              <div id="tab1" className="tab-pane active">
                <div className="products-slick" data-nav="#slick-nav-1">

                  <div className="product">
                    <div className="product-img">
                      <img src="/img/product01.png" alt="" />
                      <div className="product-label">
                        <span className="sale">-30%</span>
                        <span className="new">NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><Link href="#">product name goes here</Link></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                      <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><FontAwesomeIcon icon={faHeart}/><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><FontAwesomeIcon icon={faExchange}/><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><FontAwesomeIcon icon={faEye}/><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                    </div>
                  </div>

                  <div className="product">
                    <div className="product-img">
                      <img src="/img/product02.png" alt="" />
                      <div className="product-label">
                        <span className="new">NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><Link href="#">product name goes here</Link></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStarHalfStroke}/>
                       
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><FontAwesomeIcon icon={faHeart}/><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><FontAwesomeIcon icon={faExchange}/><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><FontAwesomeIcon icon={faEye}/><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                    </div>
                  </div>

                  <div className="product">
                    <div className="product-img">
                      <img src="/img/product03.png" alt="" />
                      <div className="product-label">
                        <span className="new">NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><Link href="#">product name goes here</Link></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStarHalfStroke}/>
                       
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><FontAwesomeIcon icon={faHeart}/><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><FontAwesomeIcon icon={faExchange}/><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><FontAwesomeIcon icon={faEye}/><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-img">
                      <img src="/img/product04.png" alt="" />
                      <div className="product-label">
                        <span className="new">NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><Link href="#">product name goes here</Link></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStarHalfStroke}/>
                       
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"> <FontAwesomeIcon icon={faHeart}/><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"> <FontAwesomeIcon icon={faExchange}/><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"> <FontAwesomeIcon icon={faEye}/><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                    </div>
                  </div>



                </div>
                <div id="slick-nav-1" className="products-slick-nav"></div>
              </div>
            </Router>
          </div>
        </div>
      </div>
  </>
  )
}
