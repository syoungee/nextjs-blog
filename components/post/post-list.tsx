import { Post } from '@/types/collection';
import PostCard from './post-card';

interface PostListProps {
  posts: Post[];
  layout?: 'vertical' | 'horizontal';
  locale: string;
}

const PostList = ({ posts, layout = 'vertical', locale }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr">
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} locale={locale}></PostCard>
      ))}
    </div>
  );
};

export default PostList;
