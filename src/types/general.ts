import { ReactNode, Dispatch, SetStateAction } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { FormValues } from '@/components/checkout/form/Form';

export type ChildrenWithProps = {
	children: ReactNode;
};
export type DispatchAction<T> = Dispatch<SetStateAction<T>>;

export type FormProps = {
	control: Control<FormValues>;
	errors: FieldErrors<Readonly<FormValues>>;
};
