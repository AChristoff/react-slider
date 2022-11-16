import Slide from './slider/Slide'
import SliderNav from './slider/SliderNav'
import { slides } from '../data'
import { useEffect, useState } from 'react'
import SliderControls from './slider/SliderControls'

const Slider = ({
  initialIndex = 0,
  infiniteLoop = true,
  autoplay = true,
  autoplayInterval = 3000,
  transitionDuration = 400
}) => {
  const [slideIndex, setSlideIndex] = useState(initialIndex)

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setSlideIndex((current) =>
          current === slides.length - 1 ? 0 : current + 1
        )
      }, autoplayInterval)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <section style={{ width: '50vh', position: 'relative' }}>
      <Slide slides={slides} slideIndex={slideIndex} transitionDuration={transitionDuration} />
      <SliderControls
        slides={slides}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        infiniteLoop={infiniteLoop}
      />
      <SliderNav
        slides={slides}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </section>
  )
}
export default Slider
