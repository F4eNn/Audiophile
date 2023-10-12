import Cookies from 'js-cookie'

import { STRAPI_URL } from '@/constants/url'

export type DataTokenResponse = {
	user: {
		username: string
		id: string
	}
	jwt: string
}

export const setToken = (data: DataTokenResponse) => {
	if (typeof window === 'undefined') return
	Cookies.set('id', data.user.id)
	Cookies.set('username', data.user.username)
	Cookies.set('jwt', data.jwt)
}

export const unsetToken = () => {
	if (typeof window === 'undefined') return

	Cookies.remove('id')
	Cookies.remove('username')
	Cookies.remove('jwt')
}

export const getUserFromLocalCookie = async () => {
	const jwt = getTokenFromLocalCookie()
	const data = await getUser(jwt)
	return data && data.username
}
const getUser = async (jwt: string | undefined) => {
	if (jwt) {
		try {
			const res = await fetch(`${STRAPI_URL}/users/me`, {
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
			})

			if (!res.ok) {
				throw new Error('Network response was not ok')
			}
			const resData = await res.json()
			return resData
		} catch (error) {
			console.error('Error fetching user data:', error)
		}
	}
}

export const getTokenFromLocalCookie = () => {
	return Cookies.get('jwt')
}
