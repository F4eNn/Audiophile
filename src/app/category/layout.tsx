import React from 'react';

import { ChildrenWithProps } from '@/types/general';

const layout = ({ children }: ChildrenWithProps) => {
	return <div className='flex flex-col'>{children}</div>;
};

export default layout;
