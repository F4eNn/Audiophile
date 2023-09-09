import React from 'react';

import { ChildrenWithProps } from '@/types/general';
import { CategoryNav } from '@/components/Home/main/CategoryNav';

const layout = ({ children }: ChildrenWithProps) => {
	return (
		<div>
			{children}
			<div className='mt-44 sm:mt-52'>
				<CategoryNav />
			</div>
		</div>
	);
};

export default layout;
