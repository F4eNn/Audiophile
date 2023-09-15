import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<input
			{...props}
			ref={ref}
			className='focus-border-[1px] form-input block w-full
            rounded-lg border-[#cfcfcf] p-4 pl-6 text-sm caret-primary placeholder:font-[600] placeholder:text-[#999999] focus:border-primary focus:ring-0  '
		/>
	);
});

Input.displayName = `checkout Input`;
