const fs = require('fs')
const {getAllProducts, getPageBySlug} = require('./api')

const capitalizeFirstLetter = string =>
	string[0].toUpperCase() + string.slice(1)

const generateRssItem = product => `
		<item>
			<guid>${process.env.SITE_URL}/product/${product.slug}</guid>
			<title>${product?.acf?.metadata?.open_graph?.title}</title>
			<link>${process.env.SITE_URL}/product/${product.slug}</link>
			<description>${
				product?.acf?.metadata?.description ||
				product?.acf?.metadata?.open_graph?.description
			}</description>
			<pubDate>${new Date(product.date).toUTCString()}</pubDate>
		</item>`

// Edit the '<link>' and '<description>' data here to reflect your own website details!
const generateRss = ({home, products}) => `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${home?.acf?.metadata?.open_graph?.title}</title>
		<link>${home?.acf?.metadata?.open_graph?.url}</link>
		<description>${
			home?.acf?.metadata?.description ||
			home?.acf?.metadata?.open_graph?.description
		}</description>
		<language>es-AR</language>
		<lastBuildDate>${new Date(products[0].date).toUTCString()}</lastBuildDate>
		<atom:link href="${
			process.env.SITE_URL
		}/rss.xml" rel="self" type="application/rss+xml"/>${products
	.map(generateRssItem)
	.join('')}
	</channel>
</rss>`

const generateSitemapItem = product => `
  <url>
    <loc>${process.env.SITE_URL}/product/${product.slug}</loc>
    <lastmod>${new Date(product.date).toUTCString()}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`

const generateSitemap = ({products}) => `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${process.env.SITE_URL}/</loc>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>${process.env.SITE_URL}/product</loc>
		<lastmod>${new Date(products[0].date).toUTCString()}</lastmod>
		<changefreq>monthly</changefreq>
	</url>${products.map(generateSitemapItem).join('')}
</urlset>
`

const VALID_NAMES = ['sitemap', 'rss']
async function generateXmlFile(name) {
	if (!VALID_NAMES.includes(name)) {
		throw new Error(`name must be ${VALID_NAMES[0]} or ${VALID_NAMES[1]}`)
	}
	const products = await getAllProducts()
	const home = await getPageBySlug('home')
	const allPostsData = {home, products}
	const processedXml =
		name === 'rss' ? generateRss(allPostsData) : generateSitemap(allPostsData)
	fs.writeFile(`./public/${name}.xml`, processedXml, err => {
		if (err) {
			console.log(err)
		} else {
			console.log(`${capitalizeFirstLetter(name)} file written successfully`)
		}
	})
}

generateXmlFile('rss')
generateXmlFile('sitemap')
module.exports = {generateXmlFile, VALID_NAMES}
