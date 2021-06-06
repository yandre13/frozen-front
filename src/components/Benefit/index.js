import React from 'react'

export default function index({imgSrc, description}) {
	return (
		<li className="flex items-center py-1">
			<img
				src={imgSrc}
				alt={description}
				className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
				width={100}
				height={100}
			/>
			<p
				className="text-base md:text-lg ml-2"
				dangerouslySetInnerHTML={{__html: description}}
			></p>
		</li>
	)
}
