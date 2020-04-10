import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 lg:pt-6">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="font-medium">
          <span className="text-white uppercase font-medium">Crypto</span>
          <span className="text-yellow-500 uppercase">Gift</span>
        </div>
      </div>
      <nav className="flex">
        <svg
          onClick={() => setOpen(!isOpen)}
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path
            className="sm:hidden"
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
        <div
          className={
            !isOpen
              ? 'xs:hidden sm:flex'
              : 'flex flex-col bg-gray-900 absolute right-0 top-0 w-56 h-screen'
          }
        >
          <svg
            onClick={() => setOpen(!isOpen)}
            className="h-6 w-6 fill-current text-white sm:hidden"
            viewBox="0 0 24 24"
          >
            <path
              className={isOpen ? 'block' : 'hidden'}
              fillRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          </svg>
          <a
            href="/"
            className="block py-1 mx-4 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 uppercase"
          >
            Home
          </a>

          <a
            href="/"
            className="block py-1  mx-4 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 uppercase"
          >
            About
          </a>

          <a
            href="/"
            className="block py-1  mx-4 text-white font-semibold border-b-2 border-transparent hover:border-yellow-500 uppercase"
          >
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
