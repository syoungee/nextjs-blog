import Link from 'next/link';
import PaddingContainer from '../layout/padding-container';
import { getDictionary } from '@/lib/getDictionary';

const Navigation = async ({ locale }: { locale: string }) => {
	const dictionary = await getDictionary(locale);

	return (
		<div className="sticky top-0 left-0 right-0 z-[999] bg-white border-b bg-opacity-70 backdrop-blur-md">
			<PaddingContainer>
				<div className="flex items-center justify-between py-5">
					<Link className="text-lg font-bold" href="/en">
						Explorer
					</Link>
					{/* Category Links */}
					<nav>
						<ul className="flex items-center gap-4 text-neutral-600">
							<li>
								<Link href={`${locale}/cities`}>{dictionary.navigation.links.cities}</Link>
							</li>
							<li>
								<Link href={`/experiences`}>{dictionary.navigation.links.experience}</Link>
							</li>
						</ul>
					</nav>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default Navigation;
