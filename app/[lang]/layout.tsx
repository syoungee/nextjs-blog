import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/navigation/footer';
import { getDictionary } from '@/lib/getDictionary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: string } }) {
	return (
		<html lang={lang}>
			<body className={inter.className}>
				{/* @ts-expect-error Async Server Component */}
				<Navigation locale={lang} />
				<div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
				{/* @ts-expect-error Async Server Component */}
				<Footer locale={lang} />
			</body>
		</html>
	);
}
