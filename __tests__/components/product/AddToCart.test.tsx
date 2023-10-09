import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { AddToCart } from '@/components/product/AddToCart'

it('should render correctly', () => {
	const { container } = render(<AddToCart />)
	expect(container).toBeInTheDocument()
})
