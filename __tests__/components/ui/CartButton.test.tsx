import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { CartButton } from '@/components/ui/CartButton';
import { CartCtxProvider } from '@/context/CartCtx';

describe('CartButton component', () => {
	it('should render correctly wiht items in the cart', () => {
		render(
			<CartCtxProvider>
				<CartButton toggleCart={() => {}} />
			</CartCtxProvider>,
		);
		expect(screen.getByRole('button')).toBeInTheDocument;
	});
});
