import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Banner from 'components/Banner'
import Navbar from 'components/Navbar'
import Card from 'components/Card'
import Benefit from 'components/Benefit'
import Footer from 'components/Footer'
import SEO from 'components/SEO'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// get data from CMS
import {getAllProducts, getPostBySlug, getPageBySlug} from 'lib/api'

export default function Post({allData = []}) {
	const router = useRouter()

	if (!router.isFallback && !allData?.productData?.slug) {
		return <p>hmm... something went wrong :c</p>
	}

	React.useEffect(() => {
		const player = videojs('richs-video', {
			fluid: true,
			playbackRates: [0.5, 1, 1.5, 2],
			playsinline: true,
			aspectRatio: '16:9',
		})
		return () => player && player.dispose()
	}, [])

	return (
		<>
			<SEO
				config={allData?.configData || []}
				single={allData?.productData || []}
			/>

			{router.isFallback ? (
				<h2>Loading...</h2>
			) : (
				<>
					<header className="relative">
						<Navbar
							imgSrc={allData?.configData?.acf?.header?.logo?.url}
							title={`Rich's Global`}
							link={allData?.configData?.acf?.header?.link_logo}
						/>
						<Banner
							imgSrc={allData?.productData?.acf?.banner?.image?.url}
							title={allData?.productData?.acf?.banner?.title}
							description={allData?.productData?.acf?.banner?.description}
							btnText={allData?.productData?.acf?.banner?.button_text}
							linkHDV={allData?.productData?.acf?.banner?.hdv?.url}
						/>
					</header>
					<main className="py-4 md:py-6 lg:py-8 xl:py-10">
						<section className="container py-2 md:py-4 lg:py-6">
							<h2
								className="text-4xl text-center md:text-5xl uppercase font-extrabold text-richs-3 mb-4"
								dangerouslySetInnerHTML={{
									__html: allData?.productData?.acf?.benefits?.title,
								}}
							></h2>
							<ul className="md:w-[90%] lg:w-[70%] mx-auto">
								{allData?.productData?.acf?.benefits?.items?.map(
									(item, idx) => (
										<Benefit
											key={idx}
											imgSrc={item?.icon?.url}
											description={item?.description}
										/>
									),
								)}
							</ul>
						</section>
						<section className="container py-2 md:py-4 lg:py-6">
							<h1
								className="text-4xl text-center md:text-5xl uppercase font-extrabold text-richs-3 mb-6 md:mb-10"
								dangerouslySetInnerHTML={{
									__html: allData?.productData?.acf?.video?.title,
								}}
							></h1>
							<div>
								<video
									controls
									id="richs-video"
									className="video-js vjs-big-play-centered"
									width="750"
									height="500"
									poster={allData?.productData?.acf?.video?.thumbnail?.url}
								>
									<source
										src={allData?.productData?.acf?.video?.video?.url}
										type="video/mp4"
									/>
								</video>
							</div>
						</section>
						<section className="container py-2 md:py-4 lg:py-6">
							<h2
								className="text-4xl text-center md:text-5xl uppercase font-extrabold text-richs-3 mb-4"
								dangerouslySetInnerHTML={{
									__html: allData?.productData?.acf?.recipes?.title,
								}}
							></h2>
							<p
								className="text-base md:text-lg text-center mb-8 md:mb-12"
								dangerouslySetInnerHTML={{
									__html: allData?.productData?.acf?.recipes?.description,
								}}
							></p>
							<div className="grid grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
								{allData?.productData?.acf?.recipes?.items?.map((item, idx) => (
									<Card
										key={idx}
										imgSrc={item?.image?.url}
										title={item?.title}
										href={item?.pdf?.url}
										btnText={allData?.productData?.acf?.recipes?.button_text}
										aspect={85}
										downloadable
									/>
								))}
							</div>
						</section>
						<div className="text-center py-6">
							<Link href="/">
								<a
									className="inline-block mx-auto text-sm md:text-base text-richs-3 uppercase tracking-wider font-semibold px-4 py-3 border border-[#f50944]
						transition duration-400 ease-in-out hover:bg-white hover:text-richs-1"
								>
									<span className="inline-block transform rotate-180">➜</span>{' '}
									Todos los productos
								</a>
							</Link>
						</div>
					</main>

					<Footer
						logoSrc={allData?.configData?.acf?.footer?.logo?.url}
						bgSrc={allData?.configData?.acf?.footer?.background?.url}
						links={allData?.configData?.acf?.footer?.links}
						rrss={allData?.configData?.acf?.footer?.rrss}
						policy={allData?.configData?.acf?.footer?.policy}
					/>
				</>
			)}
		</>
	)
}

export async function getStaticPaths() {
	const allProducts = await getAllProducts()
	return {
		paths: allProducts.map(({slug}) => `/product/${slug}`),
		fallback: true,
	}
}

export async function getStaticProps({params}) {
	const productData = await getPostBySlug(params.slug),
		configData = await getPageBySlug('config')

	return {
		props: {
			allData: {
				productData,
				configData,
			},
		},
		revalidate: 20,
	}
}
