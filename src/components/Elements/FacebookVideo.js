'use client';

const FacebookVideo = ({ videoUrl }) => {
  return (
    <div className="relative w-full aspect-video mb-4">
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false`}
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default FacebookVideo;