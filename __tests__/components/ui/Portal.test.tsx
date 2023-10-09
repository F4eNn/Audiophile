import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Portal } from '@/components/ui/Portal'

it('should render children correctly', () => {
	const createPortal = document.createElement('div')
	createPortal.id = 'portal-id'
	document.body.appendChild(createPortal)

	const { getByText } = render(
		<Portal selector='#portal-id'>
			<div>Children 1</div>
		</Portal>,
	)

	const portalTarget = document.querySelector('#portal-id')
	expect(portalTarget).toContainElement(getByText('Children 1'))
	document.body.removeChild(createPortal)
})
