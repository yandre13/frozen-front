import React from 'react'
import Image from 'next/image'
import {removeBr} from 'lib/utils'
import Link from 'next/link'

export default function index({
	imgSrc,
	title,
	href,
	btnText,
	aspect = 75,
	downloadable,
}) {
	return (
		<article className="col-span-2 md:col-span-1">
			<div
				className={`w-full h-0 overflow-hidden relative ${
					aspect === 75 ? 'pb-[75%]' : 'pb-[85%]'
				}`}
			>
				<Image
					src={imgSrc}
					alt={removeBr(title)}
					className="absolute top-0 w-full h-full transition duration-500 ease-out filter brightness-60 hover:brightness-75"
					layout="fill"
				/>
				<div className="absolute inset-x-0 bottom-[10%] lg:bottom-[9%] px-6 flex flex-wrap">
					<h3
						className="text-white uppercase font-extrabold w-full leading-none text-[40px] lg:text-6xl mb-3"
						dangerouslySetInnerHTML={{__html: title}}
					></h3>
					<Link href={href}>
						<a
							download={downloadable}
							className="text-lg text-richs-1 uppercase font-bold px-4 py-3 bg-white"
						>
							{btnText}
						</a>
					</Link>
				</div>
			</div>
		</article>
	)
}
