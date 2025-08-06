import React from 'react'
import PricingCard from './PricingCard'
import { pricingPlans } from '../data/prices.js'

const PricingSection = () => {
  return (
    <div className='bg-gradient-to-br from-primary/20 to-secondary/20 p-10 flex items-center justify-center flex-wrap min-h-screen'>
      {pricingPlans.map(plan=>(
        <PricingCard key={plan.id} {...plan} />
      ))}
    </div>
  )
}

export default PricingSection
