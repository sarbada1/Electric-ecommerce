import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Collection() {
  return (
    <>
      <div className="section">

        <div className="container">

          <div className="row">
         
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="/img/shop01.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>Laptop<br />Collection</h3>
                    <Link to="#" className="cta-btn">Shop now <FontAwesomeIcon icon={faArrowCircleRight} />  </Link>
                  </div>
                </div>
              </div>



              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="/img/shop03.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>Accessories<br />Collection</h3>
                    <Link to="#" className="cta-btn">Shop now <FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="/img/shop02.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>Cameras<br />Collection</h3>
                    <Link to="#" className="cta-btn">Shop now <FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                  </div>
                </div>
              </div>
           
          </div>

        </div>

      </div>
    </>
  )
}
