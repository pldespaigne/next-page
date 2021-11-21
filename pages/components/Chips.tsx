
import React, { FunctionComponent } from 'react';

interface ChipsProps {};

const Chips: FunctionComponent<ChipsProps> = ({ children }) => {

  return(
    <span
      className="bg-gradient-to-br from-gray-500 to-gray-600 px-2 pb-1 rounded-full text-gray-900 font-semibold"
    >
      {children}
    </span>
  );
};

export default Chips;
