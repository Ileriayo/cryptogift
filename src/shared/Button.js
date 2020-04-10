import React from 'react';

const Button = ({ name, onSubmit }) => {
  return (
    <button
      type="button"
      onClick={onSubmit}
      className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-5 w-10/12 flex items-center rounded uppercase"
    >
      <span className="text-sm">{name}</span>
    </button>
  );
};

export default Button;
