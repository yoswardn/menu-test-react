import React from 'react';


interface SideItem {
  name: string;
  price: number | null;
}

interface SideSectionProps {
  name: string;
  items: SideItem[];
}

const SideSection: React.FC<SideSectionProps> = ({ name, items }) => {
  return (
    <div className="mb-6 p-4 bg-cheesy-red rounded-full shadow-lg">
      
      <h3 className="text-3xl font-bold text-cheesy-orange mb-4">{name}</h3>
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <div className="flex items-start">
              <span className="text-white font-bold mr-2">-</span>
              <span className="text-white font-bold">{item.name}</span>
            </div>
            {item.price !== null && (
              <span className="text-yellow-500 font-bold ml-2">${item.price}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideSection;