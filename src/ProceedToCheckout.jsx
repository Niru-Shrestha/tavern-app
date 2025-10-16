// import React, { useState, useEffect } from "react";

// const ProceedToCheckout = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [customer, setCustomer] = useState({
//     name: '',
//     address: '',
//     contact: '',
//   });
//   const [hasPaid, setHasPaid] = useState(false);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(stored);
//   }, []);

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handlePlaceOrder = () => {
//     if (!customer.name || !customer.address || !customer.contact) {
//       alert('Please fill in all customer information before placing the order.');
//       return;
//     }

//     if (!hasPaid) {
//       alert('Please confirm that you have completed the payment by scanning the QR code.');
//       return;
//     }

//     alert('Order placed successfully!');
//     localStorage.removeItem('cartItems');
//     setCustomer({ name: '', address: '', contact: '' });
//     setCartItems([]);
//     setHasPaid(false);
//   };

//   return (
//     <div className="font-[sans] p-[30px] text-[#666] bg-[white] min-h-screen">
//       <h1 className="text-[40px] text-[#666] ml-[240px] mt-[40px] mb-[40px] font-bold">Checkout</h1>

//       <div className="flex flex-col-2 lg:flex-row gap-[50px] max-w-2/3 mx-auto">
//         {/* div1 - Customer Info */}
//         <div
//           id="div1"
//           className="flex-1 min-w-[550px] bg-white p-[10px] rounded shadow-md"
//         >
//           <h2 className="text-[28px] font-bold mb-[10px]">Customer Information</h2>
//           <div className="mb-[16px]">
//             <label className="block text-sm font-medium text-gray-700 mb-[2px]">Name</label>
//             <input
//               type="text"
//               value={customer.name}
//               onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
//               placeholder="Your name"
//               className="w-full border border-gray-300 rounded px-[8px] py-[6px] focus:outline-none focus:ring-2 focus:ring-[#666]"
//             />
//           </div>
//           <div className="mb-[16px]">
//             <label className="block text-sm font-medium text-gray-700 mb-[2px]">Address</label>
//             <input
//               type="text"
//               value={customer.address}
//               onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
//               placeholder="Your address"
//               className="w-full border border-gray-300 rounded px-[8px] py-[6px] focus:outline-none focus:ring-2 focus:ring-[#666]"
//             />
//           </div>
//           <div className="mb-[16px]">
//             <label className="block text-sm font-medium text-gray-700 mb-[2px]">Contact Number</label>
//             <input
//               type="text"
//               value={customer.contact}
//               onChange={(e) => setCustomer({ ...customer, contact: e.target.value })}
//               placeholder="Your contact number"
//               className="w-full border border-gray-300 rounded px-[8px] py-[6px] focus:outline-none focus:ring-2 focus:ring-[#666]"
//             />
//           </div>

//           {/* Payment QR Section */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">Scan to Pay (Khalti / eSewa)</h3>
//             <div className="flex flex-col md:flex-row gap-6">
//               <div className="flex flex-col items-center">
//                 <img src="/tavernkhalti-qr.svg" alt="Khalti QR" className="w-[150px] h-[150px] object-contain border rounded p-1" />
//                 <p className="text-sm mt-1">Khalti</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <img src="/esewa-qr.jpg" alt="eSewa QR" className="w-[150px] h-[150px] object-contain border rounded p-1" />
//                 <p className="text-sm mt-1">eSewa</p>
//               </div>
//             </div>

//             <div className="mt-[4px] flex items-start gap-2">
//               <input
//                 type="checkbox"
//                 id="hasPaid"
//                 checked={hasPaid}
//                 onChange={(e) => setHasPaid(e.target.checked)}
//                 className="mt-[3px]"
//               />
//               <label htmlFor="hasPaid" className="text-sm text-gray-700">
//                 I have completed the payment by scanning the QR code.
//               </label>
//             </div>
//           </div>

//           <button
//             onClick={handlePlaceOrder}
//             className="mt-[20px] bg-[black] text-[white] px-[20px] py-[8px] rounded hover:bg-gray-800 transition-colors duration-300"
//           >
//             Place Order
//           </button>
//         </div>

//         {/* div2 - Receipt Summary */}
//         <div
//           id="div2"
//           className="w-full lg:w-[400px] bg-white p-6 rounded shadow-md flex flex-col"
//           style={{ fontFamily: 'Courier, monospace' }}
//         >
//           <h2 className="text-[28px] font-bold mb-[8px] border-b pb-[5px]">Your Receipt</h2>

//           {cartItems.length === 0 ? (
//             <p className="text-center text-gray-500">No items in cart.</p>
//           ) : (
//             <>
//               <div className="flex flex-col gap-[10px] mb-[]">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between">
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                     </div>
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t pt-[8px] mt-auto">
//                 <div className="flex justify-between font-bold text-lg mb-[6px]">
//                   <span>Total</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>
//                 <p className="text-xs text-gray-500">Thank you for your purchase!</p>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProceedToCheckout;


import React, { useState, useEffect } from "react";

const ProceedToCheckout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    contact: '',
  });
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(stored);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (!customer.name || !customer.address || !customer.contact) {
      alert('Please fill in all customer information before placing the order.');
      return;
    }

    if (!hasPaid) {
      alert('Please confirm that you have completed the payment by scanning the QR code.');
      return;
    }

    const token = localStorage.getItem('token'); // Make sure token is stored on login

    if (!token) {
      alert('You must be logged in to place an order.');
      return;
    }

    const orderData = {
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      customerInfo: {
        name: customer.name,
        address: customer.address,
        contactNumber: customer.contact,
      },
      totalAmount: total,
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Order placed successfully!');
        localStorage.removeItem('cartItems');
        setCustomer({ name: '', address: '', contact: '' });
        setCartItems([]);
        setHasPaid(false);
        // Optionally redirect user here
      } else {
        alert(data.msg || 'Failed to place order');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="font-[sans] p-[30px] text-[#666] bg-[white] min-h-screen">
      <h1 className="text-[40px] text-[#666] ml-[240px] mt-[40px] mb-[40px] font-bold">Checkout</h1>

      <div className="flex flex-col-2 lg:flex-row gap-[50px] max-w-2/3 mx-auto">
        {/* div1 - Customer Info */}
        <div
          id="div1"
          className="flex-1 min-w-[550px] bg-white p-[10px] rounded shadow-md"
        >
          <h2 className="text-[28px] font-bold mb-[10px]">Customer Information</h2>
          <div className="mb-[16px]">
            <label className="block text-sm font-medium text-gray-700 mb-[2px]">Name</label>
            <input
              type="text"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-[8px] py-[6px] focus:outline-none focus:ring-2 focus:ring-[#666]"
            />
          </div>
          <div className="mb-[16px]">
            <label className="block text-sm font-medium text-gray-700 mb-[2px]">Address</label>
            <input
              type="text"
              value={customer.address}
              onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
              placeholder="Your address"
              className="w-full border border-gray-300 rounded px-[8px] py-[6px] focus:outline-none focus:ring-2 focus:ring-[#666]"
            />
          </div>
          <div className="mb-[16px]">
            <label className="block text-sm font-medium text-gray-700 mb-[2px]">Contact Number</label>
            <input
              type="text"
              value={customer.contact}
              onChange={(e) => setCustomer({ ...customer, contact: e.target.value })}
              placeholder="Your contact number"
              className="w-full border border-gray-300 rounded px-[8px] py-[6px] focus:outline-none focus:ring-2 focus:ring-[#666]"
            />
          </div>

          {/* Payment QR Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Scan to Pay (Khalti / eSewa)</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center">
                <img src="/tavernkhalti-qr.svg" alt="Khalti QR" className="w-[150px] h-[150px] object-contain border rounded p-1" />
                <p className="text-sm mt-1">Khalti</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/esewa-qr.jpg" alt="eSewa QR" className="w-[150px] h-[150px] object-contain border rounded p-1" />
                <p className="text-sm mt-1">eSewa</p>
              </div>
            </div>

            <div className="mt-[4px] flex items-start gap-2">
              <input
                type="checkbox"
                id="hasPaid"
                checked={hasPaid}
                onChange={(e) => setHasPaid(e.target.checked)}
                className="mt-[3px]"
              />
              <label htmlFor="hasPaid" className="text-sm text-gray-700">
                I have completed the payment by scanning the QR code.
              </label>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-[20px] bg-[black] text-[white] px-[20px] py-[8px] rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Place Order
          </button>
        </div>

        {/* div2 - Receipt Summary */}
        <div
          id="div2"
          className="w-full lg:w-[400px] bg-white p-6 rounded shadow-md flex flex-col"
          style={{ fontFamily: 'Courier, monospace' }}
        >
          <h2 className="text-[28px] font-bold mb-[8px] border-b pb-[5px]">Your Receipt</h2>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">No items in cart.</p>
          ) : (
            <>
              <div className="flex flex-col gap-[10px] mb-[]">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-[8px] mt-auto">
                <div className="flex justify-between font-bold text-lg mb-[6px]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500">Thank you for your purchase!</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProceedToCheckout;
