import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Hero } from '@/components/Home/main/Hero'

it('should render correctly', () => {
	const { container } = render(<Hero />)
	expect(container).toBeInTheDocument()
})
