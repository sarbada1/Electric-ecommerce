
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Visa, Mastercard, Discover, Amex, Worldpay, MobilePay, Applepay } from 'react-pay-icons'



import { BrowserRouter as Router, Link } from 'react-router-dom'



export default function BottomFooter() {

  return (
   <>
   		<div id="bottom-footer" className="section">
				<div className="container">
				
					<div className="row">
						<div className="col-md-12 text-center">
                              
							<ul className="footer-payments">
								
								<li><Link to="#"><Worldpay style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Mastercard style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Applepay style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><MobilePay style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Visa style={{ margin: 10, width: 100 }}/></Link></li>
                                
							</ul>
					
                           
						</div>
					</div>
					
				</div>
			
			</div>
   </>
  )
}
