import React from 'react';

interface BottomItem {
  name: string;
  price: number;
}

interface BottomSectionProps {
  name: string;
  description?: string;
  price?: number;
  items?: BottomItem[];
}

const BottomSection: React.FC<BottomSectionProps> = ({ name, description, price, items }) => {
  const isCombo = name.includes("COMBO");
  const isKidsMenu = name.includes("NIÑOS");
  const isDrinks = name.includes("BEBIDAS");

  return (
    <div className={`${isDrinks ? 'bg-cheesy-orange' : isCombo ? 'bg-yellow-500' : 'bg-cheesy-orange'} p-4 flex-1 min-h-[150px]`}>
      <h3 className={`text-2xl font-bold ${isDrinks || isKidsMenu ? 'text-white' : 'text-cheesy-red'} text-center mb-2`}>
        {isCombo ? (
          <>
            <span className="text-yellow-200">Cheesy</span>
            <br />
            <span className="text-4xl">COMBO</span>
          </>
        ) : (
          name
        )}
      </h3>
      
      {description && (
        <p className={`text-center ${isDrinks ? 'text-white' : 'text-cheesy-brown'} text-sm font-medium`}>
          {description}
          {price && ` $${price}`}
        </p>
      )}
      
      {items && (
        <div className="mt-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-white">{item.name}</span>
              <span className="text-white font-bold">${item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BottomSection;