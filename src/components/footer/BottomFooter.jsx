
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Visa, Paypal, Mastercard, Discover, Amex } from 'react-pay-icons'



import { BrowserRouter as Router, Link } from 'react-router-dom'



export default function BottomFooter() {

  return (
   <>
   		<div id="bottom-footer" className="section">
				<div className="container">
				
					<div className="row">
						<div className="col-md-12 text-center">
                                <Router>
							<ul className="footer-payments">
								
								<li><Link to="#"><Paypal style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Mastercard style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Discover style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Amex style={{ margin: 10, width: 100 }}/></Link></li>
								<li><Link to="#"><Visa style={{ margin: 10, width: 100 }}/></Link></li>
                                
							</ul>
					
                            </Router>
						</div>
					</div>
					
				</div>
			
			</div>
   </>
  )
}
