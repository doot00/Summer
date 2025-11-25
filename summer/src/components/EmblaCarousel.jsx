import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import './css/embla.css'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const slideimg = [
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg',
    '/images/banner5.jpg',
    '/images/banner6.jpg',
    '/images/banner7.jpg'
  ]

  return (
    <section className="h-[450px] relative">
      <div className="embla__viewport w-full h-full bg-yellow-900" ref={emblaRef}>
        <div className="embla__container w-full h-full h-200">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="absolute inset-0 bg-cover opacity-80"
              style={{backgroundImage: `url(${slideimg[index]})`}}/>
              <div className="absolute w-full top-[200px] text-center text-gray-50 drop-shadow-2xl z-10">
                <h2 className="text-6xl" style={{ fontFamily: 'Cafe24Meongi, sans-serif' }}>
                  Summer
                  </h2>
                  <p className="text-xl">썸머</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots mt-0">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
