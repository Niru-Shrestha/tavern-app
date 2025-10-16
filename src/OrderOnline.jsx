import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { id: 1, name: '12 oz Coffee Bag', price: 14.00, image: '/MenuList/coffeebag.png' },
  { id: 2, name: 'Cappuccino', price: 5.00, image: '/MenuList/cappuccino.png' },
  { id: 3, name: 'Latte', price: 6.00, image: '/MenuList/latte.png' },
  { id: 4, name: 'Mocha', price: 6.00, image: '/MenuList/mocha.png' },
  { id: 5, name: 'Blueberry Muffin', price: 4.00, image: '/MenuList/muffin.png' },
  { id: 6, name: 'One Pound Coffee Bag', price: 19.00, image: '/MenuList/1poundcoffeebag.png' },
  { id: 7, name: 'Espresso', price: 3.00, image: '/MenuList/espresso.png' },
  { id: 8, name: 'Croissant', price: 3.00, image: '/MenuList/croissant.jpeg' },
  { id: 9, name: 'Breakfast Sandwich', price: 6.00, image: '/MenuList/bfsandwich.png' },
  { id: 10, name: 'Frappe', price: 7.00, image: '/MenuList/frappe.png' },
  { id: 11, name: 'Coffee', price: 3.00, image: '/MenuList/coffee.png' },
  { id: 12, name: 'Tea', price: 3.00, image: '/MenuList/tea.png' },
  { id: 13, name: 'Chai Latte', price: 5.00, image: '/MenuList/chailatte.png' },
  { id: 14, name: 'Cold Brew', price: 6.00, image: '/MenuList/coldbrew.png' },
  { id: 15, name: 'Chocolate Milk', price: 2.00, image: '/MenuList/chocolatemilk.png' },
  { id: 16, name: 'Lemonade', price: 4.00, image: '/MenuList/lemonade.png' },
];

const OrderOnline = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [items, setItems] = useState(menuItems);
  const [sort, setSort] = useState('latest');
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');

  useEffect(() => {
    let sorted = [...menuItems];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    setItems(sorted);
  }, [sort]);

  const addToCart = (item) => {
    if (!user) {
    // Redirect to login if not logged in
    navigate('/login');
    return;
  }

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setDialogText(`${item.name} added to cart!`);
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 2000);
  };

  return (
    <div className="p-10 font-[sans]">
      <img className="w-full h-[60px] object-cover" src="menubg11.JPG" alt="" />
      <h1 className="text-[40px] m-[30px] ml-[200px] ">Order Ahead</h1>

      {showDialog && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          {dialogText}
        </div>
      )}

      <div className="flex justify-between items-center pt-[20px] pb-[50px] pl-[200px] pr-[200px]">
        <div className="text-[18px] text-[#666]">Showing all {items.length} results</div>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="latest">Sort by latest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-[50px] ml-[200px] mr-[200px]">
        {items.map(item => (
          <div key={item.id} className="rounded p-[4px] text-center hover:shadow-md hover:border-gray-500 transition duration-300">
            <img src={item.image} alt={item.name} className="w-full h-48 object-contain mb-[10px]" />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-[5px] mb-[20px] bg-[transparent] px-[6px] py-[2px] rounded hover:bg-[#613b3f] hover:text-[white] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* Bean Border image */}
      <div>
        <img className="w-full block mt-[80px]" src="bean_border-1.png" alt="" />
      </div>
    </div>
  );
};

export default OrderOnline;
