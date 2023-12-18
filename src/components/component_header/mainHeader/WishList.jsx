import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';

export default function WishList() {
  return (
    <>
      <div>
      <Router>
      <Link to="#" className="wishlist-link">
        <div>
          <FontAwesomeIcon icon={faHeartCircleBolt} />
        </div>
        <span>Your Wishlist</span>
        <div className="qty">2</div>
      </Link>
    </Router>
      </div>
    </>
  )
}
