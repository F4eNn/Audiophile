import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa6';

import { useToggle } from '@/hooks/useToggle';
import { UploadModal } from './UploadModal';

export const UserProfilePicture = () => {
	const [onAvatar, setOnAvatar] = useState(false);
	const [isModal, toggleModal] = useToggle();

	const handleMouseEnter = () => {
		setOnAvatar(true);
	};
	const handleMouseLeave = () => {
		setOnAvatar(false);
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
			{isModal && <UploadModal handleLeave={handleMouseLeave} toggle={toggleModal} />}
		</div>
	);
};
