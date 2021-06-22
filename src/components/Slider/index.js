import React from 'react'
import {Splide, SplideSlide} from 'splide-nextjs/react-splide'
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css'
import Slide from './Slide'

export default function index({slides}) {
	return (
		<>
			<Splide
				options={{
					type: 'fade',
					speed: 700,
					autoplay: true,
					interval: 7000,
					pauseOnHover: false,
					pauseOnFocus: false,
					arrows: false,
					rewind: true,
					classes: {
						pagination: 'splide__pagination hs', // container
						page: 'splide__pagination__page splide_p-page', // each button
					},
				}}
			>
				{slides.map((slide, idx) => (
					<SplideSlide key={idx}>
						<Slide imgSrc={slide?.banner?.url} title={slide?.title} />
					</SplideSlide>
				))}
			</Splide>
		</>
	)
}
