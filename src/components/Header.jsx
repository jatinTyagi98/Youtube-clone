import React from 'react'
import youtubeLogo from '../assets/logo/youtube-logo.png'
import hamburgerMenu from '../assets/logo/hamburger-menu.png'
import notificationBell from '../assets/logo/notification-bell.png'
import userIcon from '../assets/logo/user-logo.png'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  }
  return <div className='grid grid-flow-col p-4 shadow-md'>
    <div className='flex col-span-2  items-center'>
      <button className='cursor-pointer' onClick={() => toggleSidebar()}><img src={hamburgerMenu} alt="hamburger-menu" className='h-8'/></button>
      <img src={youtubeLogo} alt="youtube-logo" className="h-6 mx-4 my-1"/>
    </div>
    <div className='col-span-8 flex justify-center'>
      <input type="text" className='w-1/2 border border-gray-300 h-12 rounded-l-full font-light text-lg px-4 placeholder:text-gray-400 focus:outline-none' placeholder="Search" />
      <button className='border border-gray-300 h-12 p-3 text-black-200 text-xs text-center rounded-r-full bg-gray-100 hover:bg-gray-200'>🔍</button>
    </div>
    <div className='flex col-span-2 justify-end'>
      <img src={notificationBell} alt="notification-bell" className='h-8' />
      <img src={userIcon} alt="user-icon" className='h-8 mx-10'/>
    </div>
  </div>
};

export default Header
