import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function MenuToggle() {
    return (
        <>
            <div className="menu-toggle">
                <Router>
                <Link to="#">
                    <div>
                    
                    <FontAwesomeIcon  icon={faBars}/>
                    </div>
                    
                    <span>Menu</span>
                </Link>
                </Router>
            </div>
        </>
    )
}
