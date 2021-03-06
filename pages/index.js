import Slider from 'components/Slider'
import Navbar from 'components/Navbar'
import Card from 'components/Card'
import Footer from 'components/Footer'
import SEO from 'components/SEO'
import MarketoForm from 'components/MarketoForm'

// get data from CMS
import {getAllProducts, getPageBySlug} from 'lib/api'
import {removeBr} from 'lib/utils'

export default function Home({allData = []}) {
	if (allData.error) {
		return <h1>Loading</h1>
	}
	const getPolicyLink = arr =>
		arr.find(e => e.text === 'POLÍTICA DE PRIVACIDAD')?.link

	return (
		<>
			<SEO
				config={allData?.configData || []}
				single={allData?.homeData || []}
			/>

			<header className="relative">
				<Navbar
					imgSrc={allData?.configData?.acf?.header?.logo?.url}
					title={`Rich's Global`}
					link={allData?.configData?.acf?.header?.link_logo}
					buttons={allData?.configData?.acf?.header?.buttons}
				/>
				<Slider slides={allData?.homeData?.acf?.slider?.slides} />
			</header>

			<main>
				<section
					id="sectionProducts"
					className="container py-4 md:pt-10 lg:pt-14"
				>
					<h1
						className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold text-richs-1 mb-4"
						dangerouslySetInnerHTML={{
							__html: allData?.homeData?.acf?.section_products?.title,
						}}
					></h1>
					<p
						className="text-base md:text-lg"
						dangerouslySetInnerHTML={{
							__html: allData?.homeData?.acf?.section_products?.description,
						}}
					></p>
				</section>
				<section className="container grid grid-cols-2 gap-6 lg:gap-8 pt-2 pb-6 md:py-4 lg:py-5 md:pb-10 lg:pb-14 xl:pb-16">
					{allData?.allProducts?.map((product, idx) => (
						<Card
							key={idx}
							imgSrc={product?.featured_image_url}
							title={product?.title?.rendered}
							href={`/product/${product?.slug}`}
							btnText="Descubrí más ➜"
						/>
					))}
				</section>
				<section id="sectionForm" className="bg-[#FDF9FA]">
					<div className="container grid grid-cols-2 gap-6 md:gap-8 lg:gap-12 py-4 md:py-10 lg:py-14 xl:py-16">
						<article className="col-span-2 md:col-span-1">
							<h3
								className="text-3xl sm:text-4xl lg:text-5xl lg:leading-1-1 uppercase font-extrabold text-richs-2 mb-4"
								dangerouslySetInnerHTML={{
									__html: allData?.homeData?.acf?.section_form?.title,
								}}
							></h3>
							<p
								className="text-base md:text-lg mb-4 md:mb-8"
								dangerouslySetInnerHTML={{
									__html: allData?.homeData?.acf?.section_form?.description,
								}}
							></p>
							<img
								src={allData?.homeData?.acf?.section_form?.image?.url}
								alt={removeBr(allData?.homeData?.acf?.section_form?.title)}
								className="w-full object-cover"
								width={743}
								height={641}
							/>
						</article>
						<article className="col-span-2 md:col-span-1 min-h-[400px]">
							<MarketoForm
								baseUrl={allData?.homeData?.acf?.section_form?.form?.base_url}
								munchkinId={
									allData?.homeData?.acf?.section_form?.form?.id_marketo
								}
								formId={allData?.homeData?.acf?.section_form?.form?.id_form}
								classname="md:mt-4"
								callback={() => {
									const lb = document.querySelector(
										'#LblagreementtoTermsofUseandPrivacyPolicy',
									)
									if (lb) {
										const parent = lb.parentElement
										parent.setAttribute(
											'style',
											'display: flex !important; flex-direction: row-reverse !important; justify-content: flex-end !important',
										)
										const container = parent.children[2]
										const gutter = parent.children[1]
										container.style.width = 'auto'
										gutter.style.width = 'auto'
										const grandPaParent = parent.parentElement.parentElement
										grandPaParent.setAttribute(
											'style',
											'width: 100% !important',
										)
										const text = lb.childNodes[1]
										const textToReplace =
											allData?.homeData?.acf?.section_form?.form
												?.callback_text || 'POLÍTICA DE PRIVACIDAD.'
										const newText = ''
											.concat(text.nodeValue)
											.replace(textToReplace, '')
										lb.innerHTML = `<div class="mktoAsterix"></div><span class="font-weight-normal font-title-color">${newText}<a style="font-weight: 800; padding: 0; text-decoration: underline;" class="font-weight-bold title-color" href="${getPolicyLink(
											allData?.configData?.acf?.footer?.links?.items,
										)}" target="_blank" rel="noreferrer noopener">${textToReplace}*</a></span>`
										const modifyFormCheck = function modifyFormCheck(inputId) {
											const chk = document.getElementById(inputId)
											chk.parentElement.style.padding = '0 2px'
										}
										modifyFormCheck('agreementtoTermsofUseandPrivacyPolicy')
									}
								}}
							/>
						</article>
					</div>
				</section>
			</main>

			<Footer
				logoSrc={allData?.configData?.acf?.footer?.logo?.url}
				bgSrc={allData?.configData?.acf?.footer?.background?.url}
				links={allData?.configData?.acf?.footer?.links}
				rrss={allData?.configData?.acf?.footer?.rrss}
				policy={allData?.configData?.acf?.footer?.policy}
			/>
		</>
	)
}

export async function getStaticProps() {
	const allProducts = await getAllProducts(),
		homeData = await getPageBySlug('home'),
		configData = await getPageBySlug('config')
	if (!configData) {
		return {
			props: {
				allData: {error: true},
			},
			revalidate: 20,
		}
	}
	return {
		props: {
			allData: {
				allProducts,
				homeData,
				configData,
			},
		},
		revalidate: 20,
	}
}
