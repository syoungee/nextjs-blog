import { DUMMY_CATEGORIES, DUMMY_POSTS } from '@/DUMMY_DATA';
import PaddingContainer from '@/components/layout/padding-container';
import PostList from '@/components/post/post-list';
import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
	try {
		const categories = await directus.request(
			readItems('category', {
				fields: ['slug'],
			})
		);
		const params = categories?.map((category) => {
			return { category: category.slug as string };
		});
		return params || [];
	} catch (err) {
		console.log(err);
		throw new Error('Error fetching categories');
	}
};

const Page = async ({
	params,
}: {
	params: {
		category: string;
		lang: string;
	};
}) => {
	const locale = params.lang;

	const getAllPosts = async () => {
		try {
			const posts = await directus.request(
				readItems('post', {
					fields: ['*'],
				})
			);
			posts.map((post) => {
				post.image = process.env.NEXT_PUBLIC_ASSETS_URL + post.image;
			});
			return posts;
		} catch (error) {
			console.log(error);
		}
	};

	const category = DUMMY_CATEGORIES.find((category) => category.slug === params.category);
	const all_posts = await getAllPosts();
	let posts = all_posts?.filter((post) => {
		return post.slug?.toLocaleLowerCase() === params.category;
	});

	if (params.category === 'experiences') {
		posts = DUMMY_POSTS.filter((post) => post.category.title.toLocaleLowerCase() === params.category);
	}

	return (
		<PaddingContainer>
			<div className="mb-10">
				<h1 className="text-4xl font-semibold">{category?.title}</h1>
				<p className="text-lg text-neutral-600">{category?.description}</p>
			</div>
			<PostList locale={locale} posts={posts} />
		</PaddingContainer>
	);
};

export default Page;
