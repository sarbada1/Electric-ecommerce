import { faBell, faCaretDown, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" style={{ fontSize: '2.5rem' }}>
              Electric Ecommerce
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/notifications" style={{ fontSize: '2rem', color: 'white', marginTop: '15px' }}>
                <FontAwesomeIcon icon={faBell}/>
                </Link>
              </li>
              <li style={{ fontSize: '2rem', marginLeft: '25px', marginTop: '15px' }}>
                <Link to="/settings" style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faCog}/>
                </Link>
              </li>
              <li className="dropdown" style={{ fontSize: '2rem', marginLeft: '25px', marginTop: '15px' }}>
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: 'white' }}
                >
                 <FontAwesomeIcon icon={faUser}/>
                 <FontAwesomeIcon icon={faCaretDown}/>
                 
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="#logout">Logout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
