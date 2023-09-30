import React, { MouseEvent, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

import { Portal } from '../ui/Portal';
import { ButtonPrimary } from '../ui/ButtonPrimary';

type UploadModalProps = {
	toggle: () => void;
	handleLeave: () => void;
};

export const UploadModal = ({ handleLeave, toggle }: UploadModalProps) => {
	const overlayRef = useRef(null);

	const closeOnOverlay = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target;
		if (target === overlayRef.current) toggle();
		handleLeave();
	};

	return (
		<Portal selector='#modal'>
			<div
				ref={overlayRef}
				onClick={closeOnOverlay}
				className='fixed inset-0 z-[100] flex justify-center bg-primaryDark/40 '
			>
				<div className='mt-32 h-max w-full max-w-[400px] rounded-md  bg-white'>
					<div className='flex justify-between px-5 pt-5'>
						<p className='text-lg font-bold'>Upload your avatar</p>
						<button onClick={toggle} className='colors-300 text-brown hover:text-primaryDark '>
							<IoClose size='30px' />
						</button>
					</div>
					<hr className='my-4 border-veryLightPrimary' />
					<form className='px-5 pb-5  '>
						<label htmlFor='avatarPicture' className='font-[600] text-secondaryDark'>
							File
						</label>
						<input
							id='avatarPicture'
							type='file'
							className='colors-300 form-input block w-full cursor-pointer rounded-md border-[2px] border-secondary p-0 text-primary transition-all duration-300  file:cursor-pointer file:rounded-md file:border-none file:p-2 file:font-[500] hover:ring-[1px] hover:ring-primary  focus:border-[3px] focus:border-primary focus:ring-0'
						/>
						<div className=' ml-auto mt-8 w-max space-x-3'>
							<ButtonPrimary
								title='Upload'
								type='submit'
								classNames='bg-primary text-white px-5 py-2.5 rounded-md hover:bg-secondary'
							/>
							<ButtonPrimary
								title='Cancel'
								type='button'
								onClick={toggle}
								classNames='hover:bg-veryLightPrimary rounded-md px-3 py-2.5'
							/>
						</div>
					</form>
				</div>
			</div>
		</Portal>
	);
};
