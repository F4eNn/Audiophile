import { useState, useCallback } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
	const [isOpen, setOpen] = useState(initialState);

	const toggleState = useCallback(() => {
		setOpen(prev => !prev);
	}, []);

	return [isOpen, toggleState];
};
