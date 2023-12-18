import React from 'react'
import Collection from './bodySection/Collection'
import MinBody from './bodySection/MinBody'
import HotDeal from './bodySection/HotDeal'
import TopSell from './bodySection/topSelling/TopSell'


export default function Body() {
  return (
    <>
      <Collection />
    <MinBody/>
    <HotDeal/>
    <TopSell/>
    </>
  )
}
