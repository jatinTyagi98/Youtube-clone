import React from 'react'

const VideoCard = ({ videoInfo }) => {
  return (
    <div className='flex flex-col m-10 w-80 hover:shadow-lg hover:cursor-pointer hover:bg-amber-100 rounded-xl'>
        <img alt="video thumbnail"  className="w-full h-auto rounded-lg" src={videoInfo?.snippet?.thumbnails?.medium?.url} />
        <ul className='flex flex-col p-2 justify-start bg-transparent'>
            <li className='font-bold text-base text-left'>{videoInfo?.snippet?.title}</li>
            <div className='flex align-baseline'>
                <li className='font-light text-sm text-left my-1'>{videoInfo?.snippet?.channelTitle}</li>
                <li className='font-extrabold text-sm mx-1'> . </li>
                <li className='font-light text-sm my-1'>{videoInfo?.statistics?.viewCount} views</li>
            </div>
        </ul>
    </div>
  )
}

export default VideoCard