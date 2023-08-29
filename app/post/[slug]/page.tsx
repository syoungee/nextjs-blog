import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';
import PaddingContainer from '@/components/layout/padding-container';
import PostHero from '@/components/post/post-hero';

export const generateStaticParams = async () => {
	return DUMMY_POSTS.map((post) => {
		return {
			slug: post.slug,
		};
	});
};

const Page = ({ params }: { params: { slug: string } }) => {
	const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<PaddingContainer>
			<PostHero post={post}></PostHero>
		</PaddingContainer>
	);
};

export default Page;
