import PaddingContainer from '@/components/layout/padding-container';
import PostCard from '@/components/post/post-card';
import PostList from '@/components/post/post-list';
import CTACard from '@/components/elements/cta-card';
import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';

export default function Home() {
	const getAllPosts = async () => {
		try {
			const posts = await directus.request(
				readItems('post', {
					fields: ['*'],
				})
			);
			// console.log(posts);
			return posts;
		} catch (error) {
			console.log(error);
		}
	};

	const posts = getAllPosts();
	if (!posts) {
		console.log('no posts found');
		notFound();
	}

	return (
		<PaddingContainer>
			<main className="h-auto space-y-10">
				<PostCard post={DUMMY_POSTS[0]} />
				<PostList layout="vertical" posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)} />
				<CTACard />

				<PostCard reverse post={DUMMY_POSTS[3]} />
				<PostList posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)} />
			</main>
		</PaddingContainer>
	);
}
