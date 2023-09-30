import React, { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';

import { Portal } from '../ui/Portal';
import { ButtonPrimary } from '../ui/ButtonPrimary';
import { UserInfoType } from './AccountProfile';
import { STRAPI_URL } from '@/constants/url';
import { errorNotifcation } from '@/constants/errorNotification';
import { getTokenFromLocalCookie } from '@/helpers/auth';

type UploadModalProps = Pick<UserInfoType, 'avatarID' | 'username'> & {
	toggle: () => void;
	handleLeave: () => void;
};

type ResData = {
	url: string;
	id: number;
};

export const UploadModal = ({ handleLeave, toggle, avatarID, username }: UploadModalProps) => {
	const overlayRef = useRef(null);
	const [file, setFile] = useState<File | null>(null);

	const closeOnOverlay = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target;
		if (target === overlayRef.current) toggle();
		handleLeave();
	};

	const handleFileUpload = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
		if (files?.length) {
			const { type } = files[0];
			if (type === 'image/jpeg' || type === 'image/png') {
				setFile(files[0]);
			} else {
				errorNotifcation('Only jpeg and png types are allowed');
			}
		}
	};

	const updateUserAvatar = async ({ id, url }: ResData) => {
		console.log(id, url);
	};
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!file) {
			return errorNotifcation('File is required');
		}

		try {
			const avatarFiles = new FormData();
			avatarFiles.append('files', file);
			avatarFiles.append('name', `${username} avatar`);

			const jwt = getTokenFromLocalCookie();
			const res = await fetch(`${STRAPI_URL}/upload`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
				body: avatarFiles,
			});
			const resData: ResData[] = await res.json();
			updateUserAvatar({ ...resData[0] });
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<Portal selector='#uploadModal'>
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
					<form className='px-5 pb-5' onSubmit={handleSubmit}>
						<label htmlFor='avatarPicture' className='font-[600] text-secondaryDark'>
							File
						</label>
						<input
							onChange={handleFileUpload}
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
