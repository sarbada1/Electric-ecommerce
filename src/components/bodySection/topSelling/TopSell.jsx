import React from 'react'
import Title from './Title'
import ProductTop from './ProductTop'

export default function TopSell() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <Title />
                        <ProductTop />
                    </div>
                </div>
            </div>
        </>
    )
}
