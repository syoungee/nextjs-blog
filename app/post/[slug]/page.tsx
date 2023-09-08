import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { notFound } from 'next/navigation';
import PaddingContainer from '@/components/layout/padding-container';
import PostHero from '@/components/post/post-hero';
import SocialLink from '@/components/elements/social-link';
import PostBody from '@/components/post/post-body';
import CTACard from '@/components/elements/cta-card';
import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';

export const generateStaticParams = async () => {
	// return DUMMY_POSTS.map((post) => {
	// 	return {
	// 		slug: post.slug,
	// 	};
	// });

	try {
		const posts = await directus.request(
			readItems('post', {
				fields: ['slug'],
			})
		);
		const params = posts?.map((post) => {
			return { slug: post.slug as string };
		});
		// console.log('params?', params);
		return params || [];
	} catch (err) {
		console.log(err);
		throw new Error('Error fetching posts');
	}
};

const Page = async ({ params }: { params: { slug: string } }) => {
	// const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

	const getPostData = async () => {
		const post = await directus.request(
			readItems('post', {
				fields: ['*'],
			})
		);
		return post;
	};

	const posts = await getPostData();
	// console.log(posts[0].slug);
	// console.log('page params?', params);
	const post = posts.filter((post) => {
		// console.log('post index?', post.slug, params.slug);
		return post.slug == params.slug;
	});
	// console.log(post[0]);

	if (!posts) {
		notFound();
	}

	return (
		<PaddingContainer>
			<div className="space-y-10">
				{/* Post Hero */}
				<PostHero post={post?.[0]}></PostHero>
				{/* Post Body and Social Share */}
				<div className="flex flex-col gap-10 md:flex-row">
					<div className="relative">
						<div className="sticky flex items-center md:flex-col gap-5 top-20">
							<div className="font-medium md:hidden">Share this content:</div>
							<SocialLink
								platform="facebook"
								isShareURL
								link={`https://www.facebook.com/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
							></SocialLink>
							<SocialLink
								platform="twitter"
								isShareURL
								link={`https://www.facebook.com/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
							></SocialLink>
							<SocialLink
								platform="linkedin"
								isShareURL
								link={`https://www.facebook.com/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
							></SocialLink>
						</div>
					</div>
					<PostBody body={posts[0].body}></PostBody>
				</div>
				{/* CTA Card */}
				<CTACard />
			</div>
		</PaddingContainer>
	);
};

export default Page;
