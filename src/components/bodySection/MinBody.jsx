import React from 'react'
import SectionTitle from './SectionTitle'
import Product from './Product'

export default function MinBody() {
    return (
        <>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <SectionTitle />
                        <Product />

                    </div>
                </div>
            </div>
        </>
    )
}
