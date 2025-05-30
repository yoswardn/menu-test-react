import React from 'react';
import { Facebook, Instagram } from 'lucide-react';


interface HeaderProps {
  restaurantName: string;
  socialMedia: {
    facebook: string;
    instagram: string;
  };
}

const Header: React.FC<HeaderProps> = ({ restaurantName, socialMedia }) => {
  return (
    <div className="relative">

      <div className="w-full h-24 bg-amber-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end">
          <div className="w-full flex justify-between">
            {Array(15).fill(0).map((_, index) => (
              <div 
                key={index}
                className="bg-amber-400 w-8 h-16 rounded-b-full transform animate-drip"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  marginLeft: index === 0 ? '0' : '-4px'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" p-4 flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-6xl font-bold text-cheesy-brown">Menú</h1>
          <h2 className="text-6xl font-bold text-cheesy-brown leading-tight">LOS CHEESY</h2>
          
          <div className="flex items-center mt-2 text-cheesy-brown">
            <Facebook size={20} className="mr-1 rounded-full bg-cheesy-brown text-white w-6 h-6 p-3" />
            <span className="mr-4">{socialMedia.facebook}</span>
            <Instagram size={20} className="mr-1 rounded-full bg-cheesy-brown text-white w-6 h-6 p-3" />
            <span>@{socialMedia.instagram}</span>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Header;