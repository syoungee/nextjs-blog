export interface SiteConfig {
	siteName: string;
	description: string;
	currentlyAt: string;
	socialLinks: {
		twitter: string;
		youtube: string;
		github: string;
		linkedin: string;
		instagram: string;
	};
}

const siteConfig: SiteConfig = {
	siteName: 'Explorer',
	description: 'A minimal and lovely travel blog which shares experiences and citiest around the world!',
	currentlyAt: 'Seoul, Korea',
	socialLinks: {
		twitter: 'https://twitter.com/syoungee',
		youtube: 'https://youtube.com/@syoungee',
		github: 'https://github.com/syoungee',
		linkedin: 'https://linkedin.com/in/syoungee',
		instagram: 'https://instagram.com/syoungee',
	},
};

export default siteConfig;
