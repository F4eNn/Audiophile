import { Main } from '@/components/Home/main/Main'
import { fetcher } from '@/helpers/api'

type ImageUrls = {
	mobile: string
	tablet: string
	desktop: string
}

type ProductsType = {
	products: {
		id: number
		slug: string
		name: string
		image: ImageUrls
		category: string
		categoryImage: ImageUrls
		new: boolean
		price: number
		description: string
		features: string
		includes: {
			quantity: number
			item: string
		}[]
		gallery: {
			first: ImageUrls
			second: ImageUrls
			third: ImageUrls
		}
		others: {
			slug: string
			name: string
			image: ImageUrls
		}[]
	}[]
}
type DataType = {
	attributes: ProductsType
}

// const getProducts = async () => {
// 	const { data } = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/products`, { cache: 'no-store' })
// 	const products = data.map((item: DataType) => item.attributes.products)
// 	return products
// }

export const Home = async () => {
	// const products = await getProducts()

	return (
		<main className='h-full w-full'>
			<Main />
		</main>
	)
}

export default Home
