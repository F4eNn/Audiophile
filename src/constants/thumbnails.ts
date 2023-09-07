export type ThumbnailProps = {
	src: string
	title: string
}

export const thumbnails = [
	{ src: '/assets/image-category-thumbnail-headphones.png', title: 'headphones' },
	{ src: '/assets/image-category-thumbnail-speakers.png', title: 'speakers' },
	{ src: '/assets/image-category-thumbnail-earphones.png', title: 'earphones' },
] as const
