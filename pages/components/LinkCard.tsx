
import { motion } from 'framer-motion';
import React, { FunctionComponent, ReactNode } from 'react';

interface LinkCardProps {
  href: string;
  children?: ReactNode;
};

const LinkCard: FunctionComponent<LinkCardProps> = ({ href, children }) => {

  return(
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="cursor-pointer px-4 py-2 border border-yellow-800 rounded-md text-yellow-500 flex gap-2 items-center justify-center"
    >
      {children}
    </motion.a>
  );
};

export default LinkCard;
