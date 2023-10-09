import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Input } from '@/components/ui/Input'

describe('Input component', () => {
	it('should render correctly', () => {
		render(<Input />)
		expect(screen.getByRole('textbox')).toBeInTheDocument()
	})
	it('should render error border class when isError is true', () => {
		render(<Input isError={true} />)
		expect(screen.getByRole('textbox')).toHaveClass('border-error')
	})
	it('should render without error border class when isError is false', () => {
		render(<Input isError={false} />)
		expect(screen.getByRole('textbox')).not.toHaveClass('border-error')
	})
})
