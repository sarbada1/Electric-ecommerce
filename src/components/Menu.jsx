import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export default function Menu() {
  return (
    <>
    	<nav id="navigation">
		
			<div className="container">
			
				<div id="responsive-nav">
					
					<ul className="main-nav nav navbar-nav">
         
						<li className="active"><Link to="#">Home</Link></li>
						<li><Link to="#">Hot Deals</Link></li>
						<li><Link to="#">Categories</Link></li>
						<li><Link to="#">Laptops</Link></li>
						<li><Link to="#">Smartphones</Link></li>
						<li><Link to="#">Cameras</Link></li>
						<li><Link to="#">Accessories</Link></li>
            
					</ul>
			
				</div>
				
			</div>
		
		</nav>
    </>
  )
}
