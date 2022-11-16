import Slide from "./slider/Slide"
import SliderButton from "./slider/SliderButton"
import SliderNav from "./slider/SliderNav"
import { slides } from "../data"

const Slider = () => {
  
  console.log('slides', slides)

  return (
    <section>
      <Slide data={slides} />
      <SliderButton/>
      <SliderNav/>
    </section>
  )
}
export default Slider