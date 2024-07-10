"use client"
import React, { useState } from 'react';

const LoveIcon = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={handleClick} className={`love-icon ${liked ? 'liked' : ''}`}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M13.12 21.3101C12.78 21.4301 12.22 21.4301 11.88 21.3101C8.98 20.3201 2.5 16.1901 2.5 9.1901C2.5 6.1001 4.99 3.6001 8.06 3.6001C9.88 3.6001 11.49 4.4801 12.5 5.8401C13.51 4.4801 15.13 3.6001 16.94 3.6001C20.01 3.6001 22.5 6.1001 22.5 9.1901C22.5 16.1901 16.02 20.3201 13.12 21.3101Z" 
          stroke="#292D32" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill={liked ? 'red' : 'none'}
        />
      </svg>
    </div>
  )
}

export default LoveIcon;
