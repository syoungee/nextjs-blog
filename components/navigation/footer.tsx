// const Footer = () => {
// 	return <div className="py-6 border-t mt-10">Footer</div>;
// };

// export default Footer;

import siteConfig from '@/config/site';
import { getDictionary } from '@/lib/getDictionary';
import Link from 'next/link';
import SocialLink from '../elements/social-link';
import PaddingContainer from '../layout/padding-container';

const Footer = async ({ locale }: { locale: string }) => {
	const dictionary = await getDictionary(locale);

	return (
		<div className="py-6 mt-10 border-t">
			<PaddingContainer>
				<div>
					<h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
					<p className="max-w-md mt-2 text-neutral-700">{siteConfig.description}</p>
				</div>
				<div className="flex flex-wrap justify-between gap-4 mt-6">
					<div>
						<div className="text-lg font-medium">#exploretheworld</div>
						<div className="flex items-center gap-3 mt-2 text-neutral-600">
							<SocialLink platform="twitter" link={siteConfig.socialLinks.twitter} />
							<SocialLink platform="instagram" link={siteConfig.socialLinks.instagram} />
							<SocialLink platform="github" link={siteConfig.socialLinks.github} />
							<SocialLink platform="youtube" link={siteConfig.socialLinks.youtube} />
							<SocialLink platform="linkedin" link={siteConfig.socialLinks.linkedin} />
						</div>
					</div>
					<div>
						<div className="text-sm text-neutral-400">Currently At</div>
						<div className="flex items-center gap-2 bg-white shadow-md rounded-md py-2 px-3">
							<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
							{siteConfig.currentlyAt}
						</div>
					</div>
				</div>
				{/* Bottom Section */}
				<div className="flex flex-wrap items-center justify-between gap-4 py-3 border-t mt-16">
					<div className="text-sm text-neutral-400">
						{dictionary.footer.rightsText}
						{/* All rights are reserved | Copyright {new Date().getFullYear()} */}
					</div>
					<div className="text-sm">
						{dictionary.footer.creatorText}
						{/* Made with love by{' '} */}
						<Link className="underline underline-offset-4" href="https://github.com/syoungee">
							@syoungee
						</Link>
					</div>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default Footer;
