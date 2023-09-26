import React from 'react';

import { AccountProfile } from './AccountProfile';
import { Wrapper } from '../ui/Wrapper';

export const Account = () => {
	return (
		<div className='mx-3 mt-[100px]'>
			<Wrapper>
				<AccountProfile />
				<div></div>
			</Wrapper>
		</div>
	);
};
