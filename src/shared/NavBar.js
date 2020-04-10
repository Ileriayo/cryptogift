import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="xxs:text-2xl lg:text-xl font-medium">
          <span className="text-white uppercase">Crypto</span>
          <span className="text-yellow-500 uppercase">Gift</span>
        </div>
        <div className="sm:hidden md:hidden lg:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className={isOpen ? 'hidden' : 'block'}
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={
          !isOpen
            ? 'hidden'
            : 'block bg-gray-900 absolute right-0 top-0 w-56 h-screen lg:flex px-2 pt-2 pb-4 sm:p-0'
        }
      >
        <svg
          onClick={() => setOpen(!isOpen)}
          className="text-white fill-current h-6 w-6 mx-8 mt-4 md:hidden"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        </svg>
        <div className="p-10">
          <a
            href="#"
            className="block py-1 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 uppercase"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-1 block py-1 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 sm:mt-0 sm:ml-2 lg:mx-20 uppercase"
          >
            About
          </a>
          <a
            href="#"
            className="mt-1 block py-1 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 sm:mt-0 sm:ml-2 uppercase"
          >
            FAQ
          </a>
        </div>
      </nav>

      <nav className="xxs:hidden lg:flex px-2 pt-2 pb-4 sm:p-0">
        <a
          href="#"
          className="block py-1 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 uppercase"
        >
          Home
        </a>
        <a
          href="#"
          className="mt-1 block py-1 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 sm:mt-0 sm:ml-2 lg:mx-20 uppercase"
        >
          About
        </a>
        <a
          href="#"
          className="mt-1 block py-1 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 sm:mt-0 sm:ml-2 uppercase"
        >
          FAQ
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
