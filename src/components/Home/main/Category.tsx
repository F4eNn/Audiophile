import React from 'react'

import { CategoryItem } from '@/components/ui/CategoryItem'
import { thumbnails } from '@/constants/thumbnails'
import { Wrapper } from '@/components/ui/Wrapper'

export const Category = () => {
	return (
		<section id='category' className='flex  py-32 lg:py-52'>
			<Wrapper>
				<ul className='flex flex-wrap gap-20 gap-y-28'>
					{thumbnails.map((items, index) => (
						<CategoryItem key={index} {...items} />
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
