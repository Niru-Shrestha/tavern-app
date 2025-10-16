import React, { useState, useEffect } from 'react';


 // Sample menu data based on the provided image
  const menuItems = [
    { name: '12 oz Coffee bag', price: '$14.00' },
    { name: 'Cappuccino', price: '$5.00 - $6.00' },
    { name: 'Latte', price: '$5.00 - $6.00' },
    { name: 'Mocha', price: '$5.00 - $6.00' },
    { name: 'Arizona Teas', price: '$2.00' },
    { name: 'Muffin', price: '$4.00' },
    { name: 'One pound coffee bag', price: '$19.00' },
    { name: 'Hot Chocolate', price: '$2.00' },
    { name: 'Espresso Shot', price: '$3.00' },
    { name: 'Croissant', price: '$3.00' },
    { name: 'Farmers Market Coffee', price: '$2.78' },
    { name: 'V8 Splash', price: '$1.50' },
    { name: 'Breakfast Sandwiches', price: '$6.00' },
    { name: 'Frappe', price: '$7.00' },
    { name: 'Coffee', price: '$2.00 - $3.00' },
    { name: 'Tea', price: '$2.00 - $3.00' },
    { name: 'Chai Latte', price: '$4.00 - $5.00' },
    { name: 'Sparkling Water', price: '$1.25' },
    { name: 'Cold Brew', price: '$6.00' },
    { name: 'Chocolate Milk', price: '$2.00' },
    { name: 'Tavern T-shirt', price: '$12.00' },
    { name: 'Farmer\'s Market Cold Brew', price: '$5.56' },
    { name: 'Lemonade', price: '$4.00' },
    { name: 'Farmers Market Apple Cider', price: '$2.78' },
    { name: 'Snapple Tea', price: '$2.50' },
    { name: 'Cookie Bar', price: '$3.00' },
  ];
  
// Main App component
const FullMenu =() => {

  // State to manage the current sort option
  const [sortOption, setSortOption] = useState('latest');
  // State to hold the sorted menu items
  const [sortedItems, setSortedItems] = useState(menuItems);

  // Effect to re-sort items whenever the sortOption changes
  useEffect(() => {
  const currentSortedItems = [...menuItems]; // Create a mutable copy

    if (sortOption === 'name-asc') {
      currentSortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price-asc') {
      currentSortedItems.sort((a, b) => {
        // Extract the first numerical value from the price string for comparison
        const priceA = parseFloat(a.price.replace('$', '').split('-')[0]);
        const priceB = parseFloat(b.price.replace('$', '').split('-')[0]);
        return priceA - priceB;
      });
    } else if (sortOption === 'price-desc') {
      currentSortedItems.sort((a, b) => {
        // Extract the first numerical value from the price string for comparison
        const priceA = parseFloat(a.price.replace('$', '').split('-')[0]);
        const priceB = parseFloat(b.price.replace('$', '').split('-')[0]);
        return priceB - priceA;
      });
    }
    // If sortOption is 'latest', no specific sorting is applied,
    // it remains in the original order of menuItems.

    setSortedItems(currentSortedItems);
  }, [sortOption, menuItems]); // Re-run effect if sortOption or original menuItems change

  // Handler for when the sort dropdown value changes
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <>
    {/* Menu Bar with background picture of coffee beans */}
    <div className=" relative z-0 bg-[url('/menubg11.JPG')] bg-cover bg-center h-[160px]">
      <h1 className="relative z-0 text-[#EAD4B3] text-[46px] font-[sans] ml-[42px] p-[50px]">Menu</h1>
    </div>

    <div className=" bg-[#4B2F32] text-[#EAD4B3] font-[sans] p-[80px] ">
      {/* Header section with results count and sort dropdown */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between sm:flex-row ">
        <div className="text-[20px] ml-[10px] text-[#999] ">
          Showing all {sortedItems.length} results
        </div>
        <div className="flex items-center mb-[28px] space-x-2">
          <label htmlFor="sort-by" className="text-gray-300">Sort by:</label>
          <select
            id="sort-by"
            className="bg-stone-700 text-white p-2 rounded-md border border-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={sortOption} // Bind the select value to the state
            onChange={handleSortChange} // Add the change handler
          >
            <option value="latest">Latest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
          </select>
        </div>
      </div>

      {/* Menu items grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[20px]">
        {/* Render sorted items */}
        {sortedItems.map((item, index) => (
          <div key={index} className="flex flex-col items-start p-[8px] h-full">
            {/* Menu item name */}
            <h3 className="text-xl font-bold mb-1 text-amber-500 whitespace-nowrap hover:text-[#A8603D] hover:cursor-pointer ">{item.name}</h3>
            {/* Menu item price */}
            <p className="text-lg text-[white] ">{item.price}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-[#4B2F32]">
      <img className="w-full block" src="./bean_border-1.png" alt="" />
    </div>


    
    </>
  );
}

export default FullMenu
