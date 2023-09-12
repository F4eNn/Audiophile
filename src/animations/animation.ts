import { type RefObject, type MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimatedRef = RefObject<HTMLElement>;

export const animateDesktopNav = (element: AnimatedRef) => {
	gsap.to(element.current, { scale: 1, opacity: 1, duration: 0.6 });
};
export const animateMobileMenu = (element: AnimatedRef, isOpen: boolean) => {
	gsap.to(element.current, { opacity: isOpen ? 1 : 0, height: isOpen ? 'calc(100% - 89px)' : 0, duration: 0.5 });
};
export const animateMobileNav = (logo: AnimatedRef, hamburger: AnimatedRef, cart: AnimatedRef) => {
	const animatedItemsArr = [logo, hamburger, cart];
	animatedItemsArr.forEach(item => gsap.set(item.current, { y: -70 }));
	animatedItemsArr.forEach((item, idx) => gsap.to(item.current, { opacity: 1, y: 0, delay: idx * 0.4 }));
};
export const animateHeroSection = (element: AnimatedRef) => {
	gsap.set(element.current, { y: 200 });
	gsap.to(element.current, { y: 0, opacity: 1, duration: 1, delay: 1.2 });
};
export const animateSection = (element: AnimatedRef, start = '-450px') => {
	gsap.set(element.current, { autoAlpha: 0, y: 200 });
	gsap.to(element.current, {
		scrollTrigger: {
			trigger: element.current,
			start: `${start} center `,
			end: 'none',
		},
		y: 0,
		autoAlpha: 1,
		duration: 1,
		ease: 'rough',
	});
};
export const animateCart = (element: AnimatedRef | null, isOpen: boolean) => {
	gsap.to(element!.current, { left: isOpen ? 0 : '100%', duration: 0.5 });
};

export const initCartAnimation = (element: AnimatedRef, tl: MutableRefObject<Timeline | undefined>) => {
	tl.current = gsap.timeline({ pause: true });
	tl.current.set(element.current?.nextElementSibling!, { y: -300, x: 150 });
	tl.current.to(element.current, { left: 0, duration: 0.7, ease: 'rough' });
	tl.current.to(element.current?.nextElementSibling!, { opacity: 1, scale: 1, duration: 0.4, y: 0, x: 0 }, '-=0.5');
};

export const toggleCartAnimation = (isCartOpen: boolean, tl: MutableRefObject<Timeline | undefined>) => {
	if (!tl.current) return;
	return isCartOpen ? tl.current.play() : tl.current.reverse();
};
export const addToCartAnimation = (element: AnimatedRef) => {
	const timeline = gsap.timeline();
	timeline
		.to(element.current, { duration: 0.3, scale: 0.8 })
		.to(element.current, { duration: 0.3, scale: 1.15 })
		.to(element.current, { duration: 0.3, scale: 1.1 });
};
