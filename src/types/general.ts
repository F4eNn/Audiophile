import { ReactNode, Dispatch, SetStateAction } from 'react';

export type ChildrenWithProps = {
	children: ReactNode;
};
export type DispatchAction<T> = Dispatch<SetStateAction<T>>;
