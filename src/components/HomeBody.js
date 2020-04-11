import React from 'react';

// import gift from '../assets/images/gift.svg';
import steps from '../assets/images/steps.svg';

const HomeBody = () => {
  return (
    <div>
      {/* ****************** Start Heading Section ************************ */}
      <section className="flex flex-col items-center text-center">

        <h1 className="uppercase text-2xl text-indigo-900 font-bold mb-1">Send your first gift?</h1>
        <p className="text-md text-gray-700 font-bold">We literally make crypto gifting fun and exciting!</p>

      </section>
      {/* ****************** End Heading Section ************************ */}



      {/* ****************** Start Card Section ************************ */}
      <section className="flex xxs:flex-col lg:flex-row xxs:items-center lg:items-stretch lg:justify-evenly mb-12 mt-10">

        <div className="w-full lg:w-48 p-4 xxs:m-4 shadow-lgx rounded-lg flex flex-col">
          <img alt="steps" src={steps} className="h-16 mb-3" />
          <p className="text-sm text-gray-700 text-center font-bold">Provide recipient&#39;s email address</p>
        </div>

        <div className="w-full lg:w-48 p-4 xxs:m-4 shadow-lgx rounded-lg flex flex-col">
          <img alt="steps" src={steps} className="h-16 mb-3" />
          <p className="text-sm text-gray-700 text-center font-bold">Fund the gift</p>
        </div>

        <div className="w-full lg:w-48 p-4 xxs:m-4 shadow-lgx rounded-lg flex flex-col">
          <img alt="steps" src={steps} className="h-16 mb-3" />
          <p className="text-sm text-gray-700 text-center font-bold">Tada! We send the gift</p>
        </div>

      </section>
      {/* ****************** End Card Section ************************ */}



      {/* ****************** Start Steps Section ********************* */}
      <section className="flex xxs:flex-col lg:flex-row xxs:items-center justify-center">

        <div className=" w-56 mr-12 mt-5">
          <img alt="steps" src={steps} />
        </div>

        <div className="">

          <h1 className="xxs:text-center lg:text-left uppercase text-2xl text-indigo-900 font-bold">Simple steps</h1>

          <p className="text-base text-gray-700 font-bold my-5">
            Follow these simple steps in a few minutes and get started!
          </p>

          <ol className="text-sm text-gray-700 font-bold list-decimal list-inside">
            
            <li>Type the recipient&#39;s email address</li>
            <li>
              Set a
              <span className="text-indigo-900"> budget</span>
            </li>
            <li>
              Choose a
              <span className="text-indigo-900"> theme</span>
            </li>
            <li>
              Type a
              <span className="text-indigo-900"> personalized </span>
              note
            </li>
            <li>Fund the gift with cryptocurrency</li>
            
          </ol>
          
        </div>
        
      </section>
      {/* ****************** End Steps Section ************************ */}


      
    </div>
  );
};

export default HomeBody;
