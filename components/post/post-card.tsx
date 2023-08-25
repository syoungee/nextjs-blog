import { Post } from '@/types/collection';
import Link from 'next/link';
import Image from 'next/image';

interface PostProps {
	post: Post;
}
const PostCard = ({ post }: PostProps) => {
	return (
		<Link className="grid grid-cols-2 gap-10" href={`/post/${post.slug}`}>
			{/* Post Image */}
			<Image alt={post.title} src={post.image} width={600} height={300} />
			<div>{post.title}</div>
		</Link>
	);
};

export default PostCard;
