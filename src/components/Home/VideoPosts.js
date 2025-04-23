import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import Image from "next/image";
import { BiPlay } from "react-icons/bi";

const VideoCard = ({ blog }) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
        <Image 
          src={blog.videoThumbnail || blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/80 transition-all duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BiPlay className="w-12 h-12 text-light" />
          </div>
        </div>
        {blog.videoDuration && (
          <span className="absolute bottom-2 right-2 bg-dark/80 text-light px-2 py-1 text-sm rounded">
            {blog.videoDuration}
          </span>
        )}
      </div>
      <h2 className="font-semibold text-lg mt-2">{blog.title}</h2>
    </div>
  );
};

const VideoPosts = ({ blogs }) => {
  const videoBlogs = blogs.filter(blog => blog.hasVideo);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
      <div className="flex justify-between items-center">
        <h2 className="w-fit font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Latest Videos
        </h2>
        <Link 
          href="/categories/videos"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2"
        >
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {videoBlogs.slice(0, 6).map((blog, index) => (
          <Link href={`/blogs/${blog.slug}`} key={index}>
            <VideoCard blog={blog} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideoPosts;