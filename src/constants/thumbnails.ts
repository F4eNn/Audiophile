import { navigationPaths } from './navigation';

export type ThumbnailProps = {
	src: string;
	title: string;
	path: string;
};

export const thumbnails = [
	{
		src: '/assets/image-category-thumbnail-headphones.png',
		title: 'headphones',
		path: navigationPaths.headphones.path,
	},
	{ src: '/assets/image-category-thumbnail-speakers.png', title: 'speakers', path: navigationPaths.speakers.path },
	{ src: '/assets/image-category-thumbnail-earphones.png', title: 'earphones', path: navigationPaths.earphones.path },
] as const;
