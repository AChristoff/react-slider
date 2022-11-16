import Slide from "./slider/Slide"
import SliderNav from "./slider/SliderNav"
import { slides } from "../data"
import { useState } from "react"
import SliderControls from "./slider/SliderControls"

const Slider = ({initialIndex}) => {

  const [slideIndex, setSlideIndex] = useState(initialIndex || 0)
  
  return (
    <section style={{width: '50vh', position: 'relative'}}>
      <Slide slides={slides} slideIndex={slideIndex}/>
      <SliderControls slides={slides} setSlideIndex={setSlideIndex} />
      <SliderNav slides={slides} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </section>
  )
}
export default Slider