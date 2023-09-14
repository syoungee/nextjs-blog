import { Post } from '@/types/collection';
import Link from 'next/link';
import Image from 'next/image';
import PostContent from './post-content';
import { getDictionary } from '@/lib/getDictionary';

interface PostProps {
	post: Post;
	layout?: 'vertical' | 'horizontal';
	reverse?: boolean;
	locale: string;
}

const PostCard = ({ post, layout = 'horizontal', reverse = false, locale }: PostProps) => {
	return (
		<Link
			className={`@container ${layout === 'horizontal' ? 'grid items-center grid-cols-1 md:grid-cols-2 gap-10' : 'space-y-10'}`}
			href={`/${locale}/post/${post.slug}`}
		>
			{/* Post Image */}
			<Image
				className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${reverse ? 'md:order-last' : ''}`}
				alt={post.title}
				src={post.image+`?key=optimised`}
				width={600}
				height={300}
			/>
			<PostContent locale={locale} post={post} />
		</Link>
	);
};

export default PostCard;
