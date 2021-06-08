import React from 'react'
import Image from 'next/image'
import {removeBr} from 'lib/utils'

export default function index({imgSrc, title, description, btnText, linkHDV}) {
	return (
		<div className="w-full h-0 overflow-hidden relative pb-[80%] sm:pb-[50%] xl:pb-[100vh]">
			<Image
				src={imgSrc}
				alt={removeBr(title)}
				className="absolute top-0 w-full h-full filter brightness-60"
				layout="fill"
			/>
			<div className="absolute h-full w-full top-0 flex flex-col justify-center">
				<div className="container">
					<h2
						className="text-white font-bold md:font-extrabold uppercase pt-2 sm:pt-0 my-2 md:my-4 text-2xl leading-6 sm:text-4xl md:text-5xl lg:text-7xl"
						dangerouslySetInnerHTML={{__html: title}}
					></h2>
					<p
						className="text-white text-sm sm:text-base lg:text-lg md:font-bold md:w-[50%] lg:w-[39%] mb-6 md:mb-8"
						dangerouslySetInnerHTML={{__html: description}}
					></p>
					<a
						href={linkHDV}
						download
						target="_blank"
						className="text-sm md:text-base text-white uppercase tracking-wider font-semibold px-4 py-3 border border-white
						transition duration-400 ease-in-out hover:bg-white hover:text-richs-3"
					>
						{btnText}
					</a>
				</div>
			</div>
		</div>
	)
}
