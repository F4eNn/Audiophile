import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SpeakerZX7 } from '@/components/Home/main/SpeakerZX7'

it('should render correctly', () => {
	const { container } = render(<SpeakerZX7 />)
	expect(container).toBeInTheDocument()
})
