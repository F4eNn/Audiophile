import { render } from '@testing-library/react'

import '@testing-library/jest-dom'
import { UploadModal } from '@/components/account/UploadModal'

const modalValues = {
	avatarID: 12,
	avatarUrl: 'https://test-image.com',
	id: '40',
	username: 'John',
	setIsUpdate: jest.fn(),
	toggle: jest.fn(),
	isOpen: false,
	handleLeave: jest.fn(),
}

describe('UploadModal component', () => {
	it('should render correctly', () => {
		const { container } = render(<UploadModal {...modalValues} />)
		expect(container).toBeInTheDocument()
	})
})
