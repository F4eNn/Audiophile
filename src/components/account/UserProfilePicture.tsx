import React, { MouseEvent, useRef, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import { useToggle } from '@/hooks/useToggle';
import { Portal } from '../ui/Portal';
import { ButtonPrimary } from '../ui/ButtonPrimary';

export const UserProfilePicture = () => {
	const [onAvatar, setOnAvatar] = useState(false);
	const [isModal, toggleModal] = useToggle();
	const overlayRef = useRef(null);

	const handleMouseEnter = () => {
		setOnAvatar(true);
	};
	const handleMouseLeave = () => {
		setOnAvatar(false);
	};

	const closeOnOverlay = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target;
		if (target === overlayRef.current) toggleModal();
		handleMouseLeave();
	};

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' relative mt-6 w-max '>
			<div className=' colors-300 colors-300 relative rounded-full border-[1px] border-primary p-3 text-primary  '>
				<AiOutlineUser size='9em' />
				<div className='absolute right-5 top-1 text-gray'>
					<FaPen size='1.5em' />
				</div>
				{onAvatar && (
					<button
						onClick={toggleModal}
						className='colors-300 absolute -bottom-1 left-1/2 min-w-max -translate-x-1/2 rounded-md bg-primary p-3 font-[500] capitalize text-white hover:bg-secondary'
					>
						Upload picture
					</button>
				)}
			</div>
			{isModal && (
				<Portal selector='#modal'>
					<div
						ref={overlayRef}
						onClick={closeOnOverlay}
						className='fixed inset-0 z-[100] flex justify-center bg-primaryDark/40 '
					>
						<div className='mt-32 h-max w-full max-w-[400px] rounded-md  bg-white'>
							<div className='flex justify-between px-5 pt-5'>
								<p className='text-lg font-bold'>Upload your avatar</p>
								<button onClick={toggleModal} className='colors-300 text-brown hover:text-primaryDark '>
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
										onClick={toggleModal}
										classNames='hover:bg-veryLightPrimary rounded-md px-3 py-2.5'
									/>
								</div>
							</form>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
};
