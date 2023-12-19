import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Title() {
  return (
    <>
       <div className="col-md-12">
						<div className="section-title">
							<h3 className="title">New Products</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
               
									<li className="active"><Link data-toggle="tab" to="#tab1">Laptops</Link></li>
									<li><Link data-toggle="tab" to="#tab1">Smartphones</Link></li>
									<li><Link data-toggle="tab" to="#tab1">Cameras</Link></li>
									<li><Link data-toggle="tab" to="#tab1">Accessories</Link></li>
                 
								</ul>
							</div>
						</div>
					</div>
    </>
  )
}
