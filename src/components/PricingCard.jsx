import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
const PricingCard = ({ name, price, frequency, features, cta, isPopular}) => {
  return (
    <div>
      <div className='bg-white p-6 rounded-lg shadow-lg m-4 w-80 flex flex-col items-center gap-4'>
        {isPopular && <span className='bg-green-400 text-white px-2 py-1'>Popular</span>}
        <h1 className='text-gray-700 font-bold text-2xl'>{name}</h1>
        <h2 className='text-gray-600 text-xl'>{price}/<span className='text-lg'>{frequency}</span></h2>
        <ul>
            {features.map((feature, index)=>(
                <li key={index} className='flex items-center gap-2 my-2'><FaCheckCircle className='text-primary/85'/> {feature}</li>
            ))}
        </ul>
        <button className='bg-gradient-to-r from-primary/85 my-2 to-secondary/85 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-white py-2 px-4 rounded w-full transition duration-300 cursor-pointer'>{cta}</button>

      </div>
    </div>
  )
}

export default PricingCard
