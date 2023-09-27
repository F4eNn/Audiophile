import React from 'react';

import { AccountProfile } from './AccountProfile';
import { Wrapper } from '../ui/Wrapper';
import { PurchaseHistory } from './PurchaseHistory';

export const Account = () => {
	return (
		<div className='mx-3 mt-[100px]'>
			<Wrapper>
				<AccountProfile />
				<div></div>
				<PurchaseHistory />
			</Wrapper>
		</div>
	);
};
