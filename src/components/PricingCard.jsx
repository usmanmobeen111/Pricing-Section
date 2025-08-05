import React from 'react'
const PricingCard = ({ name, price, frequency, features, cta, isPopular}) => {
  return (
    <div>
      <div className='bg-white p-6 rounded-lg shadow-lg m-4 w-80'>
        {isPopular && <span>Popular</span>}
        <h1>{name}</h1>
        <h2>{price}/<span>{frequency}</span></h2>
        <ul>
            {features.map((feature, index)=>(
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <button className='bg-gradient-to-r from-primary/85 to-secondary/85 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-white py-2 px-4 rounded w-full transition duration-300 cursor-pointer'>{cta}</button>

      </div>
    </div>
  )
}

export default PricingCard
