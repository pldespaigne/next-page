
import React, { FunctionComponent, ReactNode } from 'react';


interface CardProps {
  company: string;
  role: string;
  duration: ReactNode;
  body: ReactNode;
  links: ReactNode[];
  chips: ReactNode[];
};

const Card: FunctionComponent<CardProps> = ({ company, role, duration, body, links, chips }) => {

  return(
    <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 filter drop-shadow-xl text-slate-400 flex flex-col justify-between gap-6">
      <div className="flex flex-row flex-wrap justify-between">
        <h3 className="font-semibold text-lg">
          <span className="text-yellow-300 text-glow">{company}</span>
          <span className="text-slate-500"> - </span><span className="text-slate-300">{role}</span>
        </h3>
        <p className="italic">{duration}</p>
      </div>

      <div>{body}</div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {links?.map(link => link)}
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-2">
        {chips?.map(chip => chip)}
      </div>
    </div>
  );
};

export default Card;
