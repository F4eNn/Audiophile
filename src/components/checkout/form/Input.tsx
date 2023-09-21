import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { isError: boolean };

export const Input = forwardRef(({ isError, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<input
			{...props}
			ref={ref}
			className={`${
				isError
					? 'border-[1px] border-error focus:border-[1px] focus:border-error focus:ring-1 focus:ring-error'
					: 'border-[#cfcfcf] focus:border-primary focus:ring-0 focus:ring-primary'
			} form-input block w-full
            rounded-lg p-4 pl-6  caret-primary placeholder:font-[600] placeholder:text-[#999999]`}
		/>
	);
});

Input.displayName = `checkout Input`;
