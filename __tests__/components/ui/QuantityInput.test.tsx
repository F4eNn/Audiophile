import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { QuantityInput } from '@/components/ui/QuantityInput'

describe('QuantityInput component', () => {
	it('should render input correctly with default value', () => {
		render(<QuantityInput />)
		const inputElement = screen.getByRole('spinbutton')
		expect(inputElement).toHaveValue(1)
	})
	it('should increase the value by 1', () => {
		render(<QuantityInput />)
		const inputElement = screen.getByRole('spinbutton')
		const incrementButton = screen.getByText('+')
		fireEvent.click(incrementButton)
		expect(inputElement).toHaveValue(2)
	})
	it('should decrease the value by 1', () => {
		render(<QuantityInput />)
		const inputElement = screen.getByRole('spinbutton')
		const incrementButton = screen.getByText('-')
		fireEvent.click(incrementButton)
		expect(inputElement).toHaveValue(1)
	})
})
