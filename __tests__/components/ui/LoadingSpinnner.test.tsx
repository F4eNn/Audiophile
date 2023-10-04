import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

it('Loading spinner', () => {
	const { container } = render(<LoadingSpinner />);
	expect(container).toBeInTheDocument();
});
