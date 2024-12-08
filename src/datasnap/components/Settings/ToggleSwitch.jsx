import { Check, X } from 'lucide-react';
import React, { useState } from 'react';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-12 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-blue-500' : 'bg-gray-400'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 flex justify-center items-center ${
          isOn ? 'translate-x-4' : 'translate-x-0'
        }`}
      >
        {isOn ? (<Check className='w-4 h-4 text-blue-600'/>) : (<X className='w-4 h-4 text-red-600'/>)}
        
      </div>
    </div>
  );
};

export default ToggleSwitch;