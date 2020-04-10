import React from 'react';

import NavBar from '../../shared/NavBar';
import HeroSection from '../HeroSection';

const App = () => {
  return (
    <>
      <div className="bg-purple-900">
        <div className="h-screen sm:px-4 lg:mx-40 sm:py-3 lg:pt-6">
          <div className="">
            <NavBar />
          </div>
          <div className="xs:mx-8 lg:mx-0 ">
            <HeroSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
