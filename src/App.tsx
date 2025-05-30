import React from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import SideSection from './components/SideSection';
import BottomSection from './components/BottomSection';
import menuData from './data/menuData.json';
import CheeseIcon from './components/CheeseIcon';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto shadow-xl">
        <Header 
          restaurantName={menuData.restaurantName} 
          socialMedia={menuData.socialMedia} 
        />
        
        <div className="flex flex-col lg:flex-row">
          {/* Main Menu Column */}
          <div className="w-full lg:w-2/3 bg-white p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.categories.map(category => (
                <MenuSection 
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  items={category.items}
                />
              ))}
            </div>
          </div>
          
          {/* Side Menu Column */}
          <div className="w-full lg:w-1/3 bg-cheesy-red p-6 mt-6 lg:mt-0" style={{ borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }}>
            <div className="flex justify-center mb-4">
              <div className="bg-cheesy-brown rounded-full w-40 h-40 flex items-center justify-center">
                <CheeseIcon className="w-32 h-32" />
              </div>
            </div>
            {menuData.sideSections.map((section, index) => (
              <SideSection 
                key={index}
                name={section.name}
                items={section.items}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom Sections */}
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {menuData.bottomSections.map((section, index) => (
            <BottomSection
              key={index}
              name={section.name}
              description={section.description}
              price={section.price}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;