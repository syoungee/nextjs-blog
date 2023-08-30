import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';
import PaddingContainer from '@/components/layout/padding-container';
import PostHero from '@/components/post/post-hero';
import SocialLink from '@/components/elements/social-link';

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
			<div className="flex gap-10 mt-10">
				<div className="relative">
					<div className="sticky flex flex-col gap-5 top-20">
						<SocialLink
							platform="facebook"
							isShareURL
							link={`https://www.facebook.com/sharer.php?u=${'http://localhost:3000' + `/post/${post.slug}`}`}
						></SocialLink>
						<SocialLink
							platform="twitter"
							isShareURL
							link={`https://www.facebook.com/sharer.php?u=${'http://localhost:3000' + `/post/${post.slug}`}`}
						></SocialLink>
						<SocialLink
							platform="linkedin"
							isShareURL
							link={`https://www.facebook.com/sharer.php?u=${'http://localhost:3000' + `/post/${post.slug}`}`}
						></SocialLink>
					</div>
				</div>

				<div className="h-[1200px] bg-slate-200 w-full">Post Body</div>
			</div>
		</PaddingContainer>
	);
};

export default Page;
