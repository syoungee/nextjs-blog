import Image from 'next/image';
import { directus } from '@/lib/directus';
import { createItem } from '@directus/sdk';

const CTACard = async () => {
	const formAction = async (formData: FormData) => {
		'use server';

		try {
			const email = formData.get('email');
			console.log(email);
			const data = await directus.request(createItem('subscribers', { email }));
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
			{/* Image */}
			<div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30"></div>
			<Image
				fill
				alt="CTA Card Image"
				className="object-center object-cover"
				src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
			/>
			{/* Content Container */}
			<div className="relative z-20">
				<div className="text-lg font-medium">#exploretheworld</div>
				<h3 className="mt-3 text-4xl font-semibold">Explore the world with me!</h3>
				<p className="max-w-lg mt-2 text-lg">
					Explore the world with me! I'm travelling around the 🌎. I've visited most of the great cities of 🇰🇷 and currently I'm travelling in 🇺🇸.
					Join me!
				</p>
				{/* Form */}
				<form className="flex items-center w-full gap-2 mt-6" action={formAction}>
					<input
						type="email"
						name="email"
						placeholder="Write your email."
						className="w-full bg-white px-3 py-2 text-base rounded-md outline-none md:w-auto placeholder:text-sm focus:ring-2 ring-neutral-600"
					></input>
					<button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200">Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default CTACard;
