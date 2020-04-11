import React from 'react';

import background from '../assets/images/birthday.svg';

const Hero = () => {
  return (
    <div>
      <div className="grid grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 xxs:grid-flow-col lg:grid-flow-row">
        <section className="xxs:flex lg:block xxs:flex-col lg:flex-row items-center col-span-1 xxs:text-center lg:text-left">
          <h1 className="text-white font-semibold xxs:text-4xl sm:text-5xl xxs:mt-0 lg:mt-24 mb-4">
            <span className="text-white uppercase">Crypto</span>
            <span className="text-yellow-500 uppercase">Gift</span>
          </h1>

          <h3 className="text-white xxs:text-base sm:text-xl xxs:max-w-sm lg:max-w-lg font-medium mb-10">
            Gift crypto, recharge cards, vouchers, giftcards to individuals
            based on occasion using BTC, ETH and LTC
          </h3>

          <form className="flex flex-col justify-center lg:max-w-md bg-purple-900">
            <label
              htmlFor="email"
              className="text-white xxs:text-base sm:text-xl flex flex-col font-medium"
            >
              Gift that special person now!
              <input
                type="text"
                id="email"
                required
                placeholder="example@email.com"
                className="rounded text-white p-5 mt-3 text-purple-900 focus:outline-none"
              />
            </label>

            <div className="flex flex-row xxs:justify-center xxs:content-center lg:justify-between mt-4">
              <button
                type="submit"
                className="border-transparent border bg-green-600 hover:bg-green-700 text-white font-medium py-3 xxs:px-16 sm:px-24 flex items-center rounded uppercase focus:outline-none focus:shadow-outline"
              >
                <span className="xxs:text-xl sm:text-2xl">gift</span>
              </button>

              <span className="m-2" />

              <button
                type="button"
                className="border-solid border hover:text-gray-400 text-white text-sm font-medium py-3 xxs:px-6 sm:px-12 lg:px-10 flex items-center rounded uppercase focus:outline-none focus:shadow-outline"
              >
                <span className="xxs:text-xl sm:text-2xl">request</span>
              </button>
            </div>
          </form>
        </section>

        <section className="">
          <img alt="" src={background} className="xxs:mt-0 lg:mt-24" />
        </section>
      </div>

      <div className="xs:hidden md:flex justify-center mt-16 text-white">
        <button
          type="button"
          className="border border-white rounded-full px-2 py-3 focus:outline-none"
        >
          V
        </button>
      </div>
    </div>
  );
};

export default Hero;
