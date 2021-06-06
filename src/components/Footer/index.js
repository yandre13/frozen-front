import React from 'react'

export default function index() {
	return (
		<footer
			className="bg-cover"
			style={{
				backgroundImage:
					'url(https://lp.richs.com/rs/241-MUE-112/images/ih_bg-footer.png)',
			}}
		>
			<section className="container py-6 md:py-10">
				<article className="flex justify-between mb-6">
					<div className="w-full md:w-[40%]">
						<a href="#" className="text-white font-bold uppercase">
							richs.com
						</a>
						<span className="block h-[1px] w-full bg-white mt-3 mb-2 mx-auto"></span>
						<ul>
							<li>
								<a href="#" className="text-sm text-white font-bold uppercase">
									Our products Argentina
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-white font-bold uppercase">
									Our products Global experience
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-white font-bold uppercase">
									Política de privacidad
								</a>
							</li>
						</ul>
					</div>
					<div className="w-32 flex justify-between">
						<a
							href="https://www.facebook.com/richsperu/"
							rel="noopener"
							target="_blank"
						>
							<img
								src="https://lp.richs.com/rs/241-MUE-112/images/ih_icono_fb.png"
								width="30"
								height="30"
								alt="Facebook"
							/>
						</a>
						<a
							href="https://www.instagram.com/richsperu/"
							rel="noopener"
							target="_blank"
						>
							<img
								src="https://lp.richs.com/rs/241-MUE-112/images/ih_icono_ig.png"
								width="30"
								height="30"
								alt="Instagram"
							/>
						</a>
						<a
							href="https://www.youtube.com/channel/UChN7MVflB7pHzliE0XPPQeA"
							rel="noopener"
							target="_blank"
						>
							<img
								src="https://lp.richs.com/rs/241-MUE-112/images/ih_icono_yt.png"
								width="30"
								height="30"
								alt="YouTube"
							/>
						</a>
					</div>
				</article>
				<span className="block h-[2px] w-full bg-white mt-3 mb-4 mx-auto"></span>
				<div className="flex flex-col xl:flex-row xl:justify-between pt-4 xl:py-4">
					<img
						src="https://lp.richs.com/rs/241-MUE-112/images/ih_logotipo_richs.png"
						width="300"
						height="55"
						alt="Rich's 2021"
					/>
					<small className="text-white font-bold text-sm pt-5 xl:pt-1">
						© 2021 RICH'S de los Andes 2021, todos los derechos, términos de uso
						y políticas de privacidad reservados
					</small>
				</div>
			</section>
		</footer>
	)
}
