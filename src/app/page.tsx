import { Category } from '@/components/Home/main/Category'
import { Earphones } from '@/components/Home/main/Earphones'
import { Hero } from '@/components/Home/main/Hero'
import { SpeakerZX7 } from '@/components/Home/main/SpeakerZX7'
import { SpeakerZX9 } from '@/components/Home/main/SpeakerZX9'
// import { fetcher } from '@/helpers/api'

// type ImageUrls = {
// 	mobile: string
// 	tablet: string
// 	desktop: string
// }

// type ProductsType = {
// 	products: {
// 		id: number
// 		slug: string
// 		name: string
// 		image: ImageUrls
// 		category: string
// 		categoryImage: ImageUrls
// 		new: boolean
// 		price: number
// 		description: string
// 		features: string
// 		includes: {
// 			quantity: number
// 			item: string
// 		}[]
// 		gallery: {
// 			first: ImageUrls
// 			second: ImageUrls
// 			third: ImageUrls
// 		}
// 		others: {
// 			slug: string
// 			name: string
// 			image: ImageUrls
// 		}[]
// 	}[]
// }



 const Home = () => {
	return (
		<main className='h-full w-full '>
			<Hero />
			<Category />
			<SpeakerZX9 />
			<SpeakerZX7 />
			<Earphones />
		</main>
	)
}
export default Home
