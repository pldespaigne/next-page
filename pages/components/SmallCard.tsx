
import React, { FunctionComponent, ReactNode } from 'react';

interface SmallCardProps {
  title: string;
  children?: ReactNode;
};

const SmallCard: FunctionComponent<SmallCardProps> = ({ title, children }) => {

  return(
    <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 filter drop-shadow-xl text-slate-400 text-center flex flex-col justify-between gap-6">
      <h2 className="text-yellow-300 text-glow font-semibold text-xl">{title}</h2>
      {children}
    </div>
  );
};

export default SmallCard;
