const YouTubeVideo = ({ videoId, title = "YouTube Video" }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden max-w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
