import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { userEvent } from '@testing-library/user-event'

import { HistoryItem } from '@/components/account/HistoryItem'

const historyData = [
	{
		image: '/image-product-3',
		name: 'Speakers',
		price: 500,
		quantity: 3,
	},
	{
		image: '/image-product-1',
		name: 'Headphones',
		price: 100,
		quantity: 3,
	},
]

const createdAt = '2023-10-09'

describe('HistoryItem component', () => {
	it('should render elements without issues', () => {
		const { container, getAllByText, getAllByAltText } = render(
			<HistoryItem history={historyData} createdAt={createdAt} />,
		)
		expect(container).toBeInTheDocument()

		expect(getAllByText('Speakers')[0]).toBeInTheDocument()
		expect(getAllByAltText('Speakers')[0]).toBeInTheDocument()
		expect(getAllByText('500$')[0]).toBeInTheDocument()
		expect(getAllByText('3x')[0]).toBeInTheDocument()
	})
	it('should show more items if button is clicked', async () => {
		const { getByRole, getAllByText } = render(<HistoryItem history={historyData} createdAt={createdAt} />)
		const buttonElement = getByRole('button')
		await userEvent.click(buttonElement)
		expect(getAllByText('Headphones')[0]).toBeInTheDocument()
	})
	it('should change button name to SEE LESS after click', async () => {
		const { getByRole } = render(<HistoryItem history={historyData} createdAt={createdAt} />)
		const buttonElement = getByRole('button')
		await userEvent.click(buttonElement)
		expect(buttonElement).toHaveTextContent('See less')
	})
})
