import React from 'react'
import Image from 'next/image'

export default function index({logoSrc, bgSrc, links, rrss, policy}) {
	return (
		<footer
			className="bg-cover"
			style={{
				backgroundImage: `url(${bgSrc})`,
			}}
		>
			<section className="container py-6 md:py-10">
				<article className="flex justify-between mb-6">
					<div className="w-full md:w-[40%]">
						<a
							href={links?.main}
							rel="noreferrer noopener"
							target="_blank"
							className="text-white font-bold uppercase"
						>
							richs.com
						</a>
						<span className="block h-[1px] w-full bg-white mt-3 mb-2 mx-auto"></span>
						<ul>
							{links?.items &&
								links.items.map((link, idx) => (
									<li key={idx}>
										<a
											href={link.link}
											rel="noreferrer noopener"
											target="_blank"
											className="text-sm text-white font-bold uppercase"
										>
											{link.text}
										</a>
									</li>
								))}
						</ul>
					</div>
					<div className="flex justify-between">
						{rrss?.items &&
							rrss.items.map((rs, idx, items) => {
								const alt =
									idx === 0
										? 'Facebook'
										: idx === 1
										? 'Instagram'
										: idx === 2
										? 'YouTube'
										: 'Other rrss'
								return (
									<a
										key={idx}
										href={rs.link}
										rel="noreferrer noopener"
										target="_blank"
										className={idx !== items.length - 1 ? 'mr-2' : ''}
									>
										<Image src={rs.icon.url} width="30" height="30" alt={alt} />
									</a>
								)
							})}
					</div>
				</article>
				<span className="block h-[2px] w-full bg-white mt-3 mb-4 mx-auto"></span>
				<div className="flex flex-col xl:flex-row xl:justify-between pt-4 xl:py-4">
					<img
						src={logoSrc}
						alt="Rich's INFINITE POSSIBILITIES. ONE FAMILY"
						width="300"
						height="55"
					/>
					<small
						className="text-white font-bold text-sm pt-5 xl:pt-1"
						dangerouslySetInnerHTML={{__html: policy}}
					></small>
				</div>
			</section>
		</footer>
	)
}
