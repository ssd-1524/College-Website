import React, { useState } from 'react'
import Card from './Card/Card'
import { FaShoppingCart } from 'react-icons/fa'
import Data from './Data/Data.json'
import Cart from './Cart/Cart'

function Shop() {
  const [showCart, setShowCart] = useState(false)

  const handleCartToggle = () => {
    setShowCart((prevShowCart) => !prevShowCart)
  }

  return (
    <div className='w-full'>
      <h1 className='m-6 text-4xl font-bold text-teal-600 mb-4 underline' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
        Shop Medicines
      </h1>
      <div className='border rounded-3xl shadow-lg m-10'>
        <div className='w-full flex justify-end mt-3 mb-5'>
          <button onClick={handleCartToggle} className='flex gap-4 p-2 mr-5 text-3xl items-center justify-end hover:bg-teal-400 hover:text-white'>
          {showCart ? 'Back to Shop' : <>Cart <FaShoppingCart size={30} /></>}
          </button>
        </div>
        
        <div className='overflow-y-auto pb-20' style={{ height: '27rem' }}> 
          {showCart ? (
            <Cart />
          ) : (
            <div className='grid grid-cols-5 m-5 justify-items-center'>
              {Data.medicines.map((medicine) => (
                <Card 
                  key={medicine.id}
                  id={medicine.id}
                  title={medicine.title}
                  image={medicine.image}
                  price={medicine.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
