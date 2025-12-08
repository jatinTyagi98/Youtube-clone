import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../utils/constants';

const VideoContainer = () => {

  const [videos, setVideos] = React.useState([])

  useEffect(() => {
    fetchVideos()
  },[])

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    console.log(data);
    setVideos(data?.items);
  }


  return (
    <div className='flex flex-wrap'>
      {videos.map((video => (
        <VideoCard key={video?.id} videoInfo={video} />
      )))}
    </div>
  )
}

export default VideoContainer