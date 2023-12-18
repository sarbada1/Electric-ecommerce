import React from 'react'
import WishList from './WishList'
import Cart from './Cart'
import MenuToggle from './MenuToggle'

export default function Account() {
    return (
        <>
            <div className="col-md-3 clearfix">
                <div className="header-ctn">
<WishList/>
<Cart/>
<MenuToggle/>
                </div>
            </div>
        </>
    )
}
