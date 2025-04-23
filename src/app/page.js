import { blogs } from "@/.velite/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturedPosts";
import VideoPosts from "@/src/components/Home/VideoPosts";
import RecentPosts from "@/src/components/Home/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      <FeaturedPosts blogs={blogs} />
      <VideoPosts blogs={blogs} />
      <RecentPosts blogs={blogs} />
    </main>
  );
}