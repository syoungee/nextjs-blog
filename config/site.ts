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
		twitter: 'https://github.com/syoungee',
		youtube: 'https://github.com/syoungee',
		github: 'https://github.com/syoungee',
		linkedin: 'https://www.linkedin.com/in/sunyoung-hwang-422004184/',
		instagram: 'https://github.com/syoungee',
	},
};

export default siteConfig;
