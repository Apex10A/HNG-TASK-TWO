import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#ffb6c1] md:px-14 px-5 py-6 md:py-10'>
      <div className='flex items-center justify-between pb-3'>
      <div>
        <h1 className='pb-1'>Skin Hub</h1>
        <p className='pb-4'>Your one stop shop for glowy Skin</p>
        <p className='text-sm'>Jay Avenue, Lagos   Nigeria</p>
      </div>

      <div className='list-none'>
        <li className=' pb-2'>Home</li>
        <li className=' pb-2'>Products</li>
        <li className=' pb-2'>Contacts</li>
      </div>
      </div>

      <div>
      <div className='border-[0.1px] w-full border-[#332427] my-5 opacity-[0.2]'></div>
      </div>

      <div>
        <div>
            <h1>Skin Hub <span>2024</span> </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
