import React from 'react';

interface MenuItemOption {
  size: string;
  price: number;
}

interface MenuItem {
  name: string;
  options?: MenuItemOption[];
  price?: number;
  description: string;
  special?: boolean;
  additional?: string;
}

interface MenuSectionProps {
  id: number;
  name: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, name, items }) => {
  return (
    <div className="relative border-b border-cheesy-brown pb-4 h-full">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-cheesy-brown rounded-full w-14 h-14 flex items-center justify-center text-white text-3xl font-bold mr-4">
          {id}
        </div>
        <div className="flex-grow">
          <h3 className="text-3xl font-bold text-cheesy-orange">{name}</h3>
          
          <div className="mt-2 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="border-b border-cheesy-brown-light pb-2 last:border-b-0">
                <div className="flex items-start">
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-black flex items-center">
                      - {item.name} {item.special && <span className="text-yellow-500 ml-1">★</span>}
                      {item.price && <span className="ml-1">({item.price})</span>}
                    </h4>
                    
                    {item.options && (
                      <div className="ml-4 mt-1">
                        {item.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex">
                            <span className="text-cheesy-orange font-bold">{option.size}</span>
                            <span className="ml-1 text-black">({option.price})</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {item.description && (
                      <p className="text-sm ml-4 mt-1">{item.description}</p>
                    )}
                    
                    {item.additional && (
                      <p className="text-sm ml-4 mt-1">
                        <span className="text-cheesy-orange font-bold">Adicional: </span>
                        {item.additional}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;