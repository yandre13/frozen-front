import Link from 'next/link'
import {useRouter} from 'next/router'
import jump from 'jump.js'

const NavLink = ({text, hash, classnames}) => {
	const router = useRouter()
	return (
		<>
			{router.pathname === '/' ? (
				<a
					role="button"
					className={`text-sm md:text-base text-white uppercase tracking-wider font-semibold px-3 ${
						classnames ? classnames : 'y-2'
					}`}
					onClick={() => jump(hash, {duration: 500})}
				>
					{text}
				</a>
			) : (
				<Link href={`/${hash}`}>
					<a
						role="button"
						className={`text-sm md:text-base text-white uppercase tracking-wider font-semibold px-3 ${
							classnames ? classnames : 'y-2'
						}`}
					>
						{text}
					</a>
				</Link>
			)}
		</>
	)
}

export default function index({imgSrc, title, link}) {
	return (
		<section className="absolute w-full top-0 z-10">
			<nav className="container relative flex justify-between inset-0">
				<div className="py-4">
					<a href={link}>
						<img
							src={imgSrc}
							alt={title}
							className="w-16 md:w-24 lg:w-32"
							width="120"
							height="65"
						/>
					</a>
				</div>
				<ul className="flex py-4 items-center">
					<li className="mr-2">
						<NavLink text="Productos" hash="#sectionProducts" />
					</li>
					<li className="ml-2">
						<NavLink
							text="Participá"
							hash="#sectionForm"
							classnames="py-[6px] border border-white rounded-lg"
						/>
					</li>
				</ul>
			</nav>
		</section>
	)
}
