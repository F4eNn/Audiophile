import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LinkButton } from '@/components/ui/LinkButton';

describe('LinkButton component', () => {
	it('Should render correctly with default props', () => {
		render(<LinkButton href='/' />);
		expect(screen.getByRole('link')).toBeInTheDocument();
	});
	it('Should render with custom props', () => {
		render(<LinkButton href='/' label='button' title='Custom Title' />);
		expect(screen.getByText('Custom Title')).toBeInTheDocument();
	});
});
