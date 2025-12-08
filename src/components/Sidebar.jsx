import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store?.app?.isMenuOpen);
  console.log(isMenuOpen);

  //Early return
  if(!isMenuOpen) return null;

  return (
    <div className='w-60 shadow-md p-4 h-full text-left'>
      <ul className='py-0.5'>
        <li className='text-sm font-normal'>Home</li>
        <li className='text-sm font-normal'>Shorts</li>
        <li className='text-sm font-normal'>Videos</li>
        <li className='text-sm font-normal'>Live</li>
      </ul>
      <div className='py-2'>
        <h1 className='text-base font-bold'>Subscriptions</h1>
        <ul className='py-0.5'>
          <li className='text-sm font-normal'>Music</li>
          <li className='text-sm font-normal'>Sports</li>
          <li className='text-sm font-normal'>Gaming</li>
          <li className='text-sm font-normal'>Workout</li>
        </ul>
      </div>

      <div>
        <h1 className='text-base font-bold'>Watch Later</h1>
        <ul className='py-0.5'>
          <li className='text-sm font-normal'>Music</li>
          <li className='text-sm font-normal'>Sports</li>
          <li className='text-sm font-normal'>Gaming</li>
          <li className='text-sm font-normal'>Workout</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar