
import React, { FunctionComponent } from 'react';

interface LinkCardProps {
  href: string;
};

export const LinkCard: FunctionComponent<LinkCardProps> = ({ href, children }) => {

  return(
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer px-4 py-2 border border-yellow-800 rounded-md text-yellow-500"
    >
      {children}
    </a>
  );
};
