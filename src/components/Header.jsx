import React, { useEffect } from 'react'
import youtubeLogo from '../assets/logo/youtube-logo.png'
import hamburgerMenu from '../assets/logo/hamburger-menu.png'
import notificationBell from '../assets/logo/notification-bell.png'
import userIcon from '../assets/logo/user-logo.png'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { addToSearchCache } from '../utils/searchSlice'

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchSuggestions, setSearchSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // { 'iphone': ["iphone", "iphone 14", "iphone 14 pro max"], 'ipho': [...] } -> cache view

  useEffect(() => {
    const timer = setTimeout(() =>  {
      if(searchCache[searchQuery]) {
        //if cache has the searchQuery, then directly set the suggestions from cache
        setSearchSuggestions(searchCache[searchQuery])
      } else {
        //otherwise make an API call to get the suggestions
        getSearchSuggestions();
      }
    }, 200)

    return () => clearTimeout(timer);
  }, [searchQuery])

  {/** 
    Algo for Debouncing
    -> user types a character in searchQuery
    -> state gets updated which triggers render cycle
    -> useEffect gets called
    -> setTimeout is set for 200ms, js will start counting 200ms
    -> if user types within 200ms, re-render happens and previous timeout is cleared
    -> useEffect is triggered again and new timeout is set
    -> if user does not type anything for 200ms, getSearchSuggestions function is called
    -> API call is made and suggestions are fetched
  */}

  const getSearchSuggestions = async() => {
    //fetch suggestions from API'
    console.log("API CALL - ", searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSearchSuggestions(data[1]);
    //dispatch an action to store the suggestions in redux store
    dispatch(addToSearchCache({
      [searchQuery]: data[1]
    }))
  }

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 shadow-md">
      <div className="flex col-span-2  items-center">
        <button className="cursor-pointer" onClick={() => toggleSidebar()}>
          <img src={hamburgerMenu} alt="hamburger-menu" className="h-8" />
        </button>
        <img src={youtubeLogo} alt="youtube-logo" className="h-6 mx-4 my-1" />
      </div>
      <div className="col-span-8">
        <div className='flex justify-center relative'>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 border border-gray-300 h-12 rounded-l-full font-light text-lg px-4 placeholder:text-gray-400 focus:outline-none"
            placeholder="Search"
          />
          <button className="border border-gray-300 h-12 p-3 text-black-200 text-xs text-center rounded-r-full bg-gray-100 hover:bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && searchQuery.length > 0 &&
        <div className='absolute bg-white w-3xl border border-gray-300 rounded-lg shadow-lg ml-96 z-10'>
          <ul className='text-start px-2'>
            {searchSuggestions.map((suggestion) => (
              <li className='hover:bg-gray-100 py-2 font-normal text-lg' key={suggestion}> 🔍 {suggestion}</li>
            ))}
          </ul>
        </div>}
      </div>
      <div className="flex col-span-2 justify-end">
        <img src={notificationBell} alt="notification-bell" className="h-8" />
        <img src={userIcon} alt="user-icon" className="h-8 mx-10" />
      </div>
    </div>
  );
};

export default Header
