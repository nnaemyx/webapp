"use client"

import { useRef, useState, useEffect, MouseEvent } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
      setFirstVisit(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const clickPosition = e.nativeEvent.offsetX;
      const totalWidth = e.currentTarget.offsetWidth;
      const clickPercentage = (clickPosition / totalWidth) * 100;
      const newTime = (clickPercentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = parseFloat(e.target.value);
      videoRef.current.volume = newVolume;
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div
      className="relative lg:w-[60%] px-4 lg:pt-[8rem] mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       <video
        ref={videoRef}
        className="lg:w-[1265px] lg:h-[617px]"
        src="/public/assests/Aboutvideo.mp4"
      >
        <source  type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {(firstVisit || showControls) && (
        <div className="absolute inset-0 flex mx-auto right-0 left-0 items-center justify-center">
          <button
            className="bg-[#FFFFFF]/10 border-t-[#FFFFFF]/[41%] border-l-[#FFFFFF]/[41%] text-white p-2 rounded-full"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="72"
                height="72"
              >
                <path
                  d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="72"
                height="72"
              >
                <path
                  d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
