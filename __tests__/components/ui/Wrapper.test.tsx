import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Wrapper } from '@/components/ui/Wrapper';

describe('Wrapper component', () => {
	it('Should render children correctly', () => {
		const { getByText } = render(
			<Wrapper>
				<div>Child 1</div>
				<div>Child 2</div>
			</Wrapper>,
		);
		const child1 = getByText('Child 1');
		const child2 = getByText('Child 2');

		expect(child1).toBeInTheDocument();
		expect(child2).toBeInTheDocument();
	});
});
