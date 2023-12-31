import React from 'react';

import { ChildrenWithProps } from '@/types/general';

export const Wrapper = ({ children }: ChildrenWithProps) => {
	return <div className='relative mx-auto w-full max-w-[1440px]'>{children}</div>;
};
