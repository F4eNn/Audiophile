import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HeroSectionWrapper } from '@/components/ui/HeroSectionWrapper'

describe('HeroSectionWrapper component', () => {
	it('should render correctly', () => {
		const { container } = render(
			<HeroSectionWrapper>
				<p>Test Child 1</p>
			</HeroSectionWrapper>,
		)
		expect(container).toBeInTheDocument()
	})
	it('should render children without errors', () => {
		const { getByText } = render(
			<HeroSectionWrapper>
				<p>Test Child 1</p>
			</HeroSectionWrapper>,
		)
		expect(getByText(/Test Child 1/i)).toBeInTheDocument()
	})
})
