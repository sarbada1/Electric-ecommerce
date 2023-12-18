
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillRedEnvelope, AiFillTwitterCircle } from "react-icons/ai";
import React from 'react'
import {  Form } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function SIgnup() {
  return (
   <>
   <div id="newsletter" className="section">
			
			<div className="container">
				
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<Form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><AiFillRedEnvelope/> Subscribe</button>
							</Form>
							<ul className="newsletter-follow">
                                <Router>
								<li>
									<Link to="#"><AiFillFacebook/></Link>
								</li>
								<li>
									<Link to="#"><AiFillTwitterCircle /></Link>
								</li>
								<li>
									<Link to="#"><AiFillInstagram /></Link>
								</li>
								<li>
									<Link to="#"><AiFillGithub /></Link>
								</li>
                                </Router>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		
		</div>
   </>
  )
}
