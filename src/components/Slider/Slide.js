import React from 'react'
import {removeBr} from 'lib/utils'

export default function Slide({imgSrc, title}) {
	return (
		<article className="keen-slider__slide number-slide1 w-full">
			<div className="w-full h-0 overflow-hidden relative pb-[50%] xl:pb-[100vh]">
				<img
					src={imgSrc}
					alt={removeBr(title)}
					className="absolute top-0 w-full h-full"
					width={1920}
					height={925}
				/>
				<div className="absolute h-full w-full top-0 flex items-center">
					<h2
						className="container text-white uppercase mt-4 text-2xl leading-6 sm:text-4xl md:text-5xl
							lg:text-6xl xl:text-8xl font-bold md:font-extrabold lg:font-black"
						dangerouslySetInnerHTML={{__html: title}}
					></h2>
				</div>
			</div>
		</article>
	)
}
