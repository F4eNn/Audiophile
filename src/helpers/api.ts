export const fetcher = async (url: string, options = {}) => {
	let response
	if (!options) {
		response = await fetch(url)
	} else {
		response = await fetch(url, options)
	}
	const responseData = response.json()
	return responseData
}
