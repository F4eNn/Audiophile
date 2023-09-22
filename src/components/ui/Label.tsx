import React, { LabelHTMLAttributes } from 'react';

type LabelProps = Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'> & { title?: string; isError?: boolean };

export const Label = ({ title, isError, ...props }: LabelProps) => {
	return (
		<label {...props} className={`text-sm ${isError ? 'text-error' : ''} font-bold capitalize`}>
			{title}
		</label>
	);
};
