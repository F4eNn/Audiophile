import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AnimateSection } from '@/components/ui/AnimateSection';

it('should render properly', () => {
	const { container } = render(
		<AnimateSection>
			<div>test child</div>
		</AnimateSection>,
	);
	expect(container).toBeInTheDocument();
});
