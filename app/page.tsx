import PaddingContainer from '@/components/layout/padding-container';
import PostCard from '@/components/post/post-card';
import PostList from '@/components/post/post-list';
import { DUMMY_POSTS } from '@/DUMMY_DATA';

export default function Home() {
	return (
		<PaddingContainer>
			<main className="h-auto space-y-10">
				<PostCard post={DUMMY_POSTS[0]} />
				<PostList layout="vertical" posts={DUMMY_POSTS.filter((post, index) => index > 0 && index < 3)} />
			</main>
		</PaddingContainer>
	);
}
