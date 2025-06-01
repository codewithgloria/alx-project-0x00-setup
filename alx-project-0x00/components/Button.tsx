import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, shape = 'rounded-md' }) => {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 ${shape}`}>
      {title}
    </button>
  );
};

export default Button;