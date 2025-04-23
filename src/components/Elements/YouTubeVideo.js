const YouTubeVideo = ({ videoId, title = "YouTube Video", isBanner = false }) => {
  return (
    <div className={`relative w-full ${isBanner ? 'h-[60vh]' : 'pb-[56.25%] h-0'} overflow-hidden max-w-full`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&fs=0`}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          pointerEvents: 'auto'
        }}
      />
      <style jsx global>{`
        .ytp-chrome-top-buttons,
        .watch-on-youtube-button-wrapper,
        .ytp-watermark,
        .ytp-youtube-button,
        .ytp-button {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
};

export default YouTubeVideo;