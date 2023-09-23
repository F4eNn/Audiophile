import React from 'react';

type ErrorMsgProps = {
	msg: string | undefined;
	isLabel?: boolean;
};

export const ErrorMessage = ({ msg, isLabel = true }: ErrorMsgProps) => {
	return <p className={`absolute ${isLabel ? '-top-1.5' : '-top-7'} right-0 text-xs text-error`}>{msg}</p>;
};
