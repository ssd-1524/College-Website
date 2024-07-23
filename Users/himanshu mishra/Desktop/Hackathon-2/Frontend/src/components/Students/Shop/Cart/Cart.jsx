import React, { useContext } from 'react';
import { Context } from '../../../../Context/Context';

function Cart() {
  const { cart, itemsCount, updateItemCount, removeFromCart } = useContext(Context);

  const handleDecrease = (id) => {
    updateItemCount(id, itemsCount[id] - 1);
  };

  const handleIncrease = (id) => {
    updateItemCount(id, itemsCount[id] + 1);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className='relative'>
      {cart.length === 0 ? (
      <p className="flex items-center justify-center text-8xl pt-32" style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
        Your cart is empty
      </p>      
      ) : (
        <div className="grid grid-cols-5 gap-5 m-5">
          {cart.map((item) => (
            <div key={item.id} className="w-60 rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
              <img className="w-full h-44 object-cover" src={item.image} alt={item.title} />
              <div className="px-6 py-4 text-center flex-1">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.price}</p>
              </div>
              <div className="px-6 pb-4 text-center flex flex-col">
                <div className="flex justify-center flex-row gap-4">
                  <button
                    id={`decrease-${item.id}`}
                    onClick={() => handleDecrease(item.id)}
                    className="button bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                  >
                    -
                  </button>
                  <div id={`number-${item.id}`} className="flex items-center">
                    {itemsCount[item.id] || 0}
                  </div>
                  <button
                    id={`increase-${item.id}`}
                    onClick={() => handleIncrease(item.id)}
                    className="button bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)} 
                  className="button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
