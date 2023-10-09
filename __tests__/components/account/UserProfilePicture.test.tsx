import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { UserProfilePicture } from '@/components/account/UserProfilePicture'

const profileValues = {
	avatarID: 12,
	avatarUrl: 'https://test-image.com',
	id: '40',
	username: 'John',
	setIsUpdate: jest.fn(),
}
describe('UserProfilePicture component', () => {
	it('should render component without errors', () => {
		const { container } = render(<UserProfilePicture {...profileValues} />)
		expect(container).toBeInTheDocument()
	})
	it('should show button when mouse is enter and seek when leave, also should open modal when button is clicked', () => {
		const { getByRole } = render(<UserProfilePicture {...profileValues} />)
		const avatarElement = getByRole('contentinfo')

		fireEvent.mouseEnter(avatarElement)
		const uploadButton = getByRole('button')
		expect(uploadButton).toBeInTheDocument()

		fireEvent.mouseLeave(avatarElement)
		expect(uploadButton).not.toBeInTheDocument()
	})
	it('should render defaultAvatar if URL is null', () => {
		const { getByTestId } = render(<UserProfilePicture {...profileValues} avatarUrl={null} />)
		expect(getByTestId('defaultAvatar')).toBeInTheDocument()
	})
	it('should render user Avatar if URL is exist', () => {
		const { queryByTestId } = render(<UserProfilePicture {...profileValues} />)
		expect(queryByTestId('defaultAvatar')).not.toBeInTheDocument()
	})
})
