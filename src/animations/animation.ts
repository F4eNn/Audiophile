import { RefObject } from 'react'
import { gsap } from 'gsap'

type AnimatedRef = RefObject<HTMLElement>

export const animateDesktopNav = (element: AnimatedRef) => {
	gsap.to(element.current, { scale: 1, opacity: 1, duration: 0.6 })
}
export const animateMobileMenu = (element: AnimatedRef, isOpen: boolean) => {
	gsap.to(element.current, { opacity: isOpen ? 1 : 0, height: isOpen ? 'calc(100% - 89px)' : 0, duration: 0.5 })
}
export const animateMobileNav = (logo: AnimatedRef, hamburger: AnimatedRef, cart: AnimatedRef) => {
	const animatedItemsArr = [logo, hamburger, cart]
	animatedItemsArr.forEach(item => gsap.set(item.current, { y: -70 }))
	animatedItemsArr.forEach((item, idx) => gsap.to(item.current, { opacity: 1, y: 0, delay: idx * 0.4 }))
}
export const animateSection = (element: AnimatedRef) => {
	gsap.set(element.current, { y: 200 })
	gsap.to(element.current, { y: 0, opacity: 1, duration: 1, delay: 0.7 })
}
