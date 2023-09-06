import React from 'react'

import { CategoryItem } from '@/components/ui/CategoryItem'
import { thumbnails } from '@/constants/thumbnails'
import { Wrapper } from '@/components/ui/Wrapper'

export const Category = () => {
	return (
		<section className='flex  py-32'>
			<Wrapper>
				<div className='flex flex-wrap gap-20'>
					{thumbnails.map((src, index) => (
						<CategoryItem key={index} src={src} />
					))}
				</div>
			</Wrapper>
		</section>
	)
}
