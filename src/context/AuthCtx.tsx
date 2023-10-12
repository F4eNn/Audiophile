'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { ChildrenWithProps, DispatchAction } from '@/types/general'
import { getUserFromLocalCookie } from '@/helpers/auth'
import { navigationPaths } from '@/constants/navigation'

type UserType = { user: string | undefined; setIsAuth: DispatchAction<boolean> }

const User = createContext<UserType>({ user: undefined, setIsAuth: () => {} })

let userState: string | undefined

export const UserProvider = ({ children }: ChildrenWithProps) => {
	const [isAuth, setIsAuth] = useState(false)
	const [dataUser, setUser] = useState({
		user: userState || undefined,
	})
	const registerPath = navigationPaths.register.path
	const pathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		if (userState !== undefined) return

		const getUser = async () => {
			const user = await getUserFromLocalCookie()
			setUser({ user })

			if (pathname === '/account' && !isAuth) {
				return router.push(navigationPaths.home.path)
			} else if (
				(pathname === `${registerPath}?mode=register` && isAuth) ||
				(pathname === `${registerPath}?mode=login` && isAuth) ||
				(pathname === registerPath && isAuth)
			) {
				return router.push(navigationPaths.home.path)
			}
		}
		getUser()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth])

	useEffect(() => {
		if (!userState && dataUser) {
			userState = dataUser.user
			setIsAuth(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const value = { user: dataUser.user, setIsAuth }

	return <User.Provider value={value}>{children}</User.Provider>
}

export const useUser = () => useContext(User)
