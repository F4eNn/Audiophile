type Images = {
	mobile: string;
	tablet: string;
	desktop: string;
};

export type ProductData = {
	id: number;
	slug: string;
	name: string;
	image: Images;
	category: string;
	categoryImage: Images;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: {
		quantity: number;
		item: string;
	}[];
	gallery: {
		first: Images;
		second: Images;
		third: Images;
	};
	others: {
		slug: string;
		name: string;
		image: Images;
	}[];
};
