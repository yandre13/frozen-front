import React from 'react'
import {removeBr} from 'lib/utils'

export default function index({imgSrc, title, description, btnText, linkHDV}) {
	return (
		<div className="w-full h-0 overflow-hidden relative pb-[65%] sm:pb-[54%] xl:pb-[100vh]">
			<img
				src={imgSrc}
				alt={removeBr(title)}
				className="absolute top-0 w-full h-full filter brightness-60 object-cover"
				width="1920"
				height="925"
			/>
			<div className="absolute h-full w-full top-0 flex flex-col justify-center">
				<div className="container">
					<h2
						className="text-white font-bold md:font-extrabold uppercase sm:pt-4 lg:pt-8 mb-2 md:my-4 text-2xl leading-6 sm:text-4xl md:text-5xl xl:text-7xl rm-br lg:add-br"
						dangerouslySetInnerHTML={{__html: title}}
					></h2>
					<p
						className="text-white text-sm sm:text-base lg:text-lg md:font-bold md:w-[50%] lg:w-[39%] mb-4 md:mb-8"
						dangerouslySetInnerHTML={{__html: description}}
					></p>
					<a
						href={linkHDV}
						rel="noreferrer noopener"
						download
						target="_blank"
						className="inline-block text-sm md:text-base text-white uppercase tracking-wider font-semibold px-4 py-3 border border-white
						transition duration-400 ease-in-out hover:bg-white hover:text-richs-3"
					>
						{btnText}
					</a>
				</div>
			</div>
		</div>
	)
}
