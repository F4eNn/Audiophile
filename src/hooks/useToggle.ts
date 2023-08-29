import { useState, useCallback } from 'react'

export const useToggle = (initialState = false) => {
	const [isOpen, setOpen] = useState(initialState)

	const toggleState = useCallback(() => {
		setOpen(prev => !prev)
	}, [])

	return [isOpen, toggleState]
}
