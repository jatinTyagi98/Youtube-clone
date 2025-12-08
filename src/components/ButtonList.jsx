import React,{ useRef, useEffect } from 'react';
import Button from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ButtonList = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = React.useState(false);
  const [isAtEnd, setIsAtEnd] = React.useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const errorMargin = 0.5;
    if(!scrollContainer) return;

    const checKScrollPosition = () => {
      //condition to disappear left button
      if(scrollContainer.scrollLeft <= errorMargin) {
        setIsAtEnd(true);
        setIsAtStart(false);
      }
      //condition to disappear right button
      else if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - errorMargin) {
        setIsAtEnd(false);
        setIsAtStart(true);
      }
      //condition to show both buttons
      else {
        setIsAtStart(true);
        setIsAtEnd(true);
      }
      

    }

    scrollContainer.addEventListener('scroll', checKScrollPosition);

    return () => {
      scrollContainer.removeEventListener('scroll', checKScrollPosition);
    }
  }, [])

  const scrollByLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    })
  }

  const scrollByRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    })
  }

  const btnList = ["All", "Music", "Sports", "Gaming", "News", "Movies", "Fashion", "Live", "Learning", "Spotlight", "Travel", "Comedy", "Podcast", "Documentary", "Autos & Vehicles", "Food", "Animals", "Science & Technology", "Trailers", "All", "Music", "Sports", "Gaming", "News", "Movies", "Fashion", "Live", "Learning", "Spotlight", "Travel", "Comedy", "Podcast", "Learning", "Spotlight", "Travel", "Comedy", "Podcast", "Documentary", "Autos & Vehicles", "Food", "Animals", "Science & Technology", "Trailers"];
  return (
    <div className='relative w-full flex items-center justify-center'>
      {isAtStart && <button
        onClick={scrollByLeft}
        className='absolute z-10 left-0 p-1 rounded-full bg-white hover:bg-gray-200 cursor-pointer'>
          <ChevronLeft />
      </button>}

      <div ref={scrollRef} className='flex gap-2 overflow-x-scroll no-scrollbar px-10 scroll-smooth cursor-pointer'>
        {btnList.map((button) => (
            <Button key={button} name={button}/>
        ))}
      </div>

      {isAtEnd && <button onClick={scrollByRight} className='absolute right-0 p-1 rounded-full bg-white hover:bg-gray-200 cursor-pointer'><ChevronRight /></button>}
    </div>
  )
}

export default ButtonList