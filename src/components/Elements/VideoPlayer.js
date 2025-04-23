const VideoPlayer = ({ videoUrl, title, isBanner }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default VideoPlayer;