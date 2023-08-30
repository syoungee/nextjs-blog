import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';
import PaddingContainer from '@/components/layout/padding-container';
import PostHero from '@/components/post/post-hero';
import SocialLink from '@/components/elements/social-link';
import PostBody from '@/components/post/post-body';
import CTACard from '@/components/elements/cta-card';

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
			<div>
				{/* Post Hero */}
				<PostHero post={post}></PostHero>
				{/* Post Body and Social Share */}
				<div className="flex flex-col gap-10 md:flex-row">
					<div className="relative">
						<div className="sticky flex md:flex-col gap-5 top-20">
							<SocialLink
								platform="facebook"
								isShareURL
								link={`https://www.facebook.com/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
							></SocialLink>
							<SocialLink
								platform="twitter"
								isShareURL
								link={`https://www.facebook.com/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
							></SocialLink>
							<SocialLink
								platform="linkedin"
								isShareURL
								link={`https://www.facebook.com/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
							></SocialLink>
						</div>
					</div>
					<PostBody body={post.body}></PostBody>
				</div>
				{/* CTA Card */}
				<CTACard />
			</div>
		</PaddingContainer>
	);
};

export default Page;
