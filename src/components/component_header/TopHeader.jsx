import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,  faMapLocation, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link , BrowserRouter as Router} from 'react-router-dom';

export default function TopHeader() {
  return (
    <div id="top-header">
      <div className="container">
        <ul className="header-links pull-left">
        
          <li><Link to="#"><FontAwesomeIcon icon={faPhone} /> +021-95-51-84</Link></li>
          <li><Link to="#"><FontAwesomeIcon icon={faEnvelope} /> email@email.com</Link></li>
          <li><Link to="#"><FontAwesomeIcon icon={faMapLocation} /> 1734 Stonecoal Road</Link></li>
        
        </ul>
        <ul className="header-links pull-right">
       

          <li><Link to="#"><FontAwesomeIcon icon={faUserCircle} />  My Account</Link></li>
         
        </ul>
      </div>
    </div>
  );
}
