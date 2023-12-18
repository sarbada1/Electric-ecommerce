import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Search() {
  return (
    <>
       <div className="col-md-6">
      <div className="header-search">
        <form>
          <select className="input-select">
            <option value="0">All Categories</option>
            <option value="1">Category 01</option>
            <option value="2">Category 02</option>
          </select>
          <input className="input" placeholder="Search here" />
          <button class="search-btn">Search</button>
        </form>
      </div>

    </div>
    </>
  )
}
