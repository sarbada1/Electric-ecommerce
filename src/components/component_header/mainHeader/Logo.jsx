import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Logo() {
  return (
    <>
      <div className="col-md-3">
        <div className="header-logo">
       

            <Link to="/" className="logo">
              <img src="/img/logo.png" alt="Logo" />
            </Link>

          

        </div>
      </div>
    </>
  )
}
