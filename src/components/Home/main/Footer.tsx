import React from 'react';
import Link from 'next/link';
import { BsDiscord, BsGithub } from 'react-icons/bs';

import { Wrapper } from '@/components/ui/Wrapper';
import { Logo } from '@/components/ui/Logo';
import { AnimateSection } from '@/components/ui/AnimateSection';
import { FooterNav } from './FooterNav';

export const Footer = () => {
	return (
		<footer className='mt-auto w-full overflow-hidden bg-primaryDark pb-14 text-white'>
			<Wrapper>
				<AnimateSection start='-650px'>
					<div className='mx-7 space-y-12 text-center sm:space-y-8 sm:text-left'>
						<div className='space-y-10'>
							<div className='mx-auto h-1 w-[100px] bg-primary sm:mx-0' />
							<div className='space-y-12 lg:flex lg:justify-between lg:space-y-0'>
								<div className='mx-auto w-max sm:mx-0'>
									<Logo />
								</div>
								<FooterNav />
							</div>
						</div>
						<div className='flex flex-col items-center gap-12  text-3xl sm:flex-row sm:items-end sm:justify-between lg:items-center'>
							<div className='space-y-12 md:space-y-24 lg:space-y-12'>
								<p className='max-w-[500px] text-sm leading-6 text-[#878787]'>
									Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers
									and sound specialists who are devoted to helping you get the most out of personal audio. Come and
									visit our demo facility - we&apos;re open 7 days a week.
								</p>
								<p className='text-sm text-[#878787]'>&copy; Copyright 2021. All Rights Reserved</p>
							</div>
							<div className='flex gap-8'>
								<Link
									href='https://discordapp.com/users/992404385705513010'
									target='_blank'
									rel='noopener noreferrer'
									className='colors-300 transition-all duration-300  hover:scale-110 hover:text-primary'
								>
									<BsDiscord />
								</Link>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/F4eNn'
									className='colors-300 transition-all duration-300 hover:scale-110 hover:text-primary'
								>
									<BsGithub />
								</Link>
							</div>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</footer>
	);
};
