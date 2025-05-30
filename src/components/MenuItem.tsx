import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-cheesy-red">{name}</h3>
          <span className="text-lg font-bold text-cheesy-orange">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;