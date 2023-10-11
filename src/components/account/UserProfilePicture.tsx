import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FaPen } from 'react-icons/fa6'
import Image from 'next/image'

import { useToggle } from '@/hooks/useToggle'
import { UploadModal } from './UploadModal'
import { UserInfoType } from './AccountProfile'
import { DispatchAction } from '@/types/general'
import { STRAPI_URL } from '@/constants/url'

type UserProfilePictureProps = Pick<UserInfoType, 'avatarID' | 'avatarUrl' | 'username' | 'id'> & {
	setIsUpdate: DispatchAction<boolean>
}

export const UserProfilePicture = (props: UserProfilePictureProps) => {
	const { avatarUrl, username } = props
	const [onAvatar, setOnAvatar] = useState(false)
	const [isModal, toggleModal] = useToggle()

	const handleMouseEnter = () => {
		setOnAvatar(true)
	}
	const handleMouseLeave = () => {
		setOnAvatar(false)
	}

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' relative ml-auto mt-6 w-max '>
			<div
				className={` colors-300 colors-300 relative mt-4 rounded-full md:mt-0 ${
					avatarUrl ? 'border-[3px] p-0' : 'border-[1px] p-3'
				} border-primary  text-primary`}
			>
				<div role='contentinfo'>
					{avatarUrl ? (
						<div className='relative aspect-square  w-[200px] rounded-full'>
							<Image
								src={`${STRAPI_URL}${avatarUrl}`}
								alt={`${username} avatar`}
								className=' rounded-full object-cover'
								fill
							/>
						</div>
					) : (
						<div data-testId='defaultAvatar'>
							<AiOutlineUser size='9em' />
						</div>
					)}
				</div>
				<div className='absolute right-5 top-1 text-gray'>
					<FaPen size='1.5em' />
				</div>
				{onAvatar && (
					<button
						onClick={toggleModal}
						className='colors-300 absolute -bottom-1 left-1/2 min-w-max -translate-x-1/2 rounded-md bg-primary p-3 font-[500] capitalize text-white hover:bg-secondary'
					>
						{`${avatarUrl ? 'Change' : 'Upload'} picture`}
					</button>
				)}
			</div>
			<UploadModal handleLeave={handleMouseLeave} toggle={toggleModal} {...props} isOpen={isModal} />
		</div>
	)
}
