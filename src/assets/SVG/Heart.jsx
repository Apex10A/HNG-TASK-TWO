import React from 'react';

const Heart = () => {
  return (
    <div className='rounded-lg border-[0.2px] border-[#DE8C99] px-1 py-1 cursor-pointer'>
      <svg width="20" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M13.12 20.8101C12.78 20.9301 12.22 20.9301 11.88 20.8101C8.98 19.8201 2.5 15.6901 2.5 8.6901C2.5 5.6001 4.99 3.1001 8.06 3.1001C9.88 3.1001 11.49 3.9801 12.5 5.3401C13.51 3.9801 15.13 3.1001 16.94 3.1001C20.01 3.1001 22.5 5.6001 22.5 8.6901C22.5 15.6901 16.02 19.8201 13.12 20.8101Z" 
          stroke="#DE8C99" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  )
}

export default Heart;
