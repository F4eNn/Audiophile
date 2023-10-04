import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ErrorMessage } from '@/components/ui/ErrorMessage';

describe('ErrorMessage component', () => {
	it('should render properly', () => {
		const { getByText } = render(<ErrorMessage msg='testMsg' />);
		expect(getByText('testMsg')).toBeInTheDocument();
	});
	it('should render class with isLabel class when isLabel is true', () => {
		const { getByText } = render(<ErrorMessage msg='testMsg' isLabel={true} />);
		const errorMsgElement = getByText('testMsg');
		expect(errorMsgElement).toHaveClass('-top-1.5');
	});
	it('should render without isLabel class when isLabel is false', () => {
		const { getByText } = render(<ErrorMessage msg='testMsg' isLabel={false} />);
		const errorMsgElement = getByText('testMsg');
		expect(errorMsgElement).not.toHaveClass('-top-1.5');
	});
});
