import Link from 'next/link'

export default function index({imgSrc, title, link}) {
	return (
		<section className="absolute w-full top-0 z-10">
			<nav className="container relative flex justify-between inset-0">
				<div className="py-4">
					<Link href={link}>
						<a>
							<img
								src={imgSrc}
								alt={title}
								className="w-16 md:w-24 lg:w-32"
								width="120"
								height="65"
							/>
						</a>
					</Link>
				</div>
				<ul className="flex py-4 items-center">
					<li className="mr-2">
						<a
							href="#"
							role="button"
							className="text-sm md:text-base text-white uppercase tracking-wider font-semibold px-3 py-2"
						>
							Productos
						</a>
					</li>
					<li className="ml-2">
						<a
							href="#"
							role="button"
							className="text-sm md:text-base text-white uppercase tracking-wider font-semibold px-3 py-[6px] border border-white rounded-lg"
						>
							Participá
						</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}
