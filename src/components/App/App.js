import React from 'react';

import NavBar from '../../shared/NavBar';
import HeroSection from '../HeroSection';
import HomeBody from '../HomeBody';

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
      <div className="h-screen sm:px-4 lg:mx-40 sm:py-3 lg:pt-6">
        {/* <div>
          <NavBar />
        </div> */}
        <div className="xxs:mx-8 sm:mx-32 md:mx-48 lg:mx-0">
          <HomeBody />
        </div>
      </div>
    </>
  );
};

export default App;
