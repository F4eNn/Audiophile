import React, { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & { title?: string };

export const Label = ({ title, ...props }: LabelProps) => {
	return (
		<label {...props} className='text-sm font-bold capitalize'>
			{title}
		</label>
	);
};
