import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Description } from '@/components/Home/main/Description'

it('should render correctly', () => {
	const { container } = render(<Description />)
	expect(container).toBeInTheDocument()
})
