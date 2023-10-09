import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Earphones } from '@/components/Home/main/Earphones'

it('should render correctly', () => {
	const { container } = render(<Earphones />)
	expect(container).toBeInTheDocument()
})
