const API_URL = process.env.WP_API_URL

export async function getAllProducts() {
	const response = await fetch(`${API_URL}/posts/`),
		json = await response.json()

	return json
}

export async function getPageBySlug(slug) {
	const response = await fetch(`${API_URL}/pages?slug=${slug}`),
		[json] = await response.json()

	return json
}

export async function getPostBySlug(slug) {
	const response = await fetch(`${API_URL}/posts?slug=${slug}`),
		[json] = await response.json()

	return json
}
