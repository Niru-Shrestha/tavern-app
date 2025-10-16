import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'; 

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if user not logged in
    // if (!user) {
    //   navigate('/login');
    //   alert("Please login or signup to add to cart")
    // }

    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCart(stored);
  }, [user, navigate]);

  const updateQuantity = (id, change) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCart(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  if (cart.length === 0) {
    return (
      <div className="p-[10px] text-center font-[sans]">
        <h1 className="text-2xl font-bold mb-[6px]">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-[20px] flex flex-col items-center font-[sans]">
      <h1 className="text-3xl font-bold mb-[10px]">Your Cart</h1>
      
      <div className="flex gap-[80px] w-full max-w-[1200px]">
        {/* Left div (Cart Items) */}
        <div className="w-2/3  p-[6px] rounded shadow" id="div1">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="flex items-center py-[4px] gap-[px]">
                    <img src={item.image} alt={item.name} className="w-[50px] object-contain" />
                    {item.name}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="flex items-center gap-[4px]">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-[2px]">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-[2px]">+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 font-bold text-lg px-[2px]"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right div (Cart Totals) */}
        <div className="w-1/3 h-[350px] bg-[#4B2F32] text-[white] p-[10px] rounded shadow" id="div2">
          <h2 className="text-xl text-[#EAD4B3] font-bold m-[20px]">Cart totals</h2>
          <div className="border border-white p-[16px]">
            <div className="flex justify-between border-b pb-[12px] mb-[12px]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col gap-[0px] border-b pb-[12px] mb-[12px]">
              <label className="flex items-center gap-[6px]">
                <input type="radio" name="shipping" checked readOnly />
                <span>In-Store Pickup</span>
              </label>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className=" bg-[#A8603D] text-[white] text-[16px] hover:bg-[transparent] hover:border-[#A8603D] hover:border-[2px] w-full mt-[20px] py-[6px] rounded"
            onClick={() => navigate("/proceedtocheckout")}
          >
            Proceed to checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
