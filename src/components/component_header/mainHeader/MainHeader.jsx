import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Account from './Account'

export default function MainHeader() {
    return (
        <>
            <div id="header">

                <div class="container">

                    <div class="row">
<Logo/>
<Search/>
<Account/>
                    </div>
                </div>
            </div>
        </>
    )
}
