import React from 'react';

import { CategoryItem } from '@/components/ui/CategoryItem';
import { thumbnails } from '@/constants/thumbnails';
import { Wrapper } from '@/components/ui/Wrapper';
import { AnimateSection } from '@/components/ui/AnimateSection';

export const CategoryNav = () => {
	return (
		<section id='category' className='flex'>
			<Wrapper>
				<AnimateSection>
					<ul className='flex flex-wrap gap-20 gap-y-28'>
						{thumbnails.map((items, index) => (
							<CategoryItem key={index} {...items} />
						))}
					</ul>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
