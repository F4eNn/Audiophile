import React, { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & { title?: string };

export const Label = ({ title, ...rest }: LabelProps) => {
	return (
		<label {...rest} className='text-sm font-bold capitalize'>
			{title}
		</label>
	);
};
