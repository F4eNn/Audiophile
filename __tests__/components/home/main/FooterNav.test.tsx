import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FooterNav } from '@/components/Home/main/FooterNav'

describe('FooterNav component', () => {
	it('should render correctly', () => {
		const { container } = render(<FooterNav />)
		expect(container).toBeInTheDocument()
	})
	it('should render nav items', () => {
		const { getAllByRole } = render(<FooterNav />)
		expect(getAllByRole('listitem')).not.toHaveLength(0)
	})
})
