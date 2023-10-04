import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ButtonPrimary } from '@/components/ui/ButtonPrimary';

describe('Primary Button', () => {
	it('Should render correctly', () => {
		render(<ButtonPrimary title='test' />);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it('trigger some function when clicking the button', async () => {
		const onClickMock = jest.fn();
		const user = userEvent.setup();
		render(<ButtonPrimary title='test' onClick={onClickMock} />);
		await user.click(screen.getByRole('button'));
		expect(onClickMock).toHaveBeenCalled();
	});
});
