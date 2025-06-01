import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-gray-200 px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;