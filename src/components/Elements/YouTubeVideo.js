import { useEffect } from 'react';
import { configureYouTubeEmbed } from '../utils/youtubeHelper';
import '../../styles/youtube.css';

const YouTubeVideo = ({ videoId, title = "YouTube Video", isBanner }) => {
  useEffect(() => {
    configureYouTubeEmbed();
  }, []);

  return (
    <div className="video-wrapper relative w-full h-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&fs=0&iv_load_policy=3&disablekb=1`}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: 'none'
        }}
      />
      <style jsx>{`
        .video-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default YouTubeVideo;