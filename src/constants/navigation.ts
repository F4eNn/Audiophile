type navigationItem = {
	path: string;
	label: string;
};

export const navigationPaths = {
	home: {
		path: '/',
		label: 'go to home',
	},
	headphones: {
		path: '/category/headphones',
		label: 'go to headphones',
	},
	speakers: {
		path: '/category/speakers',
		label: 'go to speakers',
	},
	earphones: {
		path: '/category/earphones',
		label: 'go to earphones',
	},
	checkout: {
		path: '/checkout',
		label: 'go to checkout',
	},
	account: {
		path: '/account',
		label: 'go to your account',
	},
	register: {
		path: '/register',
		label: 'go to your account',
	},
	headphonesXX99: {
		path: '/category/headphones/xx99-mark-two-headphones',
		label: 'Check new XX99 mark 2 headphones ',
	},
	SpeakerZX9: {
		path: '/category/speakers/zx9-speaker',
		label: 'Check ZX9 speaker ',
	},
	SpeakerZX7: {
		path: '/category/speakers/zx7-speaker',
		label: 'Check ZX7 speaker ',
	},
	earphonesYX1: {
		path: '/category/earphones/yx1-earphones',
		label: 'Check YX1 earphones ',
	},
} as const satisfies Record<PropertyKey, navigationItem>;

export const defaultPaths = ['/', '/category/headphones', '/category/earphones', '/category/speakers'];

export const desktopNav = [
	[navigationPaths.home.path, 'home'],
	[navigationPaths.headphones.path, 'headphones'],
	[navigationPaths.speakers.path, 'speakers'],
	[navigationPaths.earphones.path, 'earphones'],
];
