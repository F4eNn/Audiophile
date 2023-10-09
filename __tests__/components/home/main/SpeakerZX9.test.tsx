import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SpeakerZX9 } from '@/components/Home/main/SpeakerZX9'

it('should render correctly', () => {
	const { container } = render(<SpeakerZX9 />)
	expect(container).toBeInTheDocument()
})
