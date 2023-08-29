
import React, { FunctionComponent, ReactNode } from 'react';

interface ChipsProps {
  children?: ReactNode;
};

const Chips: FunctionComponent<ChipsProps> = ({ children }) => {

  return(
    <span
      className="bg-slate-800 px-2 pb-1 rounded-full text-slate-500 border border-slate-600"
    >
      {children}
    </span>
  );
};

export default Chips;
