interface Blog {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  isPublished: boolean;
  tags: string[];
  slug: string;
  hasVideo?: boolean;
  videoUrl?: string;
  videoThumbnail?: string;
  videoDuration?: string;
}