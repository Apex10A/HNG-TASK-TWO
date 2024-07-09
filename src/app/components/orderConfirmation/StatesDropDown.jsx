"use client"
import React, { useState } from 'react';
import ArrowDown from '@/assets/SVG/ArrowDown';
// import { FaChevronDown } from 'react-icons/fa'; // Ensure you have react-icons installed

const NigerianStatesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  const states = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 
    'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 
    'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setIsOpen(false);
  };

  return (
    <div className='w-full relative'>
      <div className='relative flex items-center'>
        <input 
          type="text" 
          placeholder='Select State' 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)}
          className='border-[0.2px] border-[#d0cdcd] w-full rounded-xl px-3 py-4 text-sm placeholder:text-[#4c3f42] pr-10'
        />
        <ArrowDown
          className='absolute left-[-100px] cursor-pointer' 
          onClick={toggleDropdown}
        />
      </div>
      {isOpen && (
        <ul className='absolute z-10 bg-white border-[0.2px] border-[#d0cdcd] rounded-xl mt-1 w-full max-h-60 overflow-y-auto'>
          {states.map((state) => (
            <li 
              key={state} 
              className='px-3 py-2 cursor-pointer hover:bg-gray-200' 
              onClick={() => handleStateSelect(state)}
            >
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NigerianStatesDropdown;
