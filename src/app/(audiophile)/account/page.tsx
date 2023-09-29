import React from 'react';

import { Account } from '@/components/account/Account';
import { AccountProvider } from '@/context/AccountCtx';

const AccountPage = () => {
	return (
		<main className='flex-1 bg-rose'>
			<AccountProvider>
				<Account />
			</AccountProvider>
		</main>
	);
};

export default AccountPage;
