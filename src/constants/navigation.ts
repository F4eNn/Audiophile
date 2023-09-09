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
} as const satisfies Record<PropertyKey, navigationItem>;

export const desktopNav = [
	[navigationPaths.home.path, 'home'],
	[navigationPaths.headphones.path, 'headphones'],
	[navigationPaths.speakers.path, 'speakers'],
	[navigationPaths.earphones.path, 'earphones'],
];
