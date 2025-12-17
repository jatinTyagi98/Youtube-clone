import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  console.log({ videoId });
  return (
    <div className="p-5 m-5">
      <iframe
        width="1840"
        height="1035"
        src={"https://www.youtube.com/embed/" + videoId}
        title="How to Build React Apps Like a Senior Developer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
