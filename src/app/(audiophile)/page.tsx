import { CategoryNav } from '@/components/Home/main/CategoryNav';
import { Earphones } from '@/components/Home/main/Earphones';
import { Hero } from '@/components/Home/main/Hero';
import { SpeakerZX7 } from '@/components/Home/main/SpeakerZX7';
import { SpeakerZX9 } from '@/components/Home/main/SpeakerZX9';

const Home = () => {
	return (
		<main className='h-full w-full  '>
			<Hero />
			<section id='category' className='py-32 lg:py-52'>
				<CategoryNav />
			</section>
			<SpeakerZX9 />
			<SpeakerZX7 />
			<Earphones />
		</main>
	);
};
export default Home;
