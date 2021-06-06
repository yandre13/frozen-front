import React from 'react'
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Slide from './Slide'

export default function index({slides}) {
	const [currentSlide, setCurrentSlide] = React.useState(0)
	const [pause, setPause] = React.useState(false)
	const timer = React.useRef()
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide)
		},
		loop: true,
		duration: 1000,
		dragStart: () => {
			setPause(true)
		},
		dragEnd: () => {
			setPause(false)
		},
	})
	React.useEffect(() => {
		sliderRef.current.addEventListener('mouseover', () => {
			setPause(true)
		})
		sliderRef.current.addEventListener('mouseout', () => {
			setPause(false)
		})
	}, [sliderRef])

	React.useEffect(() => {
		timer.current = setInterval(() => {
			if (!pause && slider) {
				slider.next()
			}
		}, 13000)
		return () => {
			clearInterval(timer.current)
		}
	}, [pause, slider])
	return (
		<>
			<section ref={sliderRef} className="keen-slider">
				{slides.map((slide, idx) => (
					<Slide key={idx} imgSrc={slide?.banner?.url} title={slide?.title} />
				))}
			</section>
			{slider && (
				<div className="dots absolute w-full bottom-0">
					{[...Array(slider.details().size).keys()].map(idx => {
						return (
							<button
								key={idx}
								onClick={() => {
									slider.moveToSlideRelative(idx)
								}}
								className={'dot' + (currentSlide === idx ? ' active' : '')}
							/>
						)
					})}
				</div>
			)}
		</>
	)
}
